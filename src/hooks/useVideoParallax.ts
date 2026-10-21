"use client";

import { useEffect, useState } from "react";

interface VideoParallaxData {
	scale: number;
	borderRadius: number;
	translateY: number;
	opacity: number;
	nextSectionOffset: number;
}

export function useVideoParallax() {
	const [parallaxData, setParallaxData] = useState<VideoParallaxData>({
		scale: 1,
		borderRadius: 0,
		translateY: 0,
		opacity: 1,
		nextSectionOffset: 0,
	});

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const totalScrollableHeight =
				document.documentElement.scrollHeight - windowHeight;

			// Direct scroll progress calculation - no easing, no slowdowns
			const extendedScrollProgress = Math.min(scrollY / (windowHeight * 2), 1);
			const globalScrollProgress = scrollY / totalScrollableHeight;

			// Direct linear calculations - no easing functions
			const scale = 1 - extendedScrollProgress * 0.25;
			const borderRadius = extendedScrollProgress * 32;
			const translateY = extendedScrollProgress * -100;
			const opacity =
				globalScrollProgress > 0.9 ? 1 - (globalScrollProgress - 0.9) * 10 : 1;
			const nextSectionOffset = Math.max(
				0,
				windowHeight - extendedScrollProgress * windowHeight * 0.2
			);

			setParallaxData({
				scale,
				borderRadius,
				translateY,
				opacity: Math.max(opacity, 0),
				nextSectionOffset,
			});
		};

		// Initial calculation
		handleScroll();

		// Direct scroll listener - no throttling, no requestAnimationFrame delays
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

	return parallaxData;
}
