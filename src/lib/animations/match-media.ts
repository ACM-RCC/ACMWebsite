/**
 * Reduced-motion master-switch helper (stack decision #2).
 *
 * Wrap every component's scroll/animation setup in this so that:
 *  - all pins/scrub/parallax exist ONLY when motion is allowed, and
 *  - they auto-revert (tweens killed, ScrollTriggers removed, pins released)
 *    when the user toggles "reduce motion" at the OS level.
 *
 * Usage inside a component (with useGSAP for scope + cleanup):
 *
 *   useGSAP(() => {
 *     motionMatchMedia({
 *       full: () => { /* pins, scrub, parallax * / },
 *       reduced: () => { gsap.set(el, { autoAlpha: 1, y: 0 }); },
 *     });
 *   }, { scope: ref });
 */
import { gsap } from "@/lib/animations/gsap";

export const MOTION_CONDITIONS = {
	motionOK: "(prefers-reduced-motion: no-preference)",
	reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

/** A handler may return a cleanup function, run when its branch stops matching. */
type MotionCleanup = void | (() => void);

interface MotionHandlers {
	/** runs when motion is allowed; create all animations here */
	full: (ctx: gsap.Context) => MotionCleanup;
	/** runs under reduced motion; set final/static states here (optional) */
	reduced?: (ctx: gsap.Context) => MotionCleanup;
}

export function motionMatchMedia(handlers: MotionHandlers): gsap.MatchMedia {
	const mm = gsap.matchMedia();
	mm.add(MOTION_CONDITIONS, (ctx) => {
		const conditions = ctx.conditions as
			| { motionOK: boolean; reduceMotion: boolean }
			| undefined;
		if (conditions?.reduceMotion) {
			return handlers.reduced?.(ctx);
		}
		return handlers.full(ctx);
	});
	return mm;
}
