import { ClubMeeting, CountdownConfig, MeetingStatus } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { useCountdown } from "./useCountdown";

const MEETING_CONFIG: CountdownConfig = {
	meetingDay: 4, // Thursday (0 = Sunday, 4 = Thursday)
	meetingHour: 12, // 12:50 PM = 12 in 24-hour format
	meetingMinute: 50,
	durationMinutes: 60, // Meeting lasts 1 hour (12:50 - 1:50)
	timezone: "America/Los_Angeles", // PST/PDT
};

export function useClubMeeting(): ClubMeeting {
	const [nextMeetingDate, setNextMeetingDate] = useState<Date | null>(null);
	const [status, setStatus] = useState<MeetingStatus>("upcoming");

	const timeUntilNext = useCountdown(nextMeetingDate);

	const getNextThursday = useCallback((): Date => {
		const now = new Date();

		// Create a date in PST timezone
		const pstNow = new Date(
			now.toLocaleString("en-US", { timeZone: MEETING_CONFIG.timezone })
		);

		// Get the current day (0 = Sunday, 4 = Thursday)
		const currentDay = pstNow.getDay();
		const currentHour = pstNow.getHours();
		const currentMinute = pstNow.getMinutes();

		// Calculate days until next Thursday
		let daysUntilThursday = (MEETING_CONFIG.meetingDay - currentDay + 7) % 7;

		// If it's Thursday but the meeting hasn't started yet, use today
		if (currentDay === MEETING_CONFIG.meetingDay) {
			const meetingStartTime =
				MEETING_CONFIG.meetingHour * 60 + MEETING_CONFIG.meetingMinute;
			const currentTime = currentHour * 60 + currentMinute;

			if (currentTime < meetingStartTime) {
				daysUntilThursday = 0; // Today
			} else if (
				currentTime <
				meetingStartTime + MEETING_CONFIG.durationMinutes
			) {
				// Meeting is in progress, set to next Thursday
				daysUntilThursday = 7;
			} else {
				// Meeting has ended, set to next Thursday
				daysUntilThursday = 7;
			}
		}

		// If daysUntilThursday is 0 and we're past the meeting, set to next week
		if (daysUntilThursday === 0 && currentDay === MEETING_CONFIG.meetingDay) {
			const meetingEndTime =
				MEETING_CONFIG.meetingHour * 60 +
				MEETING_CONFIG.meetingMinute +
				MEETING_CONFIG.durationMinutes;
			const currentTime = currentHour * 60 + currentMinute;

			if (currentTime >= meetingEndTime) {
				daysUntilThursday = 7;
			}
		}

		const nextThursday = new Date(pstNow);
		nextThursday.setDate(pstNow.getDate() + daysUntilThursday);
		nextThursday.setHours(
			MEETING_CONFIG.meetingHour,
			MEETING_CONFIG.meetingMinute,
			0,
			0
		);

		return nextThursday;
	}, []);

	const getMeetingStatus = useCallback((meetingDate: Date): MeetingStatus => {
		const now = new Date();
		const pstNow = new Date(
			now.toLocaleString("en-US", { timeZone: MEETING_CONFIG.timezone })
		);

		const meetingStart = new Date(meetingDate);
		const meetingEnd = new Date(meetingDate);
		meetingEnd.setMinutes(
			meetingEnd.getMinutes() + MEETING_CONFIG.durationMinutes
		);

		if (pstNow < meetingStart) {
			return "upcoming";
		} else if (pstNow >= meetingStart && pstNow < meetingEnd) {
			return "in_progress";
		} else {
			return "ended";
		}
	}, []);

	useEffect(() => {
		const updateMeetingInfo = () => {
			const nextMeeting = getNextThursday();
			setNextMeetingDate(nextMeeting);
			setStatus(getMeetingStatus(nextMeeting));
		};

		// Update immediately
		updateMeetingInfo();

		// Update every minute to check status changes
		const interval = setInterval(updateMeetingInfo, 60000);

		return () => clearInterval(interval);
	}, [getNextThursday, getMeetingStatus]);

	return {
		nextMeetingDate: nextMeetingDate || new Date(),
		isActive: status === "in_progress",
		timeUntilNext,
		status,
	};
}
