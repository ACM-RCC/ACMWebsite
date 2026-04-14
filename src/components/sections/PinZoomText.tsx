"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function PinZoomText() {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current || !textRef.current) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "+=100%", // Pin for screen height
					scrub: 1,
					pin: true,
				},
			});

			tl.fromTo(
				textRef.current,
				{
					filter: "blur(20px)",
					scale: 0.8,
					opacity: 0,
					y: 50,
				},
				{
					filter: "blur(0px)",
					scale: 1,
					opacity: 1,
					y: 0,
					ease: "power2.out",
				}
			);
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			className="h-screen flex items-center justify-center overflow-hidden bg-neutral-950 relative z-10 px-4">
			<h2
				ref={textRef}
				className="text-4xl md:text-7xl font-black text-center leading-tight text-white mix-blend-difference max-w-[90vw]">
				SOLVING TOMORROW'S
				<br />
				PROBLEMS THROUGH
				<br />
				<span className="text-racing-orange">COMMUNITY COLLABORATION</span>
			</h2>
		</section>
	);
}
