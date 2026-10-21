"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { gsap } from "gsap";
import { ReactNode, useEffect, useRef } from "react";

interface MagneticButtonProps {
	children: ReactNode;
	strength?: number;
	className?: string;
	onClick?: () => void;
	href?: string;
	disabled?: boolean;
}

export function MagneticButton({
	children,
	strength = 0.3,
	className = "",
	onClick,
	href,
	disabled = false,
}: MagneticButtonProps) {
	const buttonRef = useRef<HTMLElement>(null);
	const { x: mouseX, y: mouseY } = useMousePosition();

	useEffect(() => {
		const button = buttonRef.current;
		if (!button || disabled) return;

		const handleMouseEnter = () => {
			gsap.to(button, {
				scale: 1.02,
				duration: 0.2,
				ease: "power2.out",
			});
		};

		const handleMouseLeave = () => {
			gsap.to(button, {
				x: 0,
				y: 0,
				scale: 1,
				duration: 0.3,
				ease: "power2.out",
			});
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!strength || strength === 0) return; // Disable magnetic effect if strength is 0

			const rect = button.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;

			const deltaX = (e.clientX - centerX) * (strength * 0.3); // Reduced magnetic effect
			const deltaY = (e.clientY - centerY) * (strength * 0.3);

			gsap.to(button, {
				x: deltaX,
				y: deltaY,
				duration: 0.2,
				ease: "power2.out",
			});
		};

		button.addEventListener("mouseenter", handleMouseEnter);
		button.addEventListener("mouseleave", handleMouseLeave);
		button.addEventListener("mousemove", handleMouseMove);

		return () => {
			button.removeEventListener("mouseenter", handleMouseEnter);
			button.removeEventListener("mouseleave", handleMouseLeave);
			button.removeEventListener("mousemove", handleMouseMove);
		};
	}, [strength, disabled]);

	const Component = href ? "a" : "button";

	return (
		<Component
			ref={buttonRef as any}
			href={href}
			target={href ? "_blank" : undefined}
			rel={href ? "noopener noreferrer" : undefined}
			onClick={onClick}
			disabled={disabled}
			className={`inline-block cursor-pointer ${className} ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			}`}>
			{children}
		</Component>
	);
}
