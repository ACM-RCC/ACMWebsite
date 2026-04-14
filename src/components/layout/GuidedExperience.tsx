"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface GuidedExperienceProps {
	children: React.ReactNode;
}

export function GuidedExperience({ children }: GuidedExperienceProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			// Create a master timeline attached to scroll
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "bottom bottom",
					scrub: 1,
				},
			});

			timelineRef.current = tl;

			// Select the video background
			const videoBg = document.getElementById("video-background");

			if (videoBg) {
				// Animation Sequence
				
				// 1. Hero to Features: Scale down video and blur slightly
				tl.to(videoBg, {
					scale: 0.9,
					filter: "blur(4px) brightness(0.6)",
					ease: "power1.inOut",
					duration: 1, // Relative duration
				});

				// 2. Features to Community: Further blur and darken
				tl.to(videoBg, {
					scale: 0.85,
					filter: "blur(8px) brightness(0.4)",
					ease: "power1.inOut",
					duration: 1,
				});

				// 3. Community to Contact: Fade out almost completely
				tl.to(videoBg, {
					opacity: 0.2,
					scale: 0.8,
					filter: "blur(12px) brightness(0.2)",
					ease: "power1.inOut",
					duration: 1,
				});
			}
		},
		{ scope: containerRef }
	);


	return (
		<div ref={containerRef} className="relative min-h-[400vh] bg-neutral-950">
			{/* Video Stashed for Text Focus */}
			{/* <VideoBackground /> */}
			<div className="relative z-10">{children}</div>
		</div>
	);
}
