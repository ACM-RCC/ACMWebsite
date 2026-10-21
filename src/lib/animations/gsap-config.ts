import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Global GSAP configuration for optimal performance
gsap.config({
	force3D: true,
	nullTargetWarn: false,
});

// Default animation settings inspired by luxury automotive interfaces
export const ANIMATION_CONFIG = {
	duration: {
		instant: 0.1,
		fast: 0.3,
		normal: 0.6,
		slow: 1.2,
		cinematic: 2.0,
	},
	easing: {
		// Koenigsegg-inspired precision easing
		power: "power2.out",
		back: "back.out(1.7)",
		elastic: "elastic.out(1, 0.3)",
		expo: "expo.out",
		circ: "circ.out",
		// Custom automotive-inspired easing
		automotive: "cubic-bezier(0.4, 0, 0.2, 1)",
		premium: "cubic-bezier(0.34, 1.56, 0.64, 1)",
	},
	stagger: {
		tight: 0.05,
		fast: 0.1,
		normal: 0.15,
		slow: 0.3,
	},
} as const;

// ScrollTrigger defaults optimized for luxury experience
export const SCROLL_TRIGGER_DEFAULTS = {
	start: "top 80%",
	end: "bottom 20%",
	toggleActions: "play none none reverse",
	markers: process.env.NODE_ENV === "development",
	anticipatePin: 1,
} as const;

// Performance monitoring for animations
export class AnimationPerformanceMonitor {
	private frameCount = 0;
	private lastTime = performance.now();
	private fps = 60;

	startMonitoring() {
		const measureFPS = () => {
			this.frameCount++;
			const currentTime = performance.now();

			if (currentTime >= this.lastTime + 1000) {
				this.fps = Math.round(
					(this.frameCount * 1000) / (currentTime - this.lastTime)
				);
				this.frameCount = 0;
				this.lastTime = currentTime;

				// Auto-reduce quality if performance drops
				if (this.fps < 55 && process.env.NODE_ENV === "production") {
					document.documentElement.classList.add("reduce-motion");
				}
			}

			requestAnimationFrame(measureFPS);
		};

		requestAnimationFrame(measureFPS);
	}

	getFPS(): number {
		return this.fps;
	}
}

// Initialize performance monitoring
export const performanceMonitor = new AnimationPerformanceMonitor();

// Auto-start monitoring in production
if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
	performanceMonitor.startMonitoring();
}
