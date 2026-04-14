"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface GalleryItemProps {
	children: React.ReactNode;
	className?: string;
	speed?: number; // Parallax speed multiplier
}

export function GalleryItem({
	children,
	className = "",
	speed = 1,
}: GalleryItemProps) {
	const itemRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const item = itemRef.current;
			if (!item) return;

			// Simple parallax effect based on horizontal scroll
			// We assume this component is inside a container driven by ScrollTrigger
			// This specific animation might need to be hooked up to the parent's progress
			// For now, we'll set up a localized effect or just use this as a wrapper
		},
		{ scope: itemRef }
	);

	return (
		<div ref={itemRef} className={`flex-shrink-0 ${className}`}>
			{children}
		</div>
	);
}
