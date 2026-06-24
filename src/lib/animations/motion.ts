/**
 * Motion tokens. Single source of truth for durations (seconds), eases, stagger,
 * and scrub values so components stop inlining magic numbers. These are the
 * good parts of the old gsap-config, kept as plain data (no side effects).
 */

export const DURATION = {
	instant: 0.1,
	fast: 0.3,
	normal: 0.6,
	slow: 1.2,
	cinematic: 2.0,
} as const;

export const EASE = {
	/** default reveal */
	premium: "power3.out",
	inOut: "power2.inOut",
	expo: "expo.out",
	circ: "circ.out",
	/** overshoot for playful accents */
	back: "back.out(1.7)",
} as const;

export const STAGGER = {
	tight: 0.04,
	fast: 0.08,
	normal: 0.12,
	slow: 0.2,
} as const;

/** scrub catch-up in seconds for ScrollTrigger; higher = softer/laggier */
export const SCRUB = {
	tight: 0.5,
	normal: 1,
	loose: 1.5,
} as const;
