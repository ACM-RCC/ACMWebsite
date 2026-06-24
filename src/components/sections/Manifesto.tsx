"use client";

import {
	gsap,
	SplitText,
	useGSAP,
} from "@/lib/animations/gsap";
import { motionMatchMedia } from "@/lib/animations/match-media";
import { DURATION, EASE, SCRUB, STAGGER } from "@/lib/animations/motion";
import { useRef } from "react";

const KICKER = "// our mission";
const STATEMENT = "Curiosity becomes code. Students become engineers.";

/**
 * Manifesto beat. One held, cinematic typographic statement.
 *
 * - SplitText line-mask reveal scrubbed through a pin (autoSplit handles the
 *   font-load + resize re-split so lines never break against the wrong metrics).
 * - ScrambleText kicker decodes on enter (replaces the old HackerText).
 * - Accessibility: the real text lives in an sr-only span read normally; the
 *   animated copy is aria-hidden, so screen readers never see split fragments.
 * - Reduced motion: nothing animates and the static text is already in the DOM.
 */
export function Manifesto() {
	const containerRef = useRef<HTMLDivElement>(null);
	const kickerRef = useRef<HTMLSpanElement>(null);
	const headingRef = useRef<HTMLSpanElement>(null);

	useGSAP(
		() => {
			motionMatchMedia({
				full: () => {
					const section = containerRef.current;
					if (!section) return;

					// Kicker decodes as the section approaches.
					gsap.to(kickerRef.current, {
						duration: DURATION.slow,
						ease: "none",
						scrambleText: {
							text: KICKER,
							chars: "01<>/{}",
							speed: 0.5,
							revealDelay: 0.2,
						},
						scrollTrigger: {
							trigger: section,
							start: "top 70%",
							toggleActions: "play none none reverse",
						},
					});

					// Lines rise out of their masks as you scroll through the pin.
					SplitText.create(headingRef.current, {
						type: "lines",
						mask: "lines",
						autoSplit: true,
						aria: "none", // a11y handled by the sr-only layer below
						onSplit: (self) =>
							gsap.from(self.lines, {
								yPercent: 110,
								duration: DURATION.normal,
								stagger: STAGGER.slow,
								ease: EASE.premium,
								scrollTrigger: {
									trigger: section,
									start: "top top",
									end: "+=80%",
									scrub: SCRUB.normal,
									pin: true,
									anticipatePin: 1,
								},
							}),
					});
				},
			});
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-surface px-6">
			<span
				ref={kickerRef}
				aria-hidden="true"
				className="mb-8 font-mono uppercase tracking-[0.3em] text-accent"
				style={{ fontSize: "var(--step--1)" }}>
				{KICKER}
			</span>

			<h2
				className="max-w-[14ch] text-center font-black leading-[1.05] tracking-tight text-text"
				style={{ fontSize: "var(--step-7)" }}>
				{/* read normally by screen readers */}
				<span className="sr-only">{STATEMENT}</span>
				{/* animated copy, hidden from assistive tech */}
				<span ref={headingRef} aria-hidden="true">
					Curiosity becomes code. Students become{" "}
					<span className="text-accent">engineers.</span>
				</span>
			</h2>
		</section>
	);
}
