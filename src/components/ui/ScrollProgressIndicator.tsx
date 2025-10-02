"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgressIndicator() {
	const { progress, isScrolling } = useScrollProgress();

	return (
		<>
			{/* Minimalistic Left Side Progress Bar */}
			<div
				className="fixed left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-neutral-200/10 backdrop-blur-sm rounded-full"
				style={{
					zIndex: 100,
					opacity: isScrolling ? 1 : 0.6,
					transition: "none",
				}}>
				<div
					className="w-full bg-gradient-to-b from-racing-orange to-orange-400 rounded-full"
					style={{
						height: `${progress * 100}%`,
						transform: "translateY(0)",
						transformOrigin: "top",
						transition: "none",
					}}
				/>
			</div>

			{/* Minimalistic Circular Progress Indicator */}
			<div
				className="fixed bottom-6 right-6"
				style={{
					zIndex: 100,
					opacity: isScrolling ? 1 : 0.7,
					transform: isScrolling ? "scale(1.05)" : "scale(1)",
					transition: "none",
				}}>
				<div className="relative w-12 h-12">
					{/* Background Circle */}
					<svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
						<circle
							cx="24"
							cy="24"
							r="20"
							fill="none"
							stroke="rgba(255, 255, 255, 0.08)"
							strokeWidth="2"
						/>
						{/* Progress Circle */}
						<circle
							cx="24"
							cy="24"
							r="20"
							fill="none"
							stroke="url(#minimalGradient)"
							strokeWidth="2"
							strokeLinecap="round"
							strokeDasharray={`${2 * Math.PI * 20}`}
							strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress)}`}
							style={{
								transition: "none",
							}}
						/>
						<defs>
							<linearGradient
								id="minimalGradient"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="100%">
								<stop offset="0%" stopColor="#ff6b35" />
								<stop offset="100%" stopColor="#ff8c42" />
							</linearGradient>
						</defs>
					</svg>

					{/* Progress Percentage - Only show when scrolling */}
					{isScrolling && (
						<div className="absolute inset-0 flex items-center justify-center">
							<span className="text-[10px] font-medium text-white/90">
								{Math.round(progress * 100)}
							</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
