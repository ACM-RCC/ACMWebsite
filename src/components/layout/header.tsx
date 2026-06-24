"use client";

import { useEventModal } from "@/components/ui/EventModalProvider";
import { useClubMeeting } from "@/hooks/useClubMeeting";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Calendar, Code, Home, Menu, MessageCircle, X } from "lucide-react";
import { useRef, useState } from "react";

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const headerRef = useRef<HTMLDivElement>(null);
	const { openModal } = useEventModal();
	const { status } = useClubMeeting();

	// GSAP Animation for "Dynamic Island" reveal
	useGSAP(() => {
		gsap.from(headerRef.current, {
			y: -100,
			opacity: 0,
			duration: 1,
			ease: "power4.out",
			delay: 0.5,
		});
	});

	const navItems = [
		{ name: "Home", icon: Home, href: "#" },
		{ name: "Events", icon: Calendar, href: "#events" },
		{ name: "Join", icon: MessageCircle, href: "https://discord.gg/fM2HbsJyBG" },
	];

	return (
		<>
			<header
				ref={headerRef}
				className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-2xl">
				<div className="relative bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50 px-2 py-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
					<div className="flex items-center justify-between pl-4 pr-2">
						{/* Logo Area */}
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 bg-racing-orange rounded-full flex items-center justify-center text-black">
								<Code className="w-4 h-4" />
							</div>
							<span className="font-bold text-white hidden sm:block">
								RCC ACM
							</span>
						</div>

						{/* Desktop Nav */}
						<nav className="hidden md:flex items-center gap-1">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="px-4 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all">
									{item.name}
								</a>
							))}
						</nav>

						{/* Actions */}
						<div className="flex items-center gap-2">
							{/* Live Indicator / Timer Toggle */}
							<button
								onClick={openModal}
								className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 transition-colors ${
									status === "in_progress"
										? "bg-green-500/20 text-green-400 border border-green-500/30"
										: "bg-white/5 text-neutral-400 hover:bg-white/10"
								}`}>
								{status === "in_progress" && (
									<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
								)}
								<span>{status === "in_progress" ? "LIVE" : "NEXT"}</span>
							</button>

							{/* Mobile Menu Toggle */}
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-colors">
								{isMobileMenuOpen ? (
									<X className="w-4 h-4" />
								) : (
									<Menu className="w-4 h-4" />
								)}
							</button>
						</div>
					</div>

					{/* Mobile Menu Dropdown (Inside the capsule logic) */}
					<div
						className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
							isMobileMenuOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
						}`}>
						<div className="flex flex-col gap-2 pb-4 px-2">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className="flex items-center gap-3 px-4 py-3 rounded-2xl text-neutral-300 hover:text-white hover:bg-white/5 transition-colors">
									<item.icon className="w-5 h-5" />
									<span className="font-medium">{item.name}</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
