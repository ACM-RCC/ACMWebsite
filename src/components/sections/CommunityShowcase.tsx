"use client";

import { gsap, useGSAP } from "@/lib/animations/gsap";
import { motionMatchMedia } from "@/lib/animations/match-media";
import { EASE, SCRUB } from "@/lib/animations/motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const KICKER = "// join us";

/**
 * Community showcase. The live video is the centerpiece: it plays inside the
 * letters of "COMMUNITY" (mix-blend wordmask), then on scroll the word zooms
 * and dissolves to reveal the full-bleed video, where a short invite + CTA
 * resolve in. Replaces the old floating-card flythrough.
 *
 * Reliability: pure transform/opacity scrub (no WebGL, no video scrubbing), a
 * single pinned timeline, and a reduced-motion branch that renders the same
 * composition statically. The video plays only while in view.
 */
export function CommunityShowcase() {
	const sectionRef = useRef<HTMLElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const maskRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);
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
					gsap.set(scrimRef.current, { opacity: 0 });
					gsap.set(overlayRef.current, { opacity: 0, y: 30 });
					gsap.set(textRef.current, { scale: 0.9 });

					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: sectionRef.current,
							start: "top top",
							end: "+=200%",
							scrub: SCRUB.normal,
							pin: true,
							anticipatePin: 1,
						},
					});

					tl.to(textRef.current, { scale: 1.4, ease: "none", duration: 1.5 }, 0)
						.to(videoRef.current, { scale: 1.08, ease: "none", duration: 1.5 }, 0)
						.to(maskRef.current, { opacity: 0, ease: "power1.in", duration: 0.6 }, 0.7)
						.to(scrimRef.current, { opacity: 1, duration: 0.5 }, 0.85)
						.to(
							overlayRef.current,
							{ opacity: 1, y: 0, ease: EASE.premium, duration: 0.5 },
							1.0
						);
				},
				reduced: () => {
					// Static composition: wordmask + scrim + invite, no pin/scrub.
					gsap.set(maskRef.current, { opacity: 1 });
					gsap.set(textRef.current, { scale: 1 });
					gsap.set(scrimRef.current, { opacity: 0.5 });
					gsap.set(overlayRef.current, { opacity: 1, y: 0 });
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
					className="select-none px-4 text-center font-black uppercase leading-none tracking-tighter text-white"
					style={{ fontSize: "clamp(3.5rem, 15vw, 15rem)" }}>
					Community
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
