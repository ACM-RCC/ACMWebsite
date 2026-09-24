"use client";

import { useClubMeeting } from "@/hooks/useClubMeeting";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/animations/gsap";
import { motionMatchMedia } from "@/lib/animations/match-media";
import { DURATION, EASE, STAGGER } from "@/lib/animations/motion";
import {
	MEETING,
	MEETING_WEEKDAY,
	calendarUrl,
	dateTimeAttr,
	formatClock,
	formatDateKey,
	formatUntil,
	getTimeline,
	meetingHours,
	type MeetingState,
	type Timeline,
} from "@/lib/meeting";
import { memo, useEffect, useRef } from "react";

const DISCORD = "https://discord.gg/fM2HbsJyBG";
const PLACE = (
	<>
		{MEETING.roomName},{" "}
		<span className="whitespace-nowrap">
			{MEETING.building} {MEETING.room}
		</span>
	</>
);
const START = formatClock(MEETING.start, false);

/** Days shown before a meeting is ever computed, so the ruler holds its space. */
const PLACEHOLDER_DAYS = 8;

function Headline({ meeting }: { meeting: MeetingState | null }) {
	if (meeting?.kind === "live") {
		return (
			<>
				We&rsquo;re in <span className="whitespace-nowrap">{MEETING.room}</span> right now.
			</>
		);
	}
	if (meeting?.kind === "break") return <>Back next term.</>;
	if (!meeting) return <>See you {MEETING_WEEKDAY} at {START}.</>;

	const { daysAway, date } = meeting;
	const when =
		daysAway === 0
			? "today"
			: daysAway < 7
				? MEETING_WEEKDAY
				: daysAway === 7
					? `next ${MEETING_WEEKDAY}`
					: `on ${formatDateKey(date, "monthDay")}`;

	return (
		<>
			See you{" "}
			<time dateTime={dateTimeAttr(date, MEETING.start)}>
				{when} at {START}
			</time>
			.
		</>
	);
}

function Body({ meeting, timeline }: { meeting: MeetingState | null; timeline: Timeline | null }) {
	if (meeting?.kind === "live") {
		return (
			<>
				Today&rsquo;s meeting runs until {formatClock(MEETING.end)} in the {PLACE}. Walk in. No
				sign-up needed.
			</>
		);
	}
	if (meeting?.kind === "break") {
		return <>Weekly meetings are over for this term. The next schedule will be posted in the Discord.</>;
	}

	const skipped = timeline?.slots.filter((s) => s.kind === "skipped") ?? [];
	return (
		<>
			Every {MEETING_WEEKDAY} from <span className="whitespace-nowrap">{meetingHours()}</span> in the{" "}
			{PLACE}. Open to all students. No
			experience required.
			{skipped.map((s) => (
				<span key={s.date} className="mt-3 block text-text">
					No meeting on {formatDateKey(s.date, "monthDay")} ({s.reason}).
				</span>
			))}
		</>
	);
}

/** Hour ticks for the ruler: tall at midnight, medium every six hours, short every hour. */
const Ticks = memo(function Ticks({ days }: { days: number }) {
	const hours = days * 24;
	const tick = (h: number, y1: number) => (
		<line
			key={h}
			x1={h}
			x2={h}
			y1={y1}
			y2={48}
			stroke="currentColor"
			strokeWidth={1}
			vectorEffect="non-scaling-stroke"
			shapeRendering="crispEdges"
		/>
	);
	const hourly: number[] = [];
	const sixHour: number[] = [];
	const midnight: number[] = [];
	for (let h = 0; h < hours; h++) {
		if (h % 24 === 0) midnight.push(h);
		else if (h % 6 === 0) sixHour.push(h);
		else hourly.push(h);
	}

	return (
		<svg
			className="absolute inset-0 h-full w-full"
			viewBox={`0 0 ${hours} 48`}
			preserveAspectRatio="none"
			aria-hidden="true"
			focusable="false">
			<g className="max-sm:hidden">{hourly.map((h) => tick(h, 36))}</g>
			<g>{sixHour.map((h) => tick(h, 24))}</g>
			<g>{midnight.map((h) => tick(h, 0))}</g>
			<line
				x1={0}
				x2={hours}
				y1={48}
				y2={48}
				stroke="currentColor"
				strokeWidth={1}
				vectorEffect="non-scaling-stroke"
				shapeRendering="crispEdges"
			/>
		</svg>
	);
});

const pct = (fraction: number) => `${(fraction * 100).toFixed(3)}%`;

function Ruler({
	now,
	meeting,
	timeline,
}: {
	now: Date | null;
	meeting: MeetingState | null;
	timeline: Timeline | null;
}) {
	const days = timeline?.days ?? PLACEHOLDER_DAYS;
	const current = timeline?.slots.find((s) => s.kind === "next" || s.kind === "live");
	const scheduled = meeting && meeting.kind !== "break" ? meeting : null;

	// The bright stretch runs from now to the start of the next meeting.
	const spanFrom = timeline?.now ?? 0;
	const spanLength = current && current.kind === "next" ? current.position - spanFrom : 0;
	const spanClip = `inset(0 calc(100% - ${pct(spanFrom)} - ${pct(spanLength)} * var(--span, 1)) 0 ${pct(spanFrom)})`;

	// Labels past the middle hang left of their marker so they never run off the edge.
	const hangLeft = current ? current.position > 0.5 : false;
	const showDay = (weekday: number, i: number) =>
		days <= PLACEHOLDER_DAYS || i === 0 || weekday === MEETING.weekday;

	return (
		<div className="mt-20 lg:mt-28">
			{/* Marker labels */}
			<div className="relative h-16" style={{ fontSize: "var(--step--1)" }}>
				{current && scheduled && now && (
					<div
						data-ruler-label
						className={`absolute bottom-6 whitespace-nowrap leading-snug ${hangLeft ? "text-right" : ""}`}
						style={{
							left: pct(hangLeft ? current.position + current.width : current.position),
							transform: hangLeft ? "translateX(-100%)" : undefined,
						}}>
						{scheduled.kind === "live" ? (
							<>
								<p className="font-medium text-text">
									<span
										aria-hidden="true"
										className="mr-2 inline-block h-2 w-2 -translate-y-px rounded-full bg-live align-middle"
									/>
									Live until {formatClock(MEETING.end)}
								</p>
								<p className="tabular-nums text-text-muted">
									Ends in {formatUntil(scheduled.end.getTime() - now.getTime())}
								</p>
							</>
						) : (
							<>
								<p className="font-medium text-text">
									{scheduled.daysAway === 0 ? "Today" : formatDateKey(scheduled.date, "short")},{" "}
									{formatClock(MEETING.start)}
								</p>
								<p className="tabular-nums text-text-muted">
									in {formatUntil(scheduled.start.getTime() - now.getTime())}
								</p>
							</>
						)}
					</div>
				)}
				{timeline?.slots
					.filter((s) => s.kind === "skipped")
					.map((s) => (
						<p
							key={s.date}
							data-ruler-label
							aria-hidden="true"
							className="absolute bottom-6 -translate-x-1/2 whitespace-nowrap text-text-muted max-sm:hidden"
							style={{ left: pct(s.position + s.width / 2) }}>
							No meeting
						</p>
					))}
			</div>

			{/* The ruler */}
			<div className="relative h-12" aria-hidden="true">
				<div className="absolute inset-0 text-white/[0.14]">
					<Ticks days={days} />
				</div>
				{spanLength > 0 && (
					<div data-ruler-span className="absolute inset-0 text-white/80" style={{ clipPath: spanClip }}>
						<Ticks days={days} />
					</div>
				)}

				{timeline?.slots.map((s) => (
					<div
						key={s.date}
						data-ruler-slot={s.kind}
						className={`absolute -top-4 bottom-0 ${
							s.kind === "skipped"
								? "border border-white/25"
								: s.kind === "later"
									? "bg-accent/35"
									: "bg-accent"
						}`}
						style={{ left: pct(s.position), width: `max(8px, ${pct(s.width)})` }}
					/>
				))}

				{timeline && (
					<div className="absolute -top-4 bottom-0 w-px bg-white" style={{ left: pct(timeline.now) }}>
						<span
							className="absolute -left-1 -top-1.5 h-1.5 w-[9px] bg-white"
							style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
						/>
					</div>
				)}
			</div>

			{/* Day labels */}
			<div className="relative mt-3 h-5 text-[0.75rem] sm:text-[0.8125rem]" aria-hidden="true">
				{timeline?.dayMarks.map((d, i) =>
					showDay(d.weekday, i) ? (
						<span
							key={d.date}
							className={`absolute top-0 whitespace-nowrap pl-1.5 tabular-nums ${
								d.weekday === MEETING.weekday ? "text-text" : "text-text-muted"
							}`}
							style={{ left: pct(d.position) }}>
							{i === 0 ? (
								"Today"
							) : (
								<>
									{formatDateKey(d.date, "weekdayShort")}
									<span className="max-sm:hidden"> {d.date.slice(8).replace(/^0/, "")}</span>
								</>
							)}
						</span>
					) : null
				)}
			</div>
		</div>
	);
}

export function MeetingMoment() {
	const sectionRef = useRef<HTMLElement>(null);
	const rulerRef = useRef<HTMLDivElement>(null);
	const { now, meeting } = useClubMeeting();
	const timeline = now && meeting ? getTimeline(now, meeting) : null;
	const scheduled = meeting && meeting.kind !== "break" ? meeting : null;
	const ready = timeline !== null;

	// This section's height depends on the meeting state (headline length, the skip line,
	// whether a ruler is drawn). Re-measure scroll triggers when it changes on its own.
	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;
		let height = section.offsetHeight;
		let width = window.innerWidth;
		let frame = 0;
		const observer = new ResizeObserver(() => {
			const nextHeight = section.offsetHeight;
			const nextWidth = window.innerWidth;
			const contentOnly = nextHeight !== height && nextWidth === width;
			height = nextHeight;
			width = nextWidth;
			if (!contentOnly) return; // window resizes already refresh ScrollTrigger
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => ScrollTrigger.refresh());
		});
		observer.observe(section);
		return () => {
			observer.disconnect();
			cancelAnimationFrame(frame);
		};
	}, []);

	// One moment: the stretch until the meeting draws in, then the marker rises.
	useGSAP(
		() => {
			if (!ready || !rulerRef.current) return;
			motionMatchMedia({
				full: () => {
					const tl = gsap.timeline({
						scrollTrigger: { trigger: rulerRef.current, start: "top 85%", once: true },
					});
					if (rulerRef.current?.querySelector("[data-ruler-span]")) {
						tl.fromTo(
							"[data-ruler-span]",
							{ "--span": 0 },
							{ "--span": 1, duration: DURATION.slow, ease: EASE.inOut }
						);
					}
					tl.from(
						"[data-ruler-slot]",
						{
							scaleY: 0,
							transformOrigin: "50% 100%",
							duration: DURATION.normal,
							ease: EASE.back,
							stagger: STAGGER.fast,
						},
						"-=0.35"
					).from("[data-ruler-label]", { opacity: 0, duration: DURATION.fast, ease: "power1.out" }, "-=0.25");
				},
			});
		},
		{ scope: sectionRef, dependencies: [ready], revertOnUpdate: true }
	);

	return (
		<section
			ref={sectionRef}
			aria-labelledby="meeting-heading"
			className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-surface px-[6vw] py-28">
			<div className="mx-auto w-full max-w-7xl">
				<h2
					id="meeting-heading"
					className="max-w-[16ch] text-balance font-black leading-[0.95] tracking-tighter text-text"
					style={{ fontSize: "var(--step-7)" }}>
					<Headline meeting={meeting} />
				</h2>

				<div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
					<p
						className="max-w-[42ch] text-pretty text-text-muted lg:col-span-7"
						style={{ fontSize: "var(--step-1)" }}>
						<Body meeting={meeting} timeline={timeline} />
					</p>

					<div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-5 lg:justify-end">
						<a
							href={DISCORD}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-12 items-center rounded-full bg-white px-7 font-semibold text-black transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-surface">
							Join the Discord
						</a>
						{meeting?.kind !== "break" && (
							<a
								href={scheduled ? calendarUrl(scheduled) : undefined}
								target="_blank"
								rel="noopener noreferrer"
								aria-hidden={scheduled ? undefined : true}
								tabIndex={scheduled ? undefined : -1}
								className={`font-medium text-text underline decoration-white/30 underline-offset-[6px] transition-colors hover:decoration-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-surface ${
									scheduled ? "" : "invisible"
								}`}>
								Add to calendar
							</a>
						)}
					</div>
				</div>

				{(meeting === null || timeline !== null) && (
					<div ref={rulerRef}>
						<Ruler now={now} meeting={meeting} timeline={timeline} />
					</div>
				)}
			</div>
		</section>
	);
}
