"use client";

import { useVideoParallax } from "@/hooks/useVideoParallax";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
	src: string;
	className?: string;
	overlayOpacity?: number;
	brightness?: number;
	contrast?: number;
	enableParallax?: boolean;
}

export function VideoBackground({
	src,
	className = "",
	overlayOpacity = 0.4,
	brightness = 0.4,
	contrast = 1.2,
	enableParallax = true,
}: VideoBackgroundProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const loadingRef = useRef<HTMLDivElement>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [needsUserInteraction, setNeedsUserInteraction] = useState(false);

	const parallax = useVideoParallax();

	// GSAP animation for loading state
	useEffect(() => {
		if (!isLoading && loadingRef.current) {
			gsap.to(loadingRef.current, {
				opacity: 0,
				duration: 0.5,
				ease: "power2.out",
				onComplete: () => {
					if (loadingRef.current) {
						loadingRef.current.style.display = "none";
					}
				},
			});
		}
	}, [isLoading]);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const handleLoadStart = () => {
			console.log("Video loading started");
			setIsLoading(true);
			setHasError(false);
		};

		const handleCanPlay = () => {
			console.log("Video can play, attempting to start playback");
			setIsLoading(false);
			setHasError(false);
			// Attempt to play the video
			video.play().catch((error) => {
				console.warn("Video autoplay failed:", error);
				if (error.name === "NotAllowedError") {
					setNeedsUserInteraction(true);
				} else {
					setHasError(true);
				}
			});
		};

		const handlePlay = () => {
			console.log("Video is now playing");
			setIsPlaying(true);
		};

		const handleError = (error: Event) => {
			console.error("Video error:", error);
			setIsLoading(false);
			setHasError(true);
		};

		const handleLoadedData = () => {
			console.log("Video data loaded");
		};

		const handleLoadedMetadata = () => {
			console.log("Video metadata loaded");
		};

		// Add event listeners
		video.addEventListener("loadstart", handleLoadStart);
		video.addEventListener("canplay", handleCanPlay);
		video.addEventListener("play", handlePlay);
		video.addEventListener("error", handleError);
		video.addEventListener("loadeddata", handleLoadedData);
		video.addEventListener("loadedmetadata", handleLoadedMetadata);

		// Force load the video
		video.load();

		return () => {
			video.removeEventListener("loadstart", handleLoadStart);
			video.removeEventListener("canplay", handleCanPlay);
			video.removeEventListener("play", handlePlay);
			video.removeEventListener("error", handleError);
			video.removeEventListener("loadeddata", handleLoadedData);
			video.removeEventListener("loadedmetadata", handleLoadedMetadata);
		};
	}, [src]);

	const handleManualPlay = async () => {
		const video = videoRef.current;
		if (video) {
			try {
				await video.play();
				setNeedsUserInteraction(false);
			} catch (error) {
				console.error("Manual play failed:", error);
				setHasError(true);
			}
		}
	};

	return (
		<div
			className={`fixed inset-0 w-full h-full ${className}`}
			style={{
				transform: enableParallax
					? `scale(${parallax.scale}) translateY(${parallax.translateY}px)`
					: undefined,
				borderRadius: enableParallax ? `${parallax.borderRadius}px` : undefined,
				opacity: enableParallax ? parallax.opacity : 1,
				transformOrigin: "center center",
				transition: "none", // Smooth scroll-driven animations
				overflow: "hidden",
				zIndex: 5, // Above backgrounds, below text content
			}}>
			{/* Loading State */}
			{isLoading && (
				<div
					ref={loadingRef}
					className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center z-10">
					<div className="text-center">
						<div className="loading-spinner mx-auto mb-4"></div>
						<p className="text-neutral-400 text-sm">Loading video...</p>
					</div>
				</div>
			)}

			{/* Error State / Fallback */}
			{hasError && (
				<div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
					<div className="absolute inset-0 opacity-10">
						<div
							className="absolute inset-0"
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30l-15-15h30z'/%3E%3C/g%3E%3C/svg%3E")`,
							}}
						/>
					</div>
				</div>
			)}

			{/* Video Element */}
			<video
				ref={videoRef}
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
				controls={false}
				className="w-full h-full object-cover"
				style={{
					filter: `brightness(${brightness}) contrast(${contrast})`,
					opacity: hasError ? 0 : isPlaying ? 1 : 0.3, // Show at 30% opacity while loading
					transition: "opacity 0.5s ease-in-out",
				}}>
				<source src={src} type="video/mp4" />
				<source src={src} type="video/webm" />
				Your browser does not support the video tag.
			</video>

			{/* Video Overlay for Better Text Readability - Moves with video */}
			<div
				className="absolute inset-0 bg-black pointer-events-none"
				style={{
					opacity: overlayOpacity,
					borderRadius: enableParallax
						? `${parallax.borderRadius}px`
						: undefined,
				}}
			/>

			{/* Manual Play Button */}
			{needsUserInteraction && (
				<div className="absolute inset-0 flex items-center justify-center z-40">
					<button
						onClick={handleManualPlay}
						className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-colors flex items-center gap-2">
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
								clipRule="evenodd"
							/>
						</svg>
						Play Video
					</button>
				</div>
			)}

			{/* Debug Info (remove in production) */}
			<div className="absolute top-4 left-4 bg-black/80 text-white p-2 rounded text-xs z-50">
				<div>Loading: {isLoading ? "Yes" : "No"}</div>
				<div>Error: {hasError ? "Yes" : "No"}</div>
				<div>Playing: {isPlaying ? "Yes" : "No"}</div>
				<div>Needs Interaction: {needsUserInteraction ? "Yes" : "No"}</div>
				<div>Video Opacity: {hasError ? 0 : isPlaying ? 1 : 0.3}</div>
				{enableParallax && (
					<>
						<div>Scale: {parallax.scale.toFixed(2)}</div>
						<div>BorderRadius: {parallax.borderRadius.toFixed(0)}px</div>
						<div>TranslateY: {parallax.translateY.toFixed(0)}px</div>
						<div>NextOffset: {parallax.nextSectionOffset.toFixed(0)}px</div>
						<div>Parallax Opacity: {parallax.opacity.toFixed(2)}</div>
					</>
				)}
			</div>
		</div>
	);
}
