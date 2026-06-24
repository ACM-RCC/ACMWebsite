import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import Lenis from "lenis";

let lenis: Lenis | null = null;
let tickerFn: ((time: number) => void) | null = null;

const prefersReducedMotion = () =>
	typeof window !== "undefined" &&
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Initialize smooth scroll on a SINGLE requestAnimationFrame loop owned by
 * gsap.ticker. This is the canonical Lenis + ScrollTrigger integration and
 * fixes the prior desync (Lenis ran its own RAF loop, so ScrollTrigger read
 * stale scroll values and every scrubbed/pinned animation lagged 1-2 frames).
 *
 * Under reduced-motion we skip Lenis entirely; native scrolling is the
 * accessible baseline and ScrollTrigger still works against the real scroller.
 */
export function initSmoothScroll() {
	if (typeof window === "undefined") return null;
	if (lenis) return lenis; // idempotent (safe under React Strict Mode double-invoke)
	if (prefersReducedMotion()) return null;

	lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		autoRaf: false, // gsap.ticker drives the loop instead of Lenis's own RAF
	});

	// Keep ScrollTrigger in lockstep with Lenis, on one loop.
	lenis.on("scroll", ScrollTrigger.update);
	tickerFn = (time: number) => lenis?.raf(time * 1000); // GSAP gives seconds, Lenis wants ms
	gsap.ticker.add(tickerFn);
	gsap.ticker.lagSmoothing(0);

	// Recompute trigger positions once webfonts settle, since the font swap
	// shifts layout and would otherwise leave pins starting in the wrong place.
	if (document.fonts?.ready) {
		document.fonts.ready.then(() => ScrollTrigger.refresh());
	} else {
		ScrollTrigger.refresh();
	}

	return lenis;
}

export function destroySmoothScroll() {
	if (tickerFn) {
		gsap.ticker.remove(tickerFn);
		tickerFn = null;
	}
	lenis?.destroy();
	lenis = null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function scrollTo(target: string | number, options?: any) {
	lenis?.scrollTo(target, options);
}

export { lenis };
