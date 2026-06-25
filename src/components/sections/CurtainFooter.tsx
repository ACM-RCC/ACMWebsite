"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";

const DISCORD = "https://discord.gg/fM2HbsJyBG";
const INSTAGRAM = "https://www.instagram.com/rcc.acm/";

export function CurtainFooter() {
	const year = new Date().getFullYear();

	return (
		<div
			className="relative h-[80vh]"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
			<div className="fixed bottom-0 flex h-[80vh] w-full flex-col bg-accent px-6 py-10 text-black">
				{/* Primary moment: build + a subtle nudge to Discord */}
				<div className="flex flex-1 flex-col items-center justify-center text-center">
					<h2
						className="font-black uppercase leading-[0.85] tracking-tighter"
						style={{ fontSize: "clamp(3rem, 12vw, 12rem)" }}>
						Let&apos;s build
					</h2>

					<p
						className="mt-8 max-w-md font-medium text-black/70"
						style={{ fontSize: "var(--step-1)" }}>
						The club lives on Discord. Come build with us.
					</p>

					<a
						href={DISCORD}
						target="_blank"
						rel="noopener noreferrer"
						className="group mt-7 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-bold text-white transition-transform hover:scale-105"
						style={{ fontSize: "var(--step-1)" }}>
						<MessageCircle className="h-5 w-5" />
						Join the Discord
						<ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</a>
				</div>

				{/* Baseline: quiet links + dynamic year, no email */}
				<div
					className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 border-t border-black/15 pt-6 text-black/60 sm:flex-row"
					style={{ fontSize: "var(--step--1)" }}>
					<div className="flex items-center gap-6">
						<a
							href={INSTAGRAM}
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium transition-colors hover:text-black">
							Instagram
						</a>
						<a
							href={DISCORD}
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium transition-colors hover:text-black">
							Discord
						</a>
					</div>
					<p>© {year} RCC ACM · Student Chapter</p>
				</div>
			</div>
		</div>
	);
}
