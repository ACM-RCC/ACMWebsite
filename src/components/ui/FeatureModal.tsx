"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface FeatureModalProps {
	isOpen: boolean;
	onClose: () => void;
	feature: {
		icon: React.ComponentType<{ className?: string }>;
		title: string;
		description: string;
		detailedDescription: string;
		benefits: string[];
		activities: string[];
	};
}

export function FeatureModal({ isOpen, onClose, feature }: FeatureModalProps) {
	const { icon: Icon } = feature;

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

	// Handle escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [isOpen, onClose]);

	const modalVariants = {
		hidden: {
			opacity: 0,
			scale: 0.8,
			y: 50,
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 300,
			},
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			y: 50,
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

	if (!isOpen) return null;

	return (
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
				variants={overlayVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				onClick={onClose}>
				{/* Backdrop */}
				<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

				{/* Modal Content */}
				<motion.div
					className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-black/20"
					variants={modalVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					onClick={(e) => e.stopPropagation()}>
					{/* Close Button */}
					<button
						onClick={onClose}
						className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
						<X className="w-5 h-5 text-white" />
					</button>

					{/* Modal Header */}
					<div className="p-8 pb-6">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-16 h-16 rounded-2xl bg-white/12 backdrop-blur-sm flex items-center justify-center border border-white/25 shadow-sm">
								<Icon className="w-8 h-8 text-white drop-shadow-md" />
							</div>
							<div>
								<h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
									{feature.title}
								</h2>
								<p className="text-neutral-300 text-sm md:text-base drop-shadow-sm">
									{feature.description}
								</p>
							</div>
						</div>
					</div>

					{/* Modal Body */}
					<div className="px-8 pb-8">
						{/* Detailed Description */}
						<div className="mb-8">
							<h3 className="text-lg font-semibold text-white mb-4 drop-shadow-md">
								About This Feature
							</h3>
							<p className="text-neutral-200 leading-relaxed drop-shadow-sm">
								{feature.detailedDescription}
							</p>
						</div>

						{/* Benefits */}
						<div className="mb-8">
							<h3 className="text-lg font-semibold text-white mb-4 drop-shadow-md">
								Key Benefits
							</h3>
							<ul className="space-y-3">
								{feature.benefits.map((benefit, index) => (
									<li
										key={index}
										className="flex items-start gap-3 text-neutral-200 drop-shadow-sm">
										<div className="w-2 h-2 rounded-full bg-racing-orange mt-2 flex-shrink-0" />
										<span>{benefit}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Activities */}
						<div>
							<h3 className="text-lg font-semibold text-white mb-4 drop-shadow-md">
								What You'll Experience
							</h3>
							<ul className="space-y-3">
								{feature.activities.map((activity, index) => (
									<li
										key={index}
										className="flex items-start gap-3 text-neutral-200 drop-shadow-sm">
										<div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
										<span>{activity}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
