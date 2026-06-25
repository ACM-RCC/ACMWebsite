"use client";

import { HackerText } from "@/components/animations/HackerText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ScrubbableHero() {
	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current || !titleRef.current) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "bottom top",
					scrub: 1,
					pin: true,
				},
			});

			// Initial State
			gsap.set(titleRef.current, { scale: 1, opacity: 1 });

			// Animation Sequence
			// 1. "Welcome to" fades out
			tl.to(".hero-intro", { opacity: 0, duration: 0.5, y: -50 });

			// 2. "RCC ACM" scales up massively and changes color
			tl.to(
				".hero-brand",
				{
					scale: 15,
					color: "#ff4d00", // Racing Orange
					opacity: 0.2,
					duration: 2,
					ease: "power2.inOut",
				},
				"<"
			);

			// 3. Subtitle reveals as the brand scales up
			tl.fromTo(
				subtitleRef.current,
				{ opacity: 0, y: 100 },
				{ opacity: 1, y: 0, duration: 1 },
				"-=1.5"
			);
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			className="h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-950 relative">
			<h1
				ref={titleRef}
				className="text-center font-black leading-none z-10 flex flex-col items-center">
				<span className="hero-intro text-4xl md:text-6xl text-white mb-4 block">
					<HackerText text="Welcome to" />
				</span>
				<span className="hero-brand text-[15vw] text-white block whitespace-nowrap origin-center">
					RCC ACM
				</span>
			</h1>

			<p
				ref={subtitleRef}
				className="absolute bottom-20 text-xl md:text-2xl text-neutral-400 max-w-2xl text-center px-4 opacity-0">
				Innovate. Collaborate. Build the Future.
			</p>
		</section>
	);
}
