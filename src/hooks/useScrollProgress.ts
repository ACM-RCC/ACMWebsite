import { useEffect, useState } from "react";

interface ScrollProgress {
	progress: number; // 0-1 overall page progress
	velocity: number; // Scroll velocity
	direction: "up" | "down"; // Scroll direction
	isScrolling: boolean; // Active scroll state
}

export function useScrollProgress(): ScrollProgress {
	const [scrollData, setScrollData] = useState<ScrollProgress>({
		progress: 0,
		velocity: 0,
		direction: "down",
		isScrolling: false,
	});

	useEffect(() => {
		if (typeof window === "undefined") return;

		let lastScrollY = window.scrollY;
		let lastTimestamp = Date.now();
		let scrollTimeout: NodeJS.Timeout;

		const updateScrollProgress = () => {
			const currentScrollY = window.scrollY;
			const currentTimestamp = Date.now();

			// Calculate progress (0-1) - more precise calculation
			const maxScroll =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress =
				maxScroll > 0
					? Math.min(Math.max(currentScrollY / maxScroll, 0), 1)
					: 0;

			// Calculate velocity
			const deltaY = currentScrollY - lastScrollY;
			const deltaTime = currentTimestamp - lastTimestamp;
			const velocity = deltaTime > 0 ? Math.abs(deltaY) / deltaTime : 0;

			// Determine direction
			const direction = deltaY > 0 ? "down" : "up";

			// Update state immediately without throttling for progress
			setScrollData((prev) => ({
				...prev,
				progress,
				velocity,
				direction,
				isScrolling: true,
			}));

			// Clear scrolling state after delay
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => {
				setScrollData((prev) => ({ ...prev, isScrolling: false }));
			}, 100);

			lastScrollY = currentScrollY;
			lastTimestamp = currentTimestamp;
		};

		window.addEventListener("scroll", updateScrollProgress, { passive: true });
		return () => {
			window.removeEventListener("scroll", updateScrollProgress);
			clearTimeout(scrollTimeout);
		};
	}, []);

	return scrollData;
}
