"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface VelocityTextProps {
	baseVelocity?: number;
	children: string;
}

export function VelocityText({
	children,
	baseVelocity = 0.5,
}: VelocityTextProps) {
	const textRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!textRef.current) return;

			// Clone text for seamless loop
			// We need enough copies to cover the screen width + buffer
			// For simplicity in this demo, we'll just duplicate it a few times
			// Ideally, we'd measure and duplicate dynamically.

			let xPercent = 0;
			let direction = -1;

			const animate = () => {
				if (xPercent <= -100) {
					xPercent = 0;
				}
				if (xPercent > 0) {
					xPercent = -100;
				}

				gsap.set(textRef.current, { xPercent: xPercent });
				requestAnimationFrame(animate);
				xPercent += 0.05 * direction * baseVelocity; // Constant movement
			};

			// GSAP ScrollTrigger to influence velocity/direction
			ScrollTrigger.create({
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,
				onUpdate: (self) => {
					// Change direction based on scroll direction
					direction = self.direction === 1 ? -1 : 1;
					// Could also boost velocity based on self.getVelocity()
				},
			});

			// Start the loop
			requestAnimationFrame(animate);
		},
		{ scope: containerRef }
	);

	return (
		<div
			ref={containerRef}
			className="overflow-hidden whitespace-nowrap flex py-12 bg-racing-orange text-black">
			<div ref={textRef} className="flex gap-8 text-8xl md:text-9xl font-black uppercase">
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
			</div>
		</div>
	);
}
