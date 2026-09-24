import { getMeetingState } from "@/lib/meeting";
import { ClubMeeting, CountdownTime, MeetingStatus } from "@/types";
import { useEffect, useState } from "react";

/** The current time, ticking. Null on the server and the first client render. */
function useNow(intervalMs: number): Date | null {
	const [now, setNow] = useState<Date | null>(null);

	useEffect(() => {
		const tick = () => setNow(new Date());
		tick();
		const interval = setInterval(tick, intervalMs);
		// Background tabs throttle timers; catch up as soon as the tab is visible again.
		const onVisible = () => {
			if (document.visibilityState === "visible") tick();
		};
		document.addEventListener("visibilitychange", onVisible);
		return () => {
			clearInterval(interval);
			document.removeEventListener("visibilitychange", onVisible);
		};
	}, [intervalMs]);

	return now;
}

function toCountdown(ms: number): CountdownTime {
	const total = Math.max(0, Math.floor(ms / 1000));
	return {
		days: Math.floor(total / 86400),
		hours: Math.floor((total % 86400) / 3600),
		minutes: Math.floor((total % 3600) / 60),
		seconds: total % 60,
	};
}

export function useClubMeeting(intervalMs = 1000): ClubMeeting {
	const now = useNow(intervalMs);
	const meeting = now ? getMeetingState(now) : null;
	const scheduled = meeting && meeting.kind !== "break" ? meeting : null;

	const status: MeetingStatus =
		meeting?.kind === "live" ? "in_progress" : meeting?.kind === "break" ? "break" : "upcoming";

	return {
		now,
		meeting,
		nextMeetingDate: scheduled?.start ?? null,
		isActive: status === "in_progress",
		timeUntilNext: toCountdown(scheduled && now ? scheduled.start.getTime() - now.getTime() : 0),
		status,
	};
}
