"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function MagneticCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);
	const followerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const cursor = cursorRef.current;
		const follower = followerRef.current;

		if (!cursor || !follower) return;

		const moveCursor = (e: MouseEvent) => {
			gsap.to(cursor, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.1,
				ease: "power2.out",
			});
			gsap.to(follower, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.5,
				ease: "power2.out",
			});
		};

		const handleHover = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (
				target.tagName.toLowerCase() === "a" ||
				target.tagName.toLowerCase() === "button" ||
				target.closest("a") ||
				target.closest("button")
			) {
				gsap.to([cursor, follower], {
					scale: 2,
					mixBlendMode: "difference",
					duration: 0.3,
				});
			} else {
				gsap.to([cursor, follower], {
					scale: 1,
					mixBlendMode: "normal",
					duration: 0.3,
				});
			}
		};

		window.addEventListener("mousemove", moveCursor);
		window.addEventListener("mouseover", handleHover);

		return () => {
			window.removeEventListener("mousemove", moveCursor);
			window.removeEventListener("mouseover", handleHover);
		};
	});

	// Only render on desktop to avoid touch issues
	return (
		<div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
			<div
				ref={cursorRef}
				className="absolute w-3 h-3 bg-racing-orange rounded-full -translate-x-1/2 -translate-y-1/2"
			/>
			<div
				ref={followerRef}
				className="absolute w-8 h-8 border border-racing-orange rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"
			/>
		</div>
	);
}
