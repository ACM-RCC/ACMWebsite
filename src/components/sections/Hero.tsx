"use client";

import { useEventModal } from "@/components/ui/EventModalProvider";
import { useClubMeeting } from "@/hooks/useClubMeeting";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { gsap, SplitText, useGSAP } from "@/lib/animations/gsap";
import { motionMatchMedia } from "@/lib/animations/match-media";
import { DURATION, EASE, STAGGER } from "@/lib/animations/motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HeroCanvas = dynamic(
	() => import("./HeroCanvas").then((m) => m.HeroCanvas),
	{ ssr: false }
);

/** Capability gate: only load WebGL where it is safe and wanted. */
function canEnhance(): boolean {
	if (typeof window === "undefined") return false;
	try {
		const c = document.createElement("canvas");
		if (!(c.getContext("webgl2") || c.getContext("webgl"))) return false;
	} catch {
		return false;
	}
	const nav = navigator as Navigator & {
		connection?: { saveData?: boolean };
		deviceMemory?: number;
	};
	if (nav.connection?.saveData) return false;
	if (typeof nav.deviceMemory === "number" && nav.deviceMemory < 4) return false;
	return true;
}

export function Hero() {
	const reduced = usePrefersReducedMotion();
	const [enhance, setEnhance] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);
	const headlineRef = useRef<HTMLSpanElement>(null);
	const { openModal } = useEventModal();
	const { status } = useClubMeeting();

	useEffect(() => {
		setEnhance(!reduced && canEnhance());
	}, [reduced]);

	useGSAP(
		() => {
			motionMatchMedia({
				full: () => {
					SplitText.create(headlineRef.current, {
						type: "chars",
						mask: "chars",
						aria: "none",
						onSplit: (self) =>
							gsap.from(self.chars, {
								yPercent: 120,
								opacity: 0,
								stagger: STAGGER.fast,
								duration: DURATION.slow,
								ease: EASE.premium,
								delay: 0.15,
							}),
					});
					gsap.from("[data-hero-reveal]", {
						y: 28,
						opacity: 0,
						duration: DURATION.normal,
						ease: EASE.premium,
						stagger: STAGGER.normal,
						delay: 0.55,
					});
				},
				reduced: () => {
					gsap.set("[data-hero-reveal]", { opacity: 1, y: 0 });
				},
			});
		},
		{ scope: sectionRef }
	);

	const isLive = status === "in_progress";

	return (
		<section
			ref={sectionRef}
			className="relative flex h-screen w-full items-center justify-center overflow-hidden">
			{/* Base poster (always present, LCP-safe) */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse at 50% 38%, rgba(255,77,0,0.20), transparent 60%), #050505",
				}}
			/>

			{/* Progressive WebGL enhancement */}
			{enhance && <HeroCanvas />}

			{/* Vignette for text legibility */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center px-6 text-center">
				<button
					data-hero-reveal
					onClick={openModal}
					className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-white/5 px-4 py-2 font-mono uppercase tracking-widest text-text-muted backdrop-blur-md transition-colors hover:text-text"
					style={{ fontSize: "var(--step--1)" }}>
					{isLive ? (
						<>
							<span className="h-2 w-2 animate-pulse rounded-full bg-live" />
							<span className="text-live">Live now</span>
						</>
					) : (
						<>
							<span className="h-2 w-2 rounded-full bg-accent" />
							Meets Thursdays
						</>
					)}
				</button>

				<h1
					className="font-black uppercase leading-[0.9] tracking-tighter text-text"
					style={{ fontSize: "var(--step-display)" }}>
					<span className="sr-only">RCC ACM</span>
					<span ref={headlineRef} aria-hidden="true">
						RCC ACM
					</span>
				</h1>

				<p
					data-hero-reveal
					className="mt-6 max-w-xl text-text-muted"
					style={{ fontSize: "var(--step-1)" }}>
					Riverside City College&apos;s computer science community. Build,
					compete, and ship together.
				</p>

				<div
					data-hero-reveal
					className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
					<a
						href="https://discord.gg/fM2HbsJyBG"
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-black transition-transform hover:scale-105">
						Join the community
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</a>
				</div>
			</div>

			{/* Scroll cue */}
			<div
				data-hero-reveal
				className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono uppercase tracking-[0.3em] text-text-muted"
				style={{ fontSize: "var(--step--1)" }}>
				Scroll
			</div>
		</section>
	);
}
