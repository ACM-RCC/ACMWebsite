"use client";

import { HackerText } from "@/components/animations/HackerText";
import { GalleryItem } from "@/components/ui/GalleryItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Terminal, Users, Zap } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalFeatures() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!sectionRef.current || !triggerRef.current) return;

			const scrollWidth = sectionRef.current.scrollWidth;
			const viewportWidth = window.innerWidth;
			const xMove = -(scrollWidth - viewportWidth);

			gsap.to(sectionRef.current, {
				x: xMove,
				ease: "none",
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: `+=${Math.abs(xMove)}`,
					scrub: 1,
					pin: true,
					anticipatePin: 1,
				},
			});
		},
		{ scope: triggerRef }
	);

	return (
		<section ref={triggerRef} className="overflow-hidden bg-neutral-950">
			<div
				ref={sectionRef}
				className="flex h-screen w-fit items-center px-[5vw] gap-[5vw]">
				{/* Slide 1: The Hook */}
				<GalleryItem className="w-[40vw] md:w-[30vw] flex flex-col justify-center">
					<h2 className="text-6xl md:text-9xl font-black text-white leading-none mb-6">
						WHY
						<br />
						<span className="text-racing-orange">JOIN?</span>
					</h2>
					<p className="text-xl text-neutral-400 max-w-md">
						It's more than just a club. It's a launchpad for your career.
					</p>
					<div className="mt-8 flex items-center gap-2 text-white/50">
						<ArrowRight className="animate-pulse" />
						<span>Explore the Gallery</span>
					</div>
				</GalleryItem>

				{/* Slide 2: Community (Hero Card) */}
				<GalleryItem className="w-[85vw] md:w-[60vw] h-[80vh] relative group overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900">
					<div className="absolute inset-0">
						<img
							src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
							alt="Community"
							className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
					</div>
					<div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
						<div className="w-16 h-16 rounded-2xl bg-blue-500/20 backdrop-blur-md flex items-center justify-center mb-6 text-blue-400">
							<Users className="w-8 h-8" />
						</div>
						<h3 className="text-5xl md:text-7xl font-bold text-white mb-4">
							Community First
						</h3>
						<p className="text-xl text-neutral-300">
							Join a vibrant network of developers, designers, and innovators who
							are shaping the future.
						</p>
					</div>
				</GalleryItem>

				{/* Slide 3: Activities (Bento Grid) */}
				<GalleryItem className="w-[85vw] md:w-[50vw] h-[80vh] flex flex-col gap-6">
					{/* Top Card */}
					<div className="flex-1 bg-neutral-900/50 border border-white/10 rounded-[2rem] p-10 relative overflow-hidden group">
						<div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 transition-opacity">
							<Zap className="w-32 h-32 text-yellow-400" />
						</div>
						<div className="relative z-10 h-full flex flex-col justify-end">
							<h3 className="text-4xl font-bold text-white mb-2">Hackathons</h3>
							<p className="text-neutral-400">
								24 hours of pure creation. Build, compete, and win prizes.
							</p>
						</div>
					</div>
					{/* Bottom Row */}
					<div className="flex-1 flex gap-6">
						<div className="flex-1 bg-neutral-900/50 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden group">
							<div className="absolute top-4 right-4 text-green-400">
								<Terminal className="w-8 h-8" />
							</div>
							<div className="relative z-10 h-full flex flex-col justify-end">
								<h3 className="text-2xl font-bold text-white mb-2">
									Workshops
								</h3>
								<p className="text-sm text-neutral-400">
									Weekly hands-on learning sessions.
								</p>
							</div>
						</div>
						<div className="flex-1 bg-racing-orange text-black rounded-[2rem] p-8 flex flex-col justify-center items-center text-center">
							<h3 className="text-4xl font-black mb-2">50+</h3>
							<p className="font-medium">Active Members</p>
						</div>
					</div>
				</GalleryItem>

				{/* Slide 4: Open Source (Terminal Style) */}
				<GalleryItem className="w-[85vw] md:w-[45vw] h-[60vh] self-center">
					<div className="w-full h-full bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono text-sm">
						{/* Window Bar */}
						<div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
							<div className="w-3 h-3 rounded-full bg-red-500" />
							<div className="w-3 h-3 rounded-full bg-yellow-500" />
							<div className="w-3 h-3 rounded-full bg-green-500" />
							<span className="ml-4 text-neutral-400">open-source.tsx</span>
						</div>
						{/* Code Content */}
						<div className="p-8 text-neutral-300 flex-1 overflow-hidden relative">
							<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1e1e1e] z-10" />
							<p>
								<span className="text-purple-400">const</span>{" "}
								<span className="text-blue-400">contribute</span> = () ={">"} {"{"}
							</p>
							<div className="pl-4">
								<p>
									<span className="text-purple-400">return</span> {"{"}
								</p>
								<div className="pl-4">
									<p>
										project: <span className="text-green-400">"RCC ACM"</span>,
									</p>
									<p>
										impact: <span className="text-green-400">"Real World"</span>
										,
									</p>
									<p>
										skills: [<span className="text-green-400">"React"</span>,{" "}
										<span className="text-green-400">"Git"</span>,{" "}
										<span className="text-green-400">"Teamwork"</span>],
									</p>
								</div>
								<p>{"};"}</p>
							</div>
							<p>{"};"}</p>
							<br />
							<p className="text-neutral-500">// Build your portfolio with us.</p>
							<div className="mt-4">
								<HackerText
									text="> git commit -m 'Initial Commit'"
									className="text-green-400"
								/>
								<span className="animate-pulse">_</span>
							</div>
						</div>
					</div>
				</GalleryItem>

				{/* Slide 5: CTA */}
				<GalleryItem className="w-[40vw] flex flex-col justify-center items-center text-center">
					<h2 className="text-[10vw] font-black text-white leading-none hover:text-racing-orange transition-colors cursor-pointer">
						JOIN
						<br />
						US
					</h2>
				</GalleryItem>
			</div>
		</section>
	);
}
