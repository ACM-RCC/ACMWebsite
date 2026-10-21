"use client";

import { VelocityText } from "@/components/animations/VelocityText";
import { GuidedExperience } from "@/components/layout/GuidedExperience";
import { Header } from "@/components/layout/header";
import { CurtainFooter } from "@/components/sections/CurtainFooter";
import { HorizontalFeatures } from "@/components/sections/HorizontalFeatures";
import { ParallaxCommunity } from "@/components/sections/ParallaxCommunity";
import { PinZoomText } from "@/components/sections/PinZoomText";
import { ScrubbableHero } from "@/components/sections/ScrubbableHero";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import {
    destroySmoothScroll,
    initSmoothScroll,
} from "@/lib/animations/smooth-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Initialize smooth scroll for luxury feel
		initSmoothScroll();
		return () => {
			destroySmoothScroll();
		};
	}, []);

	useGSAP(
		() => {
			// Scroll-Driven Background Color Transitions
			const sections = [
				{ id: "hero", color: "#0a0a0a" }, // Neutral-950
				{ id: "velocity", color: "#ff4d00" }, // Racing Orange
				{ id: "pinzoom", color: "#ffffff" }, // White for contrast
				{ id: "features", color: "#0a0a0a" },
				{ id: "community", color: "#171717" }, // Neutral-900
				{ id: "contact", color: "#ff4d00" },
			];

			sections.forEach((section) => {
				ScrollTrigger.create({
					trigger: `[data-section="${section.id}"]`,
					start: "top 50%",
					end: "bottom 50%",
					onEnter: () =>
						gsap.to(containerRef.current, {
							backgroundColor: section.color,
							duration: 0.5,
						}),
					onEnterBack: () =>
						gsap.to(containerRef.current, {
							backgroundColor: section.color,
							duration: 0.5,
						}),
				});
			});
		},
		{ scope: containerRef }
	);

	return (
		<div
			ref={containerRef}
			className="min-h-screen bg-neutral-950 relative text-white transition-colors duration-500">
			<MagneticCursor />
			<Header />

			<GuidedExperience>
				{/* Section 1: Scrubbable Hero */}
				<div className="relative z-10" data-section="hero">
					<ScrubbableHero />
				</div>

				{/* Section 2: Velocity Text Transition */}
				<div data-section="velocity">
					<VelocityText baseVelocity={0.5}>
						Innovate • Create • Collaborate •
					</VelocityText>
				</div>

				{/* Section 2.5: Pin & Zoom Text */}
				<div data-section="pinzoom">
					<PinZoomText />
				</div>

				{/* Section 3: Horizontal Scroll Features */}
				<div data-section="features">
					<HorizontalFeatures />
				</div>

				{/* Section 4: Parallax Community */}
				<div data-section="community">
					<ParallaxCommunity />
				</div>

				{/* Section 5: Curtain Footer */}
				<div className="relative z-20 rounded-b-[3rem] shadow-2xl mb-[80vh]" data-section="contact">
					{/* This div acts as the "curtain" that pulls up to reveal the footer */}
					<div className="h-20" />
				</div>
				<CurtainFooter />
			</GuidedExperience>
		</div>
	);
}
