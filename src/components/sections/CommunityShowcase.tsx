"use client";

import { gsap, useGSAP } from "@/lib/animations/gsap";
import { motionMatchMedia } from "@/lib/animations/match-media";
import { EASE, SCRUB } from "@/lib/animations/motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const KICKER = "// join us";

/** Share of the pinned scroll each beat occupies (the timeline runs 0 to 1). */
const BEAT = {
	zoomStart: 0.08, // a short hold so the cutout reads before it moves
	centerEnd: 0.4, // the I has slid to the middle of the screen
	zoomEnd: 0.55, // the I's stem covers the screen: the video is full-bleed
	inviteStart: 0.58,
	inviteEnd: 0.78, // then hold the full-bleed video until the pin releases
} as const;

/** The word rests slightly small so it clears the screen edges. */
const REST_SCALE = 0.9;
/** Inter Black's "I" stem and cap height in em, trimmed for fallback faces. */
const STEM_EM = 0.18;
const CAP_EM = 0.7;
/** Overscan so the stem's edges clear the screen before the mask is removed. */
const COVER_MARGIN = 1.12;

/**
 * Community showcase. The live video plays inside the letters of "COMMUNITY"
 * (a mix-blend wordmask). On scroll the camera flies into the I: the word slides
 * so the I is centered and scales until its solid stem covers the screen. The
 * video is then already full-bleed, so the mask is removed with no crossfade,
 * the invite resolves, and the full-bleed video holds before the pin releases.
 *
 * Reliability: pure transform/opacity scrub (no WebGL, no video scrubbing), a
 * single pinned timeline whose measurements re-run on refresh, and a
 * reduced-motion branch that renders the composition statically. The video
 * plays only while in view.
 */
export function CommunityShowcase() {
	const sectionRef = useRef<HTMLElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const maskRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);
	const pivotRef = useRef<HTMLSpanElement>(null);
	const scrimRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	// Play only while the section is on screen (perf + battery).
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		const io = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (!entry) return;
				if (entry.isIntersecting) video.play().catch(() => {});
				else video.pause();
			},
			{ threshold: 0.05 }
		);
		io.observe(video);
		return () => io.disconnect();
	}, []);

	useGSAP(
		() => {
			motionMatchMedia({
				full: () => {
					const mask = maskRef.current;
					const text = textRef.current;
					const pivot = pivotRef.current;
					if (!mask || !text || !pivot) return;

					// Measure the untransformed layout: clear the heading's transform for the read,
					// then restore it, so a refresh mid-scrub measures the same geometry.
					let cover = 1;
					const measure = () => {
						const saved = text.style.transform;
						text.style.transform = "none";
						const maskBox = mask.getBoundingClientRect();
						const textBox = text.getBoundingClientRect();
						const pivotBox = pivot.getBoundingClientRect();
						text.style.transform = saved;

						const style = getComputedStyle(text);
						const fontPx = parseFloat(style.fontSize);
						const tracking = parseFloat(style.letterSpacing) || 0;
						// Letter-spacing trails the glyph, so the glyph centers on its advance.
						const pivotX = pivotBox.left + (pivotBox.width - tracking) / 2;
						const pivotY = pivotBox.top + pivotBox.height / 2;
						cover =
							COVER_MARGIN *
							Math.max(maskBox.width / (STEM_EM * fontPx), maskBox.height / (CAP_EM * fontPx));
						// Scaling about the I would pull the resting word toward it; offset to stay centered.
						const centerX = textBox.left + textBox.width / 2;
						const centerY = textBox.top + textBox.height / 2;
						return {
							origin: `${pivotX - textBox.left}px ${pivotY - textBox.top}px`,
							restX: (1 - REST_SCALE) * (centerX - pivotX),
							restY: (1 - REST_SCALE) * (centerY - pivotY),
							dx: maskBox.left + maskBox.width / 2 - pivotX,
							dy: maskBox.top + maskBox.height / 2 - pivotY,
						};
					};
					let m = measure();

					// Scale on a log curve so the fly-in reads at a constant speed.
					const logZoom = (p: number) => {
						const ratio = cover / REST_SCALE;
						return ratio > 1 ? (Math.pow(ratio, p) - 1) / (ratio - 1) : p;
					};

					const tl = gsap.timeline({
						defaults: { ease: "none" },
						scrollTrigger: {
							trigger: sectionRef.current,
							start: "top top",
							end: "+=200%",
							scrub: SCRUB.tight,
							pin: true,
							invalidateOnRefresh: true,
							onRefreshInit: () => {
								m = measure();
							},
						},
					});

					tl.set(text, { transformOrigin: () => m.origin }, 0)
						.fromTo(videoRef.current, { scale: 1.1 }, { scale: 1, ease: "power1.out", duration: BEAT.zoomEnd }, 0)
						.fromTo(
							text,
							{ x: () => m.restX, y: () => m.restY },
							{
								x: () => m.dx,
								y: () => m.dy,
								ease: "power2.inOut",
								duration: BEAT.centerEnd - BEAT.zoomStart,
							},
							BEAT.zoomStart
						)
						.fromTo(
							text,
							{ scale: REST_SCALE },
							{
								scale: () => cover,
								ease: logZoom,
								force3D: false, // repaint at each scale so the stem's edges stay crisp
								duration: BEAT.zoomEnd - BEAT.zoomStart,
							},
							BEAT.zoomStart
						)
						.set(mask, { autoAlpha: 0 }, BEAT.zoomEnd)
						.fromTo(scrimRef.current, { opacity: 0 }, { opacity: 1, duration: 0.14 }, BEAT.zoomEnd + 0.01)
						.fromTo(
							overlayRef.current,
							{ autoAlpha: 0, y: 30 },
							{ autoAlpha: 1, y: 0, ease: EASE.premium, duration: BEAT.inviteEnd - BEAT.inviteStart },
							BEAT.inviteStart
						)
						.set({}, {}, 1);
				},
				reduced: () => {
					// Static composition: wordmask + scrim + invite, no pin/scrub.
					gsap.set(maskRef.current, { autoAlpha: 1 });
					gsap.set(textRef.current, { scale: 1, x: 0, y: 0 });
					gsap.set(scrimRef.current, { opacity: 0.5 });
					gsap.set(overlayRef.current, { autoAlpha: 1, y: 0 });
				},
			});
		},
		{ scope: sectionRef }
	);

	return (
		<section
			ref={sectionRef}
			className="relative h-screen w-full overflow-hidden bg-black isolate">
			{/* Full-bleed live video */}
			<video
				ref={videoRef}
				src="/hero-video.mp4"
				muted
				loop
				playsInline
				preload="auto"
				className="absolute inset-0 h-full w-full object-cover"
			/>

			{/* Wordmask: the video shows through the letters via mix-blend */}
			<div
				ref={maskRef}
				className="absolute inset-0 z-10 flex items-center justify-center bg-black mix-blend-multiply">
				<h2
					ref={textRef}
					aria-label="Community"
					className="select-none px-4 text-center font-black uppercase leading-none tracking-tighter text-white"
					style={{ fontSize: "clamp(3.5rem, 15vw, 15rem)" }}>
					Commun
					<span ref={pivotRef}>i</span>ty
				</h2>
			</div>

			{/* Scrim for legibility once the video is full-bleed */}
			<div
				ref={scrimRef}
				className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/10 to-black/50"
			/>

			{/* Invite */}
			<div
				ref={overlayRef}
				className="absolute inset-x-0 bottom-[12vh] z-30 flex flex-col items-center px-6 text-center">
				<span
					className="mb-4 font-mono uppercase tracking-[0.3em] text-accent"
					style={{ fontSize: "var(--step--1)" }}>
					{KICKER}
				</span>
				<p
					className="mb-7 max-w-xl font-medium text-white"
					style={{ fontSize: "var(--step-2)" }}>
					Students who build together.
				</p>
				<a
					href="https://discord.gg/fM2HbsJyBG"
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-bold text-black transition-transform hover:scale-105">
					Come build with us
					<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</a>
			</div>
		</section>
	);
}
