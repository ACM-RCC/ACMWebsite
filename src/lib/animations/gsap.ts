/**
 * Central GSAP setup. Import { gsap, ScrollTrigger, useGSAP } from here so
 * plugins register exactly once and ScrollTrigger gets its reliability defaults.
 * As we adopt more of the (now free) plugins (SplitText, ScrambleText, Flip),
 * register them in this one place.
 */
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
	gsap.registerPlugin(
		ScrollTrigger,
		useGSAP,
		SplitText,
		ScrambleTextPlugin
	);

	// Reliability defaults. ignoreMobileResize stops mobile browser address-bar
	// resize from refreshing ScrollTrigger and causing scroll jank. We do NOT use
	// normalizeScroll because Lenis owns touch scrolling (see stack decisions).
	ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrambleTextPlugin, ScrollTrigger, SplitText, useGSAP };
