import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"pastel-blue": "#a8ceec",
				"pastel-lavender": "#c9b8dd",
				"pastel-mint": "#9fdfb8",
				"pastel-peach": "#f5c895",
				"pastel-rose": "#f0b8b8",
				"pastel-sage": "#bcc99a",
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				mono: ["JetBrains Mono", "Fira Code", "monospace"],
			},
			animation: {
				"fade-in-up": "fadeInUp 0.6s ease-out",
			},
			keyframes: {
				fadeInUp: {
					from: {
						opacity: "0",
						transform: "translateY(30px)",
					},
					to: {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
		},
	},
	plugins: [],
	darkMode: "media",
} satisfies Config;

export default config;
