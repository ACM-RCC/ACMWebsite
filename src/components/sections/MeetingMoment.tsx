"use client";

import { useEventModal } from "@/components/ui/EventModalProvider";
import { useClubMeeting } from "@/hooks/useClubMeeting";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { motionMatchMedia } from "@/lib/animations/match-media";
import { DURATION, EASE, STAGGER } from "@/lib/animations/motion";
import { ArrowRight, CalendarPlus, MapPin } from "lucide-react";
import { useRef } from "react";

const KICKER = "// next meeting";

const pad = (n: number) => n.toString().padStart(2, "0");

/** Google Calendar "add event" link for the recurring Thursday meeting. */
function calendarUrl(date: Date) {
	const fmt = (d: Date) =>
		`${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(
			d.getHours()
		)}${pad(d.getMinutes())}00`;
	const end = new Date(date.getTime() + 60 * 60 * 1000);
	const params = new URLSearchParams({
		action: "TEMPLATE",
		text: "RCC ACM Meeting",
		dates: `${fmt(date)}/${fmt(end)}`,
		ctz: "America/Los_Angeles",
		location: "A-210 Simulation Lab, Riverside City College",
		details: "Weekly ACM meeting. Coding, talks, and community. All students welcome.",
		recur: "RRULE:FREQ=WEEKLY;BYDAY=TH",
	});
	return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function MeetingMoment() {
	const sectionRef = useRef<HTMLElement>(null);
	const { openModal } = useEventModal();
	const { timeUntilNext, status, nextMeetingDate } = useClubMeeting();

	useGSAP(
		() => {
			motionMatchMedia({
				full: () => {
					gsap.from("[data-reveal]", {
						y: 40,
						opacity: 0,
						duration: DURATION.normal,
						ease: EASE.premium,
						stagger: STAGGER.normal,
						scrollTrigger: {
							trigger: sectionRef.current,
							start: "top 65%",
							toggleActions: "play none none reverse",
						},
					});
				},
				reduced: () => {
					gsap.set("[data-reveal]", { opacity: 1, y: 0 });
				},
			});
		},
		{ scope: sectionRef }
	);

	const isLive = status === "in_progress";
	const units = [
		{ label: "Days", value: timeUntilNext.days },
		{ label: "Hours", value: timeUntilNext.hours },
		{ label: "Minutes", value: timeUntilNext.minutes },
		{ label: "Seconds", value: timeUntilNext.seconds },
	];

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-surface px-6 py-24">
			<span
				data-reveal
				className="mb-6 font-mono uppercase tracking-[0.3em] text-accent"
				style={{ fontSize: "var(--step--1)" }}>
				{KICKER}
			</span>

			{isLive ? (
				<div data-reveal className="flex flex-col items-center text-center">
					<div className="mb-6 inline-flex items-center gap-3 rounded-full border border-live/30 bg-live/10 px-5 py-2">
						<span className="h-2.5 w-2.5 animate-pulse rounded-full bg-live" />
						<span
							className="font-mono uppercase tracking-widest text-live"
							style={{ fontSize: "var(--step--1)" }}>
							Live now
						</span>
					</div>
					<h2
						className="font-black uppercase leading-[0.95] tracking-tighter text-text"
						style={{ fontSize: "var(--step-6)" }}>
						We&apos;re meeting
						<br />
						<span className="text-accent">right now</span>
					</h2>
				</div>
			) : (
				<>
					<h2
						data-reveal
						className="mb-10 text-center font-black uppercase leading-[0.95] tracking-tighter text-text"
						style={{ fontSize: "var(--step-5)" }}>
						Next meeting in
					</h2>
					<div
						data-reveal
						className="flex items-start gap-3 font-mono md:gap-7">
						{units.map((u, i) => (
							<div key={u.label} className="flex items-start gap-3 md:gap-7">
								<div className="flex flex-col items-center">
									<span
										className="font-black leading-none tabular-nums text-text"
										style={{ fontSize: "var(--step-7)" }}>
										{pad(u.value)}
									</span>
									<span
										className="mt-3 uppercase tracking-[0.2em] text-text-muted"
										style={{ fontSize: "var(--step--1)" }}>
										{u.label}
									</span>
								</div>
								{i < units.length - 1 && (
									<span
										className="font-black leading-none text-text-muted/30"
										style={{ fontSize: "var(--step-6)" }}>
										:
									</span>
								)}
							</div>
						))}
					</div>
				</>
			)}

			{/* Meeting details */}
			<div
				data-reveal
				className="mt-12 flex flex-col items-center gap-2 text-center"
				style={{ fontSize: "var(--step-0)" }}>
				<p className="font-semibold text-text">Thursdays · 12:50 – 1:50 PM PT</p>
				<p className="inline-flex items-center gap-2 text-text-muted">
					<MapPin className="h-4 w-4" /> A-210 Simulation Lab, RCC
				</p>
			</div>

			{/* Actions */}
			<div
				data-reveal
				className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
				<a
					href="https://discord.gg/fM2HbsJyBG"
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-black transition-transform hover:scale-105">
					{isLive ? "Join the meeting" : "Join on Discord"}
					<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</a>
				{nextMeetingDate && (
					<a
						href={calendarUrl(nextMeetingDate)}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-medium text-text transition-colors hover:bg-white/5">
						<CalendarPlus className="h-4 w-4" /> Add to calendar
					</a>
				)}
				<button
					onClick={openModal}
					className="text-text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
					style={{ fontSize: "var(--step--1)" }}>
					Full details
				</button>
			</div>
		</section>
	);
}
