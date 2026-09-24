"use client";

import { gsap, useGSAP } from "@/lib/animations/gsap";
import { motionMatchMedia } from "@/lib/animations/match-media";
import { SCRUB } from "@/lib/animations/motion";
import { ArrowRight, Boxes, GraduationCap, Trophy, Users } from "lucide-react";
import { useRef } from "react";

const KICKER = "// why join";
const BUILD_COMMENT = "// turn ideas into a portfolio";
/**
 * Pacing of the pinned stretch, in units of the horizontal distance. LEAD and TAIL are
 * still scroll before and after the run; the run eases in over RAMP and out over RAMP,
 * covering half that share of track at each end, and moves 1:1 with scroll between.
 * TAIL outlasts the scrub lag so the last card visibly lands before the pin releases.
 */
const LEAD = 0.06;
const RAMP = 0.12;
const TAIL = 0.16;
const RUN = 1 + RAMP; // two ramps at half speed plus the 1:1 middle

const PILLARS = [
	{
		n: "01",
		icon: Boxes,
		title: "Build",
		copy: "Ship real projects and open source. Walk away with a portfolio, not just notes.",
	},
	{
		n: "02",
		icon: Trophy,
		title: "Compete",
		copy: "Hackathons and contests where you build under pressure and win as a team.",
	},
	{
		n: "03",
		icon: GraduationCap,
		title: "Learn",
		copy: "Workshops and talks on the tools the industry actually uses, taught hands-on.",
	},
	{
		n: "04",
		icon: Users,
		title: "Connect",
		copy: "A community of CS students who push each other forward and have your back.",
	},
];

export function Pillars() {
	const sectionRef = useRef<HTMLElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			motionMatchMedia({
				full: () => {
					const track = trackRef.current;
					const section = sectionRef.current;
					if (!track || !section) return;

					// Measured on every refresh so a resize keeps the track and pin in step.
					const distance = () => track.scrollWidth - window.innerWidth;
					if (distance() <= 0) return;

					// The section lands and settles before the track moves, eases into and out
					// of the horizontal run, and holds on the last card before releasing.
					// power1.in over RAMP ends at exactly 1:1 speed and power1.out starts there,
					// so the track's speed never jumps.
					const edge = RAMP / 2;
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: section,
							start: "top top",
							end: () => `+=${distance() * (LEAD + RUN + TAIL)}`,
							scrub: SCRUB.normal,
							pin: true,
							invalidateOnRefresh: true,
						},
					});
					tl.to({}, { duration: LEAD })
						.fromTo(track, { x: 0 }, { x: () => -distance() * edge, ease: "power1.in", duration: RAMP })
						.to(track, { x: () => -distance() * (1 - edge), ease: "none", duration: 1 - RAMP })
						.to(track, { x: () => -distance(), ease: "power1.out", duration: RAMP })
						.to({}, { duration: TAIL });
				},
				reduced: () => {
					// No pin/scrub: the row becomes natively scrollable horizontally.
					gsap.set(sectionRef.current, {
						overflowX: "auto",
						overflowY: "hidden",
					});
				},
			});
		},
		{ scope: sectionRef }
	);

	return (
		<section
			ref={sectionRef}
			className="h-screen w-full overflow-hidden bg-surface">
			<div
				ref={trackRef}
				className="flex h-full w-fit items-center gap-[4vw] px-[6vw]">
				{/* Intro */}
				<div className="flex w-[78vw] flex-shrink-0 flex-col justify-center md:w-[34vw]">
					<span
						className="mb-5 font-mono uppercase tracking-[0.3em] text-accent"
						style={{ fontSize: "var(--step--1)" }}>
						{KICKER}
					</span>
					<h2
						className="font-black uppercase leading-[0.95] tracking-tighter text-text"
						style={{ fontSize: "var(--step-7)" }}>
						Why
						<br />
						<span className="text-accent">join?</span>
					</h2>
					<p
						className="mt-6 max-w-md text-text-muted"
						style={{ fontSize: "var(--step-1)" }}>
						It is a launchpad, not just a club. Four reasons to show up.
					</p>
					<div className="mt-8 flex items-center gap-2 text-text-muted">
						<ArrowRight className="h-5 w-5 animate-pulse" />
						<span style={{ fontSize: "var(--step--1)" }}>Scroll across</span>
					</div>
				</div>

				{/* Pillar 01 (Build) — terminal treatment */}
				<article className="flex h-[64vh] w-[86vw] flex-shrink-0 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] font-mono shadow-2xl md:w-[46vw]">
					<div className="flex items-center gap-2 border-b border-white/5 bg-[#171717] px-4 py-3">
						<span className="h-3 w-3 rounded-full bg-red-500" />
						<span className="h-3 w-3 rounded-full bg-yellow-500" />
						<span className="h-3 w-3 rounded-full bg-green-500" />
						<span
							className="ml-3 text-neutral-500"
							style={{ fontSize: "var(--step--1)" }}>
							build.ts
						</span>
					</div>
					<div className="flex flex-1 flex-col justify-between p-8 md:p-10">
						<div
							className="leading-relaxed text-neutral-300"
							style={{ fontSize: "var(--step-0)" }}>
							<p>
								<span className="text-purple-400">const</span>{" "}
								<span className="text-blue-400">you</span> = {"{"}
							</p>
							<p className="pl-5">
								build: [
								<span className="text-green-400">&quot;projects&quot;</span>,{" "}
								<span className="text-green-400">&quot;open source&quot;</span>],
							</p>
							<p className="pl-5">
								ship: <span className="text-orange-400">true</span>,
							</p>
							<p>{"};"}</p>
							<p className="mt-4 text-neutral-500">{BUILD_COMMENT}</p>
							<p className="mt-2 text-green-400">
								&gt; git commit -m &quot;first PR&quot;
								<span className="animate-pulse">_</span>
							</p>
						</div>
						<div className="mt-6 flex items-center gap-3">
							<span
								className="text-accent"
								style={{ fontSize: "var(--step--1)" }}>
								01
							</span>
							<h3
								className="font-sans font-black text-text"
								style={{ fontSize: "var(--step-3)" }}>
								Build
							</h3>
						</div>
					</div>
				</article>

				{/* Pillars 02-04 — clean cards */}
				{PILLARS.slice(1).map(({ n, icon: Icon, title, copy }) => (
					<article
						key={n}
						className="group flex h-[64vh] w-[80vw] flex-shrink-0 flex-col justify-between rounded-[2rem] border border-border bg-surface-raised p-10 transition-colors hover:border-accent/40 md:w-[40vw]">
						<div className="flex items-start justify-between">
							<span
								className="font-mono text-accent"
								style={{ fontSize: "var(--step-1)" }}>
								{n}
							</span>
							<Icon className="h-10 w-10 text-text-muted transition-colors group-hover:text-accent" />
						</div>
						<div>
							<h3
								className="mb-4 font-black text-text"
								style={{ fontSize: "var(--step-5)" }}>
								{title}
							</h3>
							<p
								className="max-w-sm text-text-muted"
								style={{ fontSize: "var(--step-1)" }}>
								{copy}
							</p>
						</div>
					</article>
				))}

				{/* Outro CTA */}
				<div className="flex w-[80vw] flex-shrink-0 flex-col items-start justify-center md:w-[34vw]">
					<h2
						className="font-black uppercase leading-[0.9] tracking-tighter text-text"
						style={{ fontSize: "var(--step-7)" }}>
						Ready to
						<br />
						<span className="text-accent">build?</span>
					</h2>
					<a
						href="https://discord.gg/fM2HbsJyBG"
						target="_blank"
						rel="noopener noreferrer"
						className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-black transition-transform hover:scale-105">
						Join us on Discord
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</a>
				</div>
			</div>
		</section>
	);
}
