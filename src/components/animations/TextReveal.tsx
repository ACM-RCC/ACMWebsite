"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
	children: string;
	className?: string;
	direction?: "up" | "down" | "left" | "right";
	delay?: number;
	stagger?: number;
	scrub?: boolean | number;
}

export function TextReveal({
	children,
	className = "",
	direction = "up",
	delay = 0,
	stagger = 0.05,
	scrub = false,
}: TextRevealProps) {
	const textRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!textRef.current) return;

			// Split text into characters (simple split by space for words, or char by char)
			// For this effect, let's split by words to keep it readable but animated
			const words = textRef.current.innerText.split(" ");
			textRef.current.innerHTML = "";

			words.forEach((word) => {
				const span = document.createElement("span");
				span.innerText = word + " ";
				span.style.display = "inline-block";
				span.style.opacity = "0";
				span.style.transform =
					direction === "up" ? "translateY(50px)" : "translateY(-50px)";
				textRef.current?.appendChild(span);
			});

			const spans = textRef.current.children;

			gsap.to(spans, {
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: stagger,
				ease: "power4.out",
				delay: delay,
				scrollTrigger: {
					trigger: textRef.current,
					start: "top 80%",
					end: scrub ? "bottom 60%" : undefined,
					scrub: scrub,
					toggleActions: scrub ? undefined : "play none none reverse",
				},
			});
		},
		{ scope: textRef }
	);

	return (
		<div ref={textRef} className={className}>
			{children}
		</div>
	);
}
