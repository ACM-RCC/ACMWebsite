"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function VideoBackground() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!videoRef.current || !containerRef.current) return;

		// Initial state
		gsap.set(containerRef.current, {
			scale: 1,
			filter: "blur(0px)",
			opacity: 1,
		});
	}, []);

	return (
		<div
			id="video-background"
			ref={containerRef}
			className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
			style={{ zIndex: 0 }}>
			<div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay */}
			<video
				ref={videoRef}
				autoPlay
				muted
				loop
				playsInline
				className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover">
				<source src="/hero-video.mp4" type="video/mp4" />
			</video>
		</div>
	);
}
