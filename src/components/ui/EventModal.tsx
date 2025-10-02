"use client";

import { useClubMeeting } from "@/hooks/useClubMeeting";
import { MeetingStatus } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
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
	const { timeUntilNext: timeLeft, status, nextMeetingDate } = useClubMeeting();
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

	const formatMeetingDate = (date: Date) => {
		return date.toLocaleDateString("en-US", {
			weekday: "long",
			month: "long",
			day: "numeric",
			year: "numeric",
			timeZone: "America/Los_Angeles",
		});
	};

	const getStatusInfo = (status: MeetingStatus) => {
		switch (status) {
			case "upcoming":
				return {
					title: "Upcoming Meeting",
					description: "Get ready to join us for an exciting session!",
					color: "text-blue-400",
					bgColor: "bg-blue-500/10",
					borderColor: "border-blue-500/20",
				};
			case "in_progress":
				return {
					title: "Meeting Live Now!",
					description: "Join us right now in the simulation lab!",
					color: "text-green-400",
					bgColor: "bg-green-500/10",
					borderColor: "border-green-500/20",
				};
			case "ended":
				return {
					title: "Meeting Ended",
					description: "Thanks for joining us! See you next week.",
					color: "text-neutral-400",
					bgColor: "bg-neutral-500/10",
					borderColor: "border-neutral-500/20",
				};
		}
	};

	const statusInfo = getStatusInfo(status);

	// Don't render on server or if not mounted
	if (!mounted) return null;

	const modalVariants = {
		hidden: { opacity: 0, scale: 0.8, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 30,
			},
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			y: 20,
			transition: {
				duration: 0.2,
			},
		},
	};

	const overlayVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	};

	const modalContent = (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						className="fixed inset-0 bg-black/60 backdrop-blur-sm"
						style={{ zIndex: 9999 }}
						variants={overlayVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						onClick={onClose}
					/>

					{/* Modal Container */}
					<div
						className="fixed inset-0 overflow-y-auto"
						style={{ zIndex: 9999 }}>
						<div className="flex min-h-full items-center justify-center p-4">
							<motion.div
								className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col"
								variants={modalVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								onClick={(e) => e.stopPropagation()}>
								{/* Header */}
								<div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
									<h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
										RCC ACM Meeting
									</h2>
									<button
										onClick={onClose}
										className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
										<X className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
									</button>
								</div>

								{/* Content - Scrollable */}
								<div className="flex-1 overflow-y-auto p-6 space-y-6">
									{/* Status Badge */}
									<div
										className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${statusInfo.bgColor} ${statusInfo.borderColor} border`}>
										<div
											className={`w-2 h-2 rounded-full ${
												status === "in_progress"
													? "bg-green-500 animate-pulse"
													: "bg-current"
											}`}
										/>
										<span className={`font-semibold ${statusInfo.color}`}>
											{statusInfo.title}
										</span>
									</div>

									{/* Event Description */}
									<div>
										<h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
											Weekly ACM Meeting
										</h3>
										<p className="text-neutral-600 dark:text-neutral-300">
											Join us for coding challenges, tech talks, networking, and
											community building. Whether you're a beginner or
											experienced programmer, everyone is welcome!
										</p>
									</div>

									{/* Countdown Timer */}
									{status !== "ended" && (
										<div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4">
											<h4 className="font-semibold text-neutral-900 dark:text-white mb-3">
												{status === "in_progress"
													? "Meeting in Progress"
													: "Time Until Meeting"}
											</h4>
											{status === "in_progress" ? (
												<div className="text-center py-4">
													<div className="text-4xl mb-2">🎉</div>
													<p className="text-green-600 dark:text-green-400 font-semibold">
														Meeting is Live!
													</p>
												</div>
											) : (
												<div className="grid grid-cols-4 gap-3">
													{[
														{ label: "Days", value: timeLeft.days },
														{ label: "Hours", value: timeLeft.hours },
														{ label: "Minutes", value: timeLeft.minutes },
														{ label: "Seconds", value: timeLeft.seconds },
													].map((unit) => (
														<div key={unit.label} className="text-center">
															<div className="bg-white dark:bg-neutral-700 rounded-lg p-3 mb-1">
																<span className="text-2xl font-bold text-neutral-900 dark:text-white">
																	{unit.value.toString().padStart(2, "0")}
																</span>
															</div>
															<span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
																{unit.label}
															</span>
														</div>
													))}
												</div>
											)}
										</div>
									)}

									{/* Meeting Details */}
									<div className="space-y-4">
										<h4 className="font-semibold text-neutral-900 dark:text-white">
											Meeting Details
										</h4>

										<div className="space-y-3">
											<div className="flex items-center gap-3">
												<Calendar className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
												<div>
													<p className="font-medium text-neutral-900 dark:text-white">
														{formatMeetingDate(nextMeetingDate)}
													</p>
													<p className="text-sm text-neutral-500 dark:text-neutral-400">
														Every Thursday
													</p>
												</div>
											</div>

											<div className="flex items-center gap-3">
												<Clock className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
												<div>
													<p className="font-medium text-neutral-900 dark:text-white">
														12:50 - 1:50 PM PST
													</p>
													<p className="text-sm text-neutral-500 dark:text-neutral-400">
														1 hour duration
													</p>
												</div>
											</div>

											<div className="flex items-center gap-3">
												<MapPin className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
												<div>
													<p className="font-medium text-neutral-900 dark:text-white">
														A-210 Simulation Lab
													</p>
													<p className="text-sm text-neutral-500 dark:text-neutral-400">
														Riverside City College
													</p>
												</div>
											</div>

											<div className="flex items-center gap-3">
												<Users className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
												<div>
													<p className="font-medium text-neutral-900 dark:text-white">
														Open to All Students
													</p>
													<p className="text-sm text-neutral-500 dark:text-neutral-400">
														No experience required
													</p>
												</div>
											</div>
										</div>
									</div>

									{/* What to Expect */}
									<div className="space-y-4">
										<h4 className="font-semibold text-neutral-900 dark:text-white">
											What to Expect
										</h4>
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
												<div
													key={item.title}
													className="flex items-start gap-3">
													<div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
														<item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
													</div>
													<div>
														<p className="font-medium text-neutral-900 dark:text-white">
															{item.title}
														</p>
														<p className="text-sm text-neutral-500 dark:text-neutral-400">
															{item.desc}
														</p>
													</div>
												</div>
											))}
										</div>
									</div>

									{/* Action Buttons */}
									<div className="flex flex-col gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
										<a
											href="https://discord.gg/fM2HbsJyBG"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
											<MessageCircle className="w-5 h-5" />
											Join Discord Community
											<ExternalLink className="w-4 h-4" />
										</a>

										<a
											href="https://www.instagram.com/rcc.acm/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all">
											<Instagram className="w-5 h-5" />
											Follow on Instagram
											<ExternalLink className="w-4 h-4" />
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

	// Render modal at the root level using portal
	return createPortal(modalContent, document.body);
}
