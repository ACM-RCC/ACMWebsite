"use client";

import { useRef, useState } from "react";

interface HackerTextProps {
	text: string;
	className?: string;
}

export function HackerText({ text, className = "" }: HackerTextProps) {
	const [displayText, setDisplayText] = useState(text);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";

	const animate = () => {
		let iteration = 0;

		if (intervalRef.current) clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			setDisplayText((prev) =>
				text
					.split("")
					.map((letter, index) => {
						if (index < iteration) {
							return text[index];
						}
						return letters[Math.floor(Math.random() * letters.length)];
					})
					.join("")
			);

			if (iteration >= text.length) {
				if (intervalRef.current) clearInterval(intervalRef.current);
			}

			iteration += 1 / 3;
		}, 30);
	};

	return (
		<span
			className={`font-mono ${className}`}
			onMouseEnter={animate}
			onMouseLeave={() => setDisplayText(text)} // Optional: reset on leave
			onClick={animate} // Also trigger on click
		>
			{displayText}
		</span>
	);
}
