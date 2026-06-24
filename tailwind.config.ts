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
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				mono: ["JetBrains Mono", "Fira Code", "monospace"],
			},
		},
	},
	plugins: [],
	darkMode: "media",
} satisfies Config;

export default config;
