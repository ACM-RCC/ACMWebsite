import Lenis from "lenis";

let lenis: Lenis | null = null;

// Initialize smooth scroll with luxury automotive-inspired settings
export function initSmoothScroll() {
	lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium feel
	});

	function raf(time: number) {
		lenis?.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	return lenis;
}

export function destroySmoothScroll() {
	lenis?.destroy();
	lenis = null;
}

export function scrollTo(target: string | number, options?: any) {
	lenis?.scrollTo(target, options);
}

export { lenis };
