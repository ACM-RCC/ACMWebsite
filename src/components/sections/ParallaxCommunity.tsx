"use client";

import { FloatingCard } from "@/components/ui/FloatingCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Users, Zap } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxCommunity() {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current || !textRef.current || !cardsRef.current)
				return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "bottom bottom",
					scrub: 1,
				},
			});

			// 1. Central Text Evolution
			// Tamed: Subtle scale and fade instead of massive explosion
			tl.fromTo(
				textRef.current,
				{ scale: 0.9, opacity: 0, y: 50 },
				{ scale: 1, opacity: 1, y: 0, duration: 2, ease: "power2.out" }
			)
				.to(textRef.current, {
					scale: 1.2, // Much smaller scale
					opacity: 0,
					duration: 4,
					ease: "power1.in",
				})
				.to({}, { duration: 2 }); // Buffer

			// 2. Floating Cards Flythrough
			// Select all floating cards
			const cards = gsap.utils.toArray<HTMLElement>(
				cardsRef.current.children
			);

			cards.forEach((card, i) => {
				const depth = parseFloat(card.getAttribute("data-depth") || "0.5");
				
				// Randomize start positions slightly for organic feel
				const randomX = (Math.random() - 0.5) * 50;
				const randomY = (Math.random() - 0.5) * 50;

				gsap.set(card, {
					z: -500 * depth, // Start far away
					opacity: 0,
					scale: 0,
					xPercent: -50,
					yPercent: -50,
				});

				tl.to(
					card,
					{
						z: 500, // Fly past camera
						opacity: 1,
						scale: 1,
						duration: 5,
						ease: "none",
						motionPath: {
							path: [
								{ x: randomX, y: randomY }, // Curve slightly
								{ x: randomX * 2, y: randomY * 2 },
							],
						},
					},
					i * 0.5 // Stagger start times
				);

				// Fade out as they get too close/past camera
				tl.to(
					card,
					{
						opacity: 0,
						duration: 1,
					},
					"> -1"
				);
			});
		},
		{ scope: containerRef }
	);

	return (
		<section ref={containerRef} className="h-[400vh] bg-neutral-950 relative">
			<div className="sticky top-0 h-screen w-full overflow-hidden perspective-1000">
				{/* Background Video - Centered & Floating */}
				{/* Removed blur, adjusted opacity for elegance */}
				<div className="absolute inset-0 flex items-center justify-center z-0 opacity-50 pointer-events-none mix-blend-screen">
					<div className="w-[70vw] h-[70vh] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
						<CommunityVideo />
					</div>
				</div>

				{/* Central Anchor Text */}
				<div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
					<h2
						ref={textRef}
						className="text-[10vw] font-bold text-white leading-none tracking-tight text-center">
						OUR
						<br />
						<span className="text-racing-orange">COMMUNITY</span>
					</h2>
				</div>

				{/* Floating Cards Container */}
				<div ref={cardsRef} className="absolute inset-0 w-full h-full z-10">
					{/* Card 1: Image - Increased Size */}
					<FloatingCard depth={0.2} x={20} y={30}>
						<div className="w-80 h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
							<img
								src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
								alt="Community"
								className="w-full h-full object-cover"
							/>
						</div>
					</FloatingCard>

					{/* Card 2: Stat - Increased Size */}
					<FloatingCard depth={0.4} x={80} y={20}>
						<div className="bg-neutral-900/80 backdrop-blur-md p-10 rounded-3xl border border-white/10">
							<div className="text-6xl font-bold text-racing-orange mb-2">
								50+
							</div>
							<div className="text-white text-xl font-medium">Active Members</div>
						</div>
					</FloatingCard>

					{/* Card 3: Image - Increased Size */}
					<FloatingCard depth={0.6} x={30} y={70}>
						<div className="w-96 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
							<img
								src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
								alt="Collaboration"
								className="w-full h-full object-cover"
							/>
						</div>
					</FloatingCard>

					{/* Card 4: Quote - Increased Size */}
					<FloatingCard depth={0.3} x={70} y={60}>
						<div className="bg-white text-black p-10 rounded-3xl max-w-md shadow-2xl transform rotate-3">
							<p className="font-serif italic text-2xl mb-6">
								"The best place to learn and grow as a developer."
							</p>
							<div className="flex items-center gap-4">
								<div className="w-10 h-10 bg-black rounded-full" />
								<span className="font-bold text-lg">Alex R.</span>
							</div>
						</div>
					</FloatingCard>

					{/* Card 5: Icon - Increased Size */}
					<FloatingCard depth={0.8} x={50} y={40}>
						<div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.5)]">
							<Users className="w-20 h-20 text-white" />
						</div>
					</FloatingCard>

					{/* Card 6: Image - Increased Size */}
					<FloatingCard depth={0.5} x={10} y={50}>
						<div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white/20">
							<img
								src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop"
								alt="Event"
								className="w-full h-full object-cover"
							/>
						</div>
					</FloatingCard>

					{/* Card 7: Stat - Increased Size */}
					<FloatingCard depth={0.7} x={90} y={80}>
						<div className="bg-neutral-800 p-8 rounded-2xl border border-white/5 transform -rotate-6">
							<Zap className="w-10 h-10 text-yellow-400 mb-3" />
							<div className="text-3xl font-bold text-white">12+ Projects</div>
						</div>
					</FloatingCard>

					{/* Card 8: Discord CTA - Increased Size */}
					<FloatingCard depth={0.1} x={50} y={90}>
						<div className="bg-[#5865F2] p-6 rounded-xl flex items-center gap-4 text-white shadow-lg hover:scale-105 transition-transform cursor-pointer">
							<MessageCircle className="w-8 h-8" />
							<span className="font-bold text-xl">Join Discord</span>
						</div>
					</FloatingCard>
				</div>
			</div>
		</section>
	);
}

function CommunityVideo() {
	const videoRef = useRef<HTMLVideoElement>(null);

	useGSAP(() => {
		const video = videoRef.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						video.play().catch(() => {}); // Ignore autoplay errors
					} else {
						video.pause();
					}
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(video);

		return () => observer.disconnect();
	}, []);

	return (
		<video
			ref={videoRef}
			src="/hero-video.mp4"
			muted
			loop
			playsInline
			preload="metadata"
			className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
		/>
	);
}
