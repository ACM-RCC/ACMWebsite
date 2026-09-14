/**
 * The weekly meeting: one config and the time math every component reads.
 *
 * All calendar math happens in the meeting's own time zone, so a visitor whose
 * device is set to another zone still sees the right day, time, and countdown.
 * Dates are "YYYY-MM-DD" keys in that zone.
 *
 * Each term, update firstDate, lastDate, and skip from the RCCD academic
 * calendar. After lastDate the site shows the break state until they change.
 */

export type DateKey = string;

interface ClockTime {
	hour: number;
	minute: number;
}

interface MeetingConfig {
	timeZone: string;
	weekday: number;
	start: ClockTime;
	end: ClockTime;
	room: string;
	roomName: string;
	building: string;
	campus: string;
	firstDate: DateKey;
	lastDate: DateKey;
	skip: readonly { date: DateKey; reason: string }[];
}

export const MEETING: MeetingConfig = {
	timeZone: "America/Los_Angeles",
	weekday: 4, // Thursday (0 = Sunday)
	start: { hour: 13, minute: 30 },
	end: { hour: 14, minute: 30 },
	room: "A-210",
	roomName: "Simulation Lab",
	building: "BLCIS",
	campus: "Riverside City College",
	// Fall 2026, from the RCCD 2026-27 academic calendar.
	firstDate: "2026-08-27",
	lastDate: "2026-12-10",
	skip: [{ date: "2026-11-26", reason: "Thanksgiving break" }],
};

/** Past this, the timeline would be too dense to read, so none is drawn. */
const MAX_TIMELINE_DAYS = 15;

export type MeetingState =
	| { kind: "upcoming"; date: DateKey; start: Date; end: Date; daysAway: number }
	| { kind: "live"; date: DateKey; start: Date; end: Date }
	| { kind: "break" };

export type ScheduledMeeting = Exclude<MeetingState, { kind: "break" }>;

export interface TimelineSlot {
	date: DateKey;
	kind: "next" | "live" | "later" | "skipped";
	/** Left edge as a fraction of the timeline width. */
	position: number;
	/** Meeting length as a fraction of the timeline width. */
	width: number;
	reason?: string;
}

export interface TimelineDay {
	date: DateKey;
	weekday: number;
	position: number;
}

export interface Timeline {
	days: number;
	/** Now, as a fraction of the timeline width. */
	now: number;
	dayMarks: TimelineDay[];
	slots: TimelineSlot[];
}

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const RRULE_DAYS = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

const pad = (n: number) => n.toString().padStart(2, "0");

const zoneParts = new Intl.DateTimeFormat("en-US", {
	timeZone: MEETING.timeZone,
	hourCycle: "h23",
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
});

/** Wall-clock fields in the meeting's time zone for an instant. */
function wallClock(instant: Date) {
	const parts = zoneParts.formatToParts(instant);
	const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
	return {
		year: get("year"),
		month: get("month"),
		day: get("day"),
		hour: get("hour"),
		minute: get("minute"),
		second: get("second"),
	};
}

function parseKey(key: DateKey) {
	return {
		year: Number(key.slice(0, 4)),
		month: Number(key.slice(5, 7)),
		day: Number(key.slice(8, 10)),
	};
}

function toKey(year: number, month: number, day: number): DateKey {
	return `${year}-${pad(month)}-${pad(day)}`;
}

function addDays(key: DateKey, days: number): DateKey {
	const { year, month, day } = parseKey(key);
	const d = new Date(Date.UTC(year, month - 1, day + days));
	return toKey(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate());
}

function weekdayOf(key: DateKey): number {
	const { year, month, day } = parseKey(key);
	return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

/** The instant a wall-clock time on a date key occurs in the meeting's zone. */
function zonedInstant(key: DateKey, hour: number, minute: number): Date {
	const { year, month, day } = parseKey(key);
	const asUtc = Date.UTC(year, month - 1, day, hour, minute);
	const offsetAt = (ms: number) => {
		const w = wallClock(new Date(ms));
		return Date.UTC(w.year, w.month - 1, w.day, w.hour, w.minute, w.second) - Math.floor(ms / 1000) * 1000;
	};
	// Second pass settles the offset when the first guess lands across a DST change.
	return new Date(asUtc - offsetAt(asUtc - offsetAt(asUtc)));
}

function todayKey(now: Date): DateKey {
	const w = wallClock(now);
	return toKey(w.year, w.month, w.day);
}

function isSkipped(key: DateKey) {
	return MEETING.skip.find((s) => s.date === key);
}

function inTerm(key: DateKey) {
	return key >= MEETING.firstDate && key <= MEETING.lastDate;
}

export function getMeetingState(now: Date): MeetingState {
	const today = todayKey(now);
	for (let i = 0; i < 400; i++) {
		const key = addDays(today, i);
		if (key > MEETING.lastDate) break;
		if (weekdayOf(key) !== MEETING.weekday || !inTerm(key) || isSkipped(key)) continue;
		const start = zonedInstant(key, MEETING.start.hour, MEETING.start.minute);
		const end = zonedInstant(key, MEETING.end.hour, MEETING.end.minute);
		if (now >= end) continue;
		if (now >= start) return { kind: "live", date: key, start, end };
		return { kind: "upcoming", date: key, start, end, daysAway: i };
	}
	return { kind: "break" };
}

/**
 * A wall-clock ruler from midnight today through the day of the next meeting,
 * eight to fifteen days long. Positions ignore DST so every day is the same width.
 * Null on break, or when the next meeting is too far out to draw.
 */
export function getTimeline(now: Date, state: MeetingState): Timeline | null {
	if (state.kind === "break") return null;

	const today = todayKey(now);
	const nextIndex = state.kind === "live" ? 0 : state.daysAway;
	if (nextIndex + 1 > MAX_TIMELINE_DAYS) return null;
	const days = Math.max(8, nextIndex + 1);
	const w = wallClock(now);
	const hoursOf = (t: ClockTime) => t.hour + t.minute / 60;
	const width = (hoursOf(MEETING.end) - hoursOf(MEETING.start)) / 24 / days;

	const dayMarks: TimelineDay[] = [];
	const slots: TimelineSlot[] = [];

	for (let i = 0; i < days; i++) {
		const key = addDays(today, i);
		const weekday = weekdayOf(key);
		dayMarks.push({ date: key, weekday, position: i / days });

		if (weekday !== MEETING.weekday || !inTerm(key)) continue;
		const position = (i + hoursOf(MEETING.start) / 24) / days;
		const skipped = isSkipped(key);
		if (skipped) {
			slots.push({ date: key, kind: "skipped", position, width, reason: skipped.reason });
		} else if (key === state.date) {
			slots.push({ date: key, kind: state.kind === "live" ? "live" : "next", position, width });
		} else if (key > state.date) {
			slots.push({ date: key, kind: "later", position, width });
		}
	}

	return {
		days,
		now: (w.hour + w.minute / 60 + w.second / 3600) / 24 / days,
		dayMarks,
		slots,
	};
}

const plural = (n: number, unit: string) => `${n} ${unit}${n === 1 ? "" : "s"}`;

/** "3 days, 4 hours", "1 hour, 5 minutes", "12 minutes", "under a minute". */
export function formatUntil(ms: number): string {
	const totalMinutes = Math.floor(ms / 60_000);
	if (totalMinutes < 1) return "under a minute";
	const days = Math.floor(totalMinutes / 1440);
	const hours = Math.floor((totalMinutes % 1440) / 60);
	const minutes = totalMinutes % 60;
	if (days > 0) return hours ? `${plural(days, "day")}, ${plural(hours, "hour")}` : plural(days, "day");
	if (hours > 0) return minutes ? `${plural(hours, "hour")}, ${plural(minutes, "minute")}` : plural(hours, "hour");
	return plural(minutes, "minute");
}

/** "1 hour" */
export function meetingLength(): string {
	const minutes = MEETING.end.hour * 60 + MEETING.end.minute - (MEETING.start.hour * 60 + MEETING.start.minute);
	return formatUntil(minutes * 60_000);
}

/** "1:30", or "1:30 PM" with the meridiem. */
export function formatClock(t: ClockTime, meridiem = true): string {
	const clock = `${t.hour % 12 || 12}:${pad(t.minute)}`;
	return meridiem ? `${clock} ${t.hour < 12 ? "AM" : "PM"}` : clock;
}

/** "1:30 to 2:30 PM" */
export function meetingHours(): string {
	const sameHalf = (MEETING.start.hour < 12) === (MEETING.end.hour < 12);
	return `${formatClock(MEETING.start, !sameHalf)} to ${formatClock(MEETING.end)}`;
}

export const MEETING_WEEKDAY = WEEKDAYS[MEETING.weekday];

const DATE_FORMATS = {
	long: { weekday: "long", month: "long", day: "numeric" },
	monthDay: { month: "long", day: "numeric" },
	short: { weekday: "short", month: "short", day: "numeric" },
	weekdayShort: { weekday: "short" },
} as const;

export function formatDateKey(key: DateKey, style: keyof typeof DATE_FORMATS): string {
	const { year, month, day } = parseKey(key);
	return new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...DATE_FORMATS[style] }).format(
		new Date(Date.UTC(year, month - 1, day))
	);
}

/** Machine-readable local date and time for a <time> element. */
export function dateTimeAttr(key: DateKey, t: { hour: number; minute: number }): string {
	return `${key}T${pad(t.hour)}:${pad(t.minute)}`;
}

/**
 * Google Calendar link for the weekly series, starting at this meeting and ending with the term.
 * The template link cannot exclude dates, so skipped weeks are named in the description.
 */
export function calendarUrl(meeting: ScheduledMeeting): string {
	const compact = (key: DateKey, t: { hour: number; minute: number }) =>
		`${key.replace(/-/g, "")}T${pad(t.hour)}${pad(t.minute)}00`;
	const until = zonedInstant(MEETING.lastDate, MEETING.end.hour, MEETING.end.minute)
		.toISOString()
		.replace(/[-:]/g, "")
		.replace(/\.\d{3}/, "");
	const params = new URLSearchParams({
		action: "TEMPLATE",
		text: "RCC ACM Meeting",
		dates: `${compact(meeting.date, MEETING.start)}/${compact(meeting.date, MEETING.end)}`,
		ctz: MEETING.timeZone,
		location: `${MEETING.roomName}, ${MEETING.building} ${MEETING.room}, ${MEETING.campus}`,
		details: [
			"Weekly ACM meeting. Coding, talks, and community. All students welcome.",
			...MEETING.skip
				.filter((s) => s.date > meeting.date)
				.map((s) => `No meeting on ${formatDateKey(s.date, "monthDay")} (${s.reason}).`),
		].join(" "),
		recur: `RRULE:FREQ=WEEKLY;BYDAY=${RRULE_DAYS[MEETING.weekday]};UNTIL=${until}`,
	});
	return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
