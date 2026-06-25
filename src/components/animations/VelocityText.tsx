"use client";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/animations/gsap";
import { motionMatchMedia } from "@/lib/animations/match-media";
import { useRef } from "react";

interface VelocityTextProps {
	baseVelocity?: number;
	children: string;
}

/**
 * Scrolling marquee band. Under reduced motion it renders as a static band (the
 * row simply sits still). When motion is allowed it drifts on the shared
 * gsap.ticker, flips direction with scroll direction, and pauses off-screen.
 */
export function VelocityText({
	children,
	baseVelocity = 0.5,
}: VelocityTextProps) {
	const textRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			motionMatchMedia({
				full: () => {
					const text = textRef.current;
					const container = containerRef.current;
					if (!text || !container) return;

					let xPercent = 0;
					let direction = -1;
					let visible = true;

					const tick = () => {
						if (!visible) return;
						if (xPercent <= -100) xPercent = 0;
						if (xPercent > 0) xPercent = -100;
						gsap.set(text, { xPercent });
						xPercent += 0.05 * direction * baseVelocity;
					};
					gsap.ticker.add(tick);

					const st = ScrollTrigger.create({
						trigger: document.documentElement,
						start: 0,
						end: () => window.innerHeight,
						onUpdate: (self) => {
							direction = self.direction === 1 ? -1 : 1;
						},
					});

					const io = new IntersectionObserver(
						(entries) => {
							visible = !!entries[0]?.isIntersecting;
						},
						{ threshold: 0 }
					);
					io.observe(container);

					return () => {
						gsap.ticker.remove(tick);
						st.kill();
						io.disconnect();
					};
				},
			});
		},
		{ scope: containerRef }
	);

	return (
		<div
			ref={containerRef}
			className="flex overflow-hidden whitespace-nowrap bg-accent py-12 text-black">
			<div
				ref={textRef}
				className="flex gap-8 text-8xl font-black uppercase md:text-9xl">
				{Array.from({ length: 8 }).map((_, i) => (
					<span key={i}>{children}</span>
				))}
			</div>
		</div>
	);
}
