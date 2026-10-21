"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Code, Terminal, Users, Zap } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function PinnedFeatures() {
	const containerRef = useRef<HTMLDivElement>(null);
	const leftPanelRef = useRef<HTMLDivElement>(null);
	const rightPanelRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (
				!containerRef.current ||
				!leftPanelRef.current ||
				!rightPanelRef.current
			)
				return;

			// Pin the left panel while the right panel scrolls
			ScrollTrigger.create({
				trigger: containerRef.current,
				start: "top top",
				end: "bottom bottom",
				pin: leftPanelRef.current,
				pinSpacing: false, // Important for side-by-side pinning
			});

			// Animate cards in the right panel
			const cards = gsap.utils.toArray<HTMLElement>(".feature-card");
			cards.forEach((card, i) => {
				gsap.from(card, {
					opacity: 0,
					x: 50,
					duration: 0.8,
					scrollTrigger: {
						trigger: card,
						start: "top 80%",
						end: "top 50%",
						scrub: 1,
					},
				});
			});
		},
		{ scope: containerRef }
	);

	const features = [
		{
			icon: Users,
			title: "Community First",
			desc: "Join a vibrant network of developers, designers, and innovators.",
			color: "text-blue-400",
			bg: "bg-blue-500/10",
		},
		{
			icon: Terminal,
			title: "Hands-on Workshops",
			desc: "Learn by doing with weekly coding sessions and tutorials.",
			color: "text-green-400",
			bg: "bg-green-500/10",
		},
		{
			icon: Zap,
			title: "Hackathons",
			desc: "Compete, collaborate, and build amazing projects in 24 hours.",
			color: "text-yellow-400",
			bg: "bg-yellow-500/10",
		},
		{
			icon: Code,
			title: "Open Source",
			desc: "Contribute to real-world projects and build your portfolio.",
			color: "text-purple-400",
			bg: "bg-purple-500/10",
		},
	];

	return (
		<section ref={containerRef} className="flex flex-col md:flex-row min-h-[200vh]">
			{/* Left Panel - Pinned */}
			<div
				ref={leftPanelRef}
				className="w-full md:w-1/2 h-screen flex flex-col justify-center p-12 md:p-20 bg-neutral-900 text-white z-10">
				<h2 className="text-5xl md:text-7xl font-bold mb-8">
					Why <br />
					<span className="text-racing-orange">Join Us?</span>
				</h2>
				<p className="text-xl text-neutral-400 max-w-md mb-12">
					We're more than just a club. We're a launchpad for your career in
					tech.
				</p>
				<div className="flex items-center gap-4 text-racing-orange font-medium cursor-pointer group">
					<span>Explore Opportunities</span>
					<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
				</div>
			</div>

			{/* Right Panel - Scrolling */}
			<div
				ref={rightPanelRef}
				className="w-full md:w-1/2 bg-neutral-950 p-8 md:p-20 flex flex-col gap-20 md:gap-40 pt-20 md:pt-40 pb-40">
				{features.map((feature, i) => (
					<div
						key={i}
						className="feature-card group p-10 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
						<div
							className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-8`}>
							<feature.icon className={`w-8 h-8 ${feature.color}`} />
						</div>
						<h3 className="text-3xl font-bold text-white mb-4">
							{feature.title}
						</h3>
						<p className="text-lg text-neutral-400">{feature.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
