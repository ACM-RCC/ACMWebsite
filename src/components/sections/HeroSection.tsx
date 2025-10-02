"use client";

import { MagneticButton } from "@/components/animations/MagneticButton";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { useVideoParallax } from "@/hooks/useVideoParallax";
import { ANIMATION_CONFIG } from "@/lib/animations/gsap-config";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
	const heroRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);
	const parallax = useVideoParallax();

	useEffect(() => {
		const hero = heroRef.current;
		const title = titleRef.current;
		const subtitle = subtitleRef.current;
		const cta = ctaRef.current;

		if (!hero || !title || !subtitle || !cta) return;

		// Create master timeline for cinematic entrance
		const masterTL = gsap.timeline();

		// 1. Title reveal with subtle ease-in
		masterTL.from(title.children, {
			opacity: 0,
			y: 30,
			duration: ANIMATION_CONFIG.duration.normal,
			ease: ANIMATION_CONFIG.easing.power,
			stagger: 0.2,
		});

		// 2. Subtitle fade in with blur effect
		masterTL.from(
			subtitle,
			{
				y: 30,
				opacity: 0,
				filter: "blur(10px)",
				duration: ANIMATION_CONFIG.duration.normal,
				ease: ANIMATION_CONFIG.easing.power,
			},
			"-=0.4"
		);

		// 3. CTA buttons with stagger
		masterTL.from(
			cta.children,
			{
				y: 20,
				opacity: 0,
				duration: ANIMATION_CONFIG.duration.fast,
				stagger: ANIMATION_CONFIG.stagger.fast,
				ease: ANIMATION_CONFIG.easing.power,
			},
			"-=0.4"
		);

		// Ensure buttons are visible after animation
		masterTL.set(cta.children, {
			clearProps: "all",
		});

		// Note: Parallax effect is now handled by useVideoParallax hook

		return () => {
			masterTL.kill();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section
			ref={heroRef}
			className="min-h-screen flex items-center justify-center relative overflow-hidden">
			{/* Video Background with Parallax */}
			<VideoBackground
				src="/hero-video.mp4"
				overlayOpacity={0.2}
				brightness={0.7}
				contrast={1.1}
				enableParallax={true}
			/>

			<div className="container relative z-10">
				<div className="text-center">
					{/* Main Title with Gradient Text */}
					<h1
						ref={titleRef}
						className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
							Welcome to RCC
						</span>{" "}
						<span className="text-racing-orange">ACM</span>
					</h1>

					{/* Subtitle */}
					<p
						ref={subtitleRef}
						className="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed max-w-4xl mx-auto">
						Connect with fellow computer science students and tech enthusiasts,
						attend workshops, and build your future in tech.
					</p>

					{/* CTA Buttons with Subtle Hover Effects */}
					<div
						ref={ctaRef}
						className="flex flex-col sm:flex-row gap-4 justify-center">
						<MagneticButton
							href="https://discord.gg/fM2HbsJyBG"
							className="btn btn-primary"
							strength={0}>
							<MessageCircle className="w-4 h-4 mr-2" />
							Join Discord
						</MagneticButton>

						<MagneticButton
							href="https://www.instagram.com/rcc.acm/"
							className="btn btn-secondary"
							strength={0}>
							<Instagram className="w-4 h-4 mr-2" />
							Follow Us
						</MagneticButton>
					</div>
				</div>
			</div>
		</section>
	);
}
