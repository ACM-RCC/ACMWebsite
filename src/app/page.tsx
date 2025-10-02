"use client";

import { ScrollTriggerComponent } from "@/components/animations/ScrollTrigger";
import { Header } from "@/components/layout/header";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ScrollProgressIndicator } from "@/components/ui/ScrollProgressIndicator";
import { useVideoParallax } from "@/hooks/useVideoParallax";
import {
	destroySmoothScroll,
	initSmoothScroll,
} from "@/lib/animations/smooth-scroll";
import { useEffect } from "react";

export default function Home() {
	const parallax = useVideoParallax();

	useEffect(() => {
		// Initialize smooth scroll for luxury feel
		initSmoothScroll();

		return () => {
			destroySmoothScroll();
		};
	}, []);

	return (
		<div className="min-h-screen bg-background relative" style={{ zIndex: 0 }}>
			{/* Scroll Progress Indicator */}
			<ScrollProgressIndicator />

			<Header />

			{/* Cinematic Hero Section - Fixed positioning for parallax */}
			<div
				data-section="hero"
				className="relative"
				style={{ height: "100vh", zIndex: 20 }}>
				<HeroSection />
			</div>

			{/* Enhanced Features Section - Expands as video shrinks */}
			<div
				data-section="features"
				className="relative"
				style={{
					marginTop: `${parallax.nextSectionOffset}px`,
					minHeight: "100vh",
					zIndex: 20,
				}}>
				{/* Content layer - above video */}
				<div className="relative" style={{ zIndex: 20 }}>
					<FeaturesSection />
				</div>
			</div>

			{/* Community Showcase Section - Video continues behind */}
			<ScrollTriggerComponent animation="scale" start="top 60%">
				<section
					data-section="community"
					className="py-20 md:py-28 lg:py-32 relative"
					style={{ zIndex: 50 }}>
					<div className="container">
						<div className="text-center mb-16 md:mb-20 lg:mb-24">
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-10 drop-shadow-lg">
								Join Our <span className="text-racing-orange">Community</span>
							</h2>
							<p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
								Connect with fellow students in our weekly gatherings where
								innovation meets collaboration. Every Thursday, we come together
								to learn, code, and grow.
							</p>
						</div>

						{/* Community Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
							{[
								{ label: "Active Members", value: "50+" },
								{ label: "Weekly Meetings", value: "1" },
								{ label: "Projects", value: "12+" },
								{ label: "Years Active", value: "3+" },
							].map((stat) => (
								<div
									key={stat.label}
									className="text-center p-6 md:p-8 bg-white/8 backdrop-blur-lg rounded-3xl border border-white/15 shadow-lg shadow-black/10">
									<div className="text-2xl md:text-3xl font-bold text-racing-orange mb-3 drop-shadow-md">
										{stat.value}
									</div>
									<div className="text-neutral-200 text-xs md:text-sm drop-shadow-sm font-medium">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</ScrollTriggerComponent>

			{/* Contact Section - Video continues behind */}
			<ScrollTriggerComponent animation="fadeIn" start="top 70%">
				<section
					id="contact"
					data-section="contact"
					className="py-20 md:py-28 lg:py-32 relative"
					style={{ zIndex: 50 }}>
					{/* Content layer - above video */}
					<div className="relative" style={{ zIndex: 50 }}>
						<div className="container">
							<div className="text-center max-w-5xl mx-auto">
								<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-10 drop-shadow-lg">
									Join Our Community
								</h2>
								<p className="text-lg md:text-xl lg:text-2xl text-neutral-200 mb-12 md:mb-16 leading-relaxed drop-shadow-md">
									Connect with us and become part of our growing community. We
									welcome students of all skill levels and backgrounds.
								</p>

								<div className="grid sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16 text-center mb-8">
									<div className="p-8 md:p-10 bg-white/8 backdrop-blur-lg rounded-3xl border border-white/15 shadow-lg shadow-black/10">
										<h3 className="text-lg md:text-xl font-semibold text-white mb-4 drop-shadow-md">
											Weekly Meetings
										</h3>
										<p className="text-neutral-200 text-sm md:text-base drop-shadow-sm">
											Every Thursday at 12:50 - 1:50 PM
										</p>
									</div>
									<div className="p-8 md:p-10 bg-white/8 backdrop-blur-lg rounded-3xl border border-white/15 shadow-lg shadow-black/10">
										<h3 className="text-lg md:text-xl font-semibold text-white mb-4 drop-shadow-md">
											Location
										</h3>
										<p className="text-neutral-200 text-sm md:text-base drop-shadow-sm">
											A-210 Simulation Lab
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</ScrollTriggerComponent>
		</div>
	);
}
