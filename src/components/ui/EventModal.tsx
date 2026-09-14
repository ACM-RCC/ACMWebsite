"use client";

import { useClubMeeting } from "@/hooks/useClubMeeting";
import { MEETING, MEETING_WEEKDAY, formatDateKey, meetingHours, meetingLength } from "@/lib/meeting";
import { MeetingStatus } from "@/types";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
	Calendar,
	Clock,
	Code,
	ExternalLink,
	Instagram,
	MapPin,
	MessageCircle,
	Users,
	X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface EventModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function EventModal({ isOpen, onClose }: EventModalProps) {
	const { timeUntilNext: timeLeft, status, meeting } = useClubMeeting();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	// Prevent body scroll when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const nextDate =
		meeting && meeting.kind !== "break" ? formatDateKey(meeting.date, "long") : "No meetings until next term";

	const getStatusInfo = (status: MeetingStatus) => {
		switch (status) {
			case "upcoming":
				return {
					title: "Upcoming Meeting",
					color: "text-accent",
					bgColor: "bg-accent/10",
					borderColor: "border-accent/25",
				};
			case "in_progress":
				return {
					title: "Live Now",
					color: "text-live",
					bgColor: "bg-live/10",
					borderColor: "border-live/25",
				};
			case "break":
				return {
					title: "On Break",
					color: "text-text-muted",
					bgColor: "bg-white/5",
					borderColor: "border-border",
				};
		}
	};

	const statusInfo = getStatusInfo(status);

	if (!mounted) return null;

	const modalVariants: Variants = {
		hidden: { opacity: 0, scale: 0.92, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: { type: "spring", stiffness: 300, damping: 30 },
		},
		exit: { opacity: 0, scale: 0.92, y: 20, transition: { duration: 0.2 } },
	};

	const overlayVariants: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	};

	const modalContent = (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						className="fixed inset-0 bg-black/70 backdrop-blur-sm"
						style={{ zIndex: 9999 }}
						variants={overlayVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						onClick={onClose}
					/>

					<div className="fixed inset-0 overflow-y-auto" style={{ zIndex: 9999 }}>
						<div className="flex min-h-full items-center justify-center p-4">
							<motion.div
								className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-border bg-surface-raised text-text shadow-2xl"
								variants={modalVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								onClick={(e) => e.stopPropagation()}>
								{/* Header */}
								<div className="flex items-center justify-between border-b border-border p-6">
									<h2 className="text-2xl font-bold text-text">RCC ACM Meeting</h2>
									<button
										onClick={onClose}
										aria-label="Close"
										className="rounded-lg p-2 text-text-muted transition-colors hover:bg-white/5 hover:text-text">
										<X className="h-5 w-5" />
									</button>
								</div>

								{/* Content */}
								<div className="flex-1 space-y-6 overflow-y-auto p-6">
									{/* Status badge */}
									<div
										className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 ${statusInfo.bgColor} ${statusInfo.borderColor}`}>
										<span
											className={`h-2 w-2 rounded-full ${
												status === "in_progress"
													? "animate-pulse bg-live"
													: "bg-current"
											}`}
										/>
										<span className={`text-sm font-semibold ${statusInfo.color}`}>
											{statusInfo.title}
										</span>
									</div>

									{/* Description */}
									<div>
										<h3 className="mb-2 text-lg font-semibold text-text">
											Weekly ACM Meeting
										</h3>
										<p className="text-text-muted">
											Coding challenges, tech talks, networking, and community.
											Whether you&apos;re a beginner or experienced programmer,
											everyone is welcome.
										</p>
									</div>

									{/* Countdown */}
									{status !== "break" && (
										<div className="rounded-2xl border border-border bg-white/5 p-4">
											<h4 className="mb-3 font-semibold text-text">
												{status === "in_progress"
													? "In progress"
													: "Time until meeting"}
											</h4>
											{status === "in_progress" ? (
												<div className="flex flex-col items-center gap-2 py-3 text-center">
													<span className="inline-flex items-center gap-2">
														<span className="h-2.5 w-2.5 animate-pulse rounded-full bg-live" />
														<span className="font-semibold text-live">
															We&apos;re meeting right now
														</span>
													</span>
													<p className="text-sm text-text-muted">
														Come find us in {MEETING.room}.
													</p>
												</div>
											) : (
												<div className="grid grid-cols-4 gap-3 font-mono">
													{[
														{ label: "Days", value: timeLeft.days },
														{ label: "Hours", value: timeLeft.hours },
														{ label: "Minutes", value: timeLeft.minutes },
														{ label: "Seconds", value: timeLeft.seconds },
													].map((unit) => (
														<div key={unit.label} className="text-center">
															<div className="mb-1 rounded-lg bg-black/30 p-3">
																<span className="text-2xl font-bold tabular-nums text-text">
																	{unit.value.toString().padStart(2, "0")}
																</span>
															</div>
															<span className="text-xs font-medium uppercase tracking-wide text-text-muted">
																{unit.label}
															</span>
														</div>
													))}
												</div>
											)}
										</div>
									)}

									{/* Details */}
									<div className="space-y-4">
										<h4 className="font-semibold text-text">Meeting Details</h4>
										<div className="space-y-3">
											{[
												{
													icon: Calendar,
													title: nextDate,
													desc: `Every ${MEETING_WEEKDAY}`,
												},
												{
													icon: Clock,
													title: `${meetingHours()} PT`,
													desc: meetingLength(),
												},
												{
													icon: MapPin,
													title: `${MEETING.room} ${MEETING.roomName}`,
													desc: `${MEETING.building}, ${MEETING.campus}`,
												},
												{
													icon: Users,
													title: "Open to all students",
													desc: "No experience required",
												},
											].map((item) => (
												<div key={item.title} className="flex items-center gap-3">
													<item.icon className="h-5 w-5 shrink-0 text-text-muted" />
													<div>
														<p className="font-medium text-text">{item.title}</p>
														<p className="text-sm text-text-muted">{item.desc}</p>
													</div>
												</div>
											))}
										</div>
									</div>

									{/* What to expect */}
									<div className="space-y-4">
										<h4 className="font-semibold text-text">What to Expect</h4>
										<div className="grid gap-3">
											{[
												{
													icon: Code,
													title: "Coding Challenges",
													desc: "Practice problems and competitions",
												},
												{
													icon: Users,
													title: "Networking",
													desc: "Connect with fellow students",
												},
												{
													icon: MessageCircle,
													title: "Tech Talks",
													desc: "Learn about new technologies",
												},
											].map((item) => (
												<div key={item.title} className="flex items-start gap-3">
													<div className="rounded-lg bg-white/5 p-2 text-accent">
														<item.icon className="h-4 w-4" />
													</div>
													<div>
														<p className="font-medium text-text">{item.title}</p>
														<p className="text-sm text-text-muted">{item.desc}</p>
													</div>
												</div>
											))}
										</div>
									</div>

									{/* Actions */}
									<div className="flex flex-col gap-3 border-t border-border pt-4">
										<a
											href="https://discord.gg/fM2HbsJyBG"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 font-bold text-black transition-transform hover:scale-[1.02]">
											<MessageCircle className="h-5 w-5" />
											Join the Discord
											<ExternalLink className="h-4 w-4" />
										</a>
										<a
											href="https://www.instagram.com/rcc.acm/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 font-medium text-text transition-colors hover:bg-white/5">
											<Instagram className="h-5 w-5" />
											Follow on Instagram
											<ExternalLink className="h-4 w-4" />
										</a>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</>
			)}
		</AnimatePresence>
	);

	return createPortal(modalContent, document.body);
}
