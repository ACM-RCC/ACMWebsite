import { useEffect, useState } from "react";

interface MousePosition {
	x: number;
	y: number;
	isMoving: boolean;
}

export function useMousePosition(): MousePosition {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: 0,
		y: 0,
		isMoving: false,
	});

	useEffect(() => {
		if (typeof window === "undefined") return;

		let moveTimeout: NodeJS.Timeout;
		let ticking = false;

		const updateMousePosition = (e: MouseEvent) => {
			if (!ticking) {
				requestAnimationFrame(() => {
					setMousePosition((prev) => ({
						...prev,
						x: e.clientX,
						y: e.clientY,
						isMoving: true,
					}));

					// Clear moving state after delay
					clearTimeout(moveTimeout);
					moveTimeout = setTimeout(() => {
						setMousePosition((prev) => ({ ...prev, isMoving: false }));
					}, 100);

					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("mousemove", updateMousePosition, {
			passive: true,
		});

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
			clearTimeout(moveTimeout);
		};
	}, []);

	return mousePosition;
}
