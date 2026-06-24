"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe reduced-motion preference. Defaults to false (motion on) on the
 * server and first paint, then syncs to the OS setting and updates live if it
 * changes. Use to gate conditional rendering (e.g. whether to mount the WebGL
 * hero at all). For GSAP scroll setup, prefer motionMatchMedia() so animations
 * auto-revert.
 */
export function usePrefersReducedMotion(): boolean {
	const [reduced, setReduced] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(mq.matches);

		const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);

	return reduced;
}
