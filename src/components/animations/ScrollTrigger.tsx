"use client";

import {
	ANIMATION_CONFIG,
	SCROLL_TRIGGER_DEFAULTS,
} from "@/lib/animations/gsap-config";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";

interface ScrollTriggerProps {
	children: ReactNode;
	animation?: "fadeIn" | "slideUp" | "slideLeft" | "scale" | "custom";
	trigger?: string;
	start?: string;
	end?: string;
	scrub?: boolean | number;
	pin?: boolean;
	customAnimation?: (element: HTMLElement) => gsap.core.Timeline;
	className?: string;
	delay?: number;
}

export function ScrollTriggerComponent({
	children,
	animation = "fadeIn",
	trigger,
	start = SCROLL_TRIGGER_DEFAULTS.start,
	end = SCROLL_TRIGGER_DEFAULTS.end,
	scrub = false,
	pin = false,
	customAnimation,
	className = "",
	delay = 0,
}: ScrollTriggerProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = containerRef.current;
		if (!element) return;

		let tl: gsap.core.Timeline;

		// Define animation based on type
		if (customAnimation) {
			tl = customAnimation(element);
		} else {
			tl = gsap.timeline({ delay });

			switch (animation) {
				case "fadeIn":
					tl.from(element, {
						opacity: 0,
						duration: ANIMATION_CONFIG.duration.normal,
						ease: ANIMATION_CONFIG.easing.power,
					});
					break;

				case "slideUp":
					tl.from(element, {
						y: 100,
						opacity: 0,
						duration: ANIMATION_CONFIG.duration.normal,
						ease: ANIMATION_CONFIG.easing.power,
					});
					break;

				case "slideLeft":
					tl.from(element, {
						x: 100,
						opacity: 0,
						duration: ANIMATION_CONFIG.duration.normal,
						ease: ANIMATION_CONFIG.easing.power,
					});
					break;

				case "scale":
					tl.from(element, {
						scale: 0.8,
						opacity: 0,
						duration: ANIMATION_CONFIG.duration.normal,
						ease: ANIMATION_CONFIG.easing.back,
					});
					break;
			}
		}

		// Create ScrollTrigger
		const scrollTriggerInstance = ScrollTrigger.create({
			trigger: trigger || element,
			start,
			end,
			animation: tl,
			scrub,
			pin,
			toggleActions: "play none none reverse",
		});

		return () => {
			scrollTriggerInstance.kill();
			tl.kill();
		};
	}, [animation, trigger, start, end, scrub, pin, customAnimation, delay]);

	return (
		<div
			ref={containerRef}
			className={`relative ${className}`}
			style={{ zIndex: 50 }}>
			{children}
		</div>
	);
}
