"use client";

import { useRef } from "react";

interface FloatingCardProps {
	children: React.ReactNode;
	className?: string;
	depth?: number; // 0 to 1, where 1 is furthest back
	x?: number; // % of container width
	y?: number; // % of container height
}

export function FloatingCard({
	children,
	className = "",
	depth = 0.5,
	x = 50,
	y = 50,
}: FloatingCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);

	// We'll handle the Z-axis movement in the parent for coordinated scroll
	// This component mainly handles the initial positioning and local hover effects

	return (
		<div
			ref={cardRef}
			className={`absolute ${className}`}
			style={{
				left: `${x}%`,
				top: `${y}%`,
				zIndex: Math.floor((1 - depth) * 100), // Closer items on top
			}}
			data-depth={depth} // For GSAP to target
		>
			{children}
		</div>
	);
}
