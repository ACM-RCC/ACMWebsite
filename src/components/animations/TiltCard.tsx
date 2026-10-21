"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface TiltCardProps {
	children: React.ReactNode;
	className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const glowRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const card = cardRef.current;
			const content = contentRef.current;
			const glow = glowRef.current;

			if (!card || !content || !glow) return;

			const handleMouseMove = (e: MouseEvent) => {
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				const centerX = rect.width / 2;
				const centerY = rect.height / 2;

				const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
				const rotateY = ((x - centerX) / centerX) * 10;

				gsap.to(content, {
					rotateX: rotateX,
					rotateY: rotateY,
					duration: 0.5,
					ease: "power2.out",
					transformPerspective: 1000,
				});

				gsap.to(glow, {
					x: x,
					y: y,
					opacity: 0.4,
					duration: 0.2,
				});
			};

			const handleMouseLeave = () => {
				gsap.to(content, {
					rotateX: 0,
					rotateY: 0,
					duration: 0.5,
					ease: "power2.out",
				});
				gsap.to(glow, {
					opacity: 0,
					duration: 0.5,
				});
			};

			card.addEventListener("mousemove", handleMouseMove);
			card.addEventListener("mouseleave", handleMouseLeave);

			return () => {
				card.removeEventListener("mousemove", handleMouseMove);
				card.removeEventListener("mouseleave", handleMouseLeave);
			};
		},
		{ scope: cardRef }
	);

	return (
		<div ref={cardRef} className={`relative overflow-hidden ${className}`}>
			<div ref={contentRef} className="relative z-10 w-full h-full">
				{children}
			</div>
			{/* Glow Effect */}
			<div
				ref={glowRef}
				className="absolute w-64 h-64 bg-white rounded-full blur-[80px] pointer-events-none opacity-0 z-0 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay"
			/>
		</div>
	);
}
