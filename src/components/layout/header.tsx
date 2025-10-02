"use client";

import { useEventModal } from "@/components/ui/EventModalProvider";
import { useClubMeeting } from "@/hooks/useClubMeeting";
import { gsap } from "gsap";
import {
	BookOpen,
	Calendar,
	Clock,
	Code,
	Menu,
	Moon,
	Sun,
	Users,
	X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const { openModal } = useEventModal();
	const { timeUntilNext: timeLeft, status } = useClubMeeting();

	useEffect(() => {
		// Check system preference on mount
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		setIsDarkMode(prefersDark);

		// Apply theme class to document
		document.documentElement.className = prefersDark
			? "theme-dark"
			: "theme-light";
	}, []);

	const toggleTheme = () => {
		const newMode = !isDarkMode;
		setIsDarkMode(newMode);
		document.documentElement.className = newMode ? "theme-dark" : "theme-light";
	};

	const navigation = [
		{ name: "About", href: "#about", icon: Users },
		{ name: "Events", href: "#events", icon: Calendar },
		{ name: "Resources", href: "#resources", icon: BookOpen },
	];

	// Compact Timer Component for Header
	const HeaderTimer = () => {
		const timerRef = useRef<HTMLButtonElement>(null);

		useEffect(() => {
			const timer = timerRef.current;
			if (!timer) return;

			// GSAP hover animations
			const handleMouseEnter = () => {
				gsap.to(timer, {
					scale: 1.05,
					duration: 0.2,
					ease: "power2.out",
				});
			};

			const handleMouseLeave = () => {
				gsap.to(timer, {
					scale: 1,
					duration: 0.2,
					ease: "power2.out",
				});
			};

			const handleMouseDown = () => {
				gsap.to(timer, {
					scale: 0.98,
					duration: 0.1,
					ease: "power2.out",
				});
			};

			const handleMouseUp = () => {
				gsap.to(timer, {
					scale: 1.05,
					duration: 0.1,
					ease: "power2.out",
				});
			};

			timer.addEventListener("mouseenter", handleMouseEnter);
			timer.addEventListener("mouseleave", handleMouseLeave);
			timer.addEventListener("mousedown", handleMouseDown);
			timer.addEventListener("mouseup", handleMouseUp);

			return () => {
				timer.removeEventListener("mouseenter", handleMouseEnter);
				timer.removeEventListener("mouseleave", handleMouseLeave);
				timer.removeEventListener("mousedown", handleMouseDown);
				timer.removeEventListener("mouseup", handleMouseUp);
			};
		}, []);

		if (status === "in_progress") {
			return (
				<button
					ref={timerRef}
					onClick={openModal}
					className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20 hover:bg-green-500/20 transition-colors cursor-pointer">
					<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
					<span className="text-sm font-medium">Meeting Live</span>
				</button>
			);
		}

		return (
			<button
				ref={timerRef}
				onClick={openModal}
				className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer">
				<Clock className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
				<div className="flex items-center gap-1 text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300">
					<span>{timeLeft.days}d</span>
					<span className="text-neutral-400">:</span>
					<span>{timeLeft.hours.toString().padStart(2, "0")}h</span>
					<span className="text-neutral-400">:</span>
					<span>{timeLeft.minutes.toString().padStart(2, "0")}m</span>
				</div>
			</button>
		);
	};

	return (
		<header
			className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm"
			style={{ zIndex: 100 }}>
			<div className="container">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
							<Code className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
						</div>
						<div className="flex flex-col">
							<span className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
								RCC ACM
							</span>
							<span className="text-xs text-neutral-500 dark:text-neutral-400 -mt-1">
								Association for Computing Machinery
							</span>
						</div>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 flex items-center space-x-2">
								<item.icon className="w-4 h-4" />
								<span className="font-medium">{item.name}</span>
							</a>
						))}
					</nav>

					{/* Timer & Theme Toggle & Mobile Menu */}
					<div className="flex items-center space-x-4">
						{/* Compact Timer */}
						<HeaderTimer />

						{/* Controls */}
						<div className="flex items-center space-x-2">
							{/* Theme Toggle */}
							<button
								onClick={toggleTheme}
								className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
								aria-label="Toggle theme">
								{isDarkMode ? (
									<Sun className="w-5 h-5" />
								) : (
									<Moon className="w-5 h-5" />
								)}
							</button>

							{/* Mobile menu button */}
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="md:hidden p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
								aria-label="Toggle mobile menu">
								{isMobileMenuOpen ? (
									<X className="w-6 h-6" />
								) : (
									<Menu className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-background/95 backdrop-blur-sm">
					<div className="px-6 py-4 space-y-2">
						{/* Mobile Timer */}
						<button
							onClick={openModal}
							className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors text-left">
							{status === "in_progress" ? (
								<div className="flex items-center gap-2 text-green-600 dark:text-green-400">
									<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
									<span className="font-medium">Meeting Live Now</span>
								</div>
							) : (
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<Clock className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
										<span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
											Next Meeting
										</span>
									</div>
									<div className="flex items-center gap-1 text-sm font-mono font-medium text-neutral-600 dark:text-neutral-400">
										<span>{timeLeft.days}d</span>
										<span>:</span>
										<span>{timeLeft.hours.toString().padStart(2, "0")}h</span>
										<span>:</span>
										<span>{timeLeft.minutes.toString().padStart(2, "0")}m</span>
									</div>
								</div>
							)}
						</button>

						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="flex items-center space-x-3 px-4 py-3 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-lg transition-all duration-200"
								onClick={() => setIsMobileMenuOpen(false)}>
								<item.icon className="w-5 h-5" />
								<span className="font-medium">{item.name}</span>
							</a>
						))}
						{/* Mobile Theme Toggle */}
						<button
							onClick={toggleTheme}
							className="flex items-center space-x-3 px-4 py-3 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-lg transition-all duration-200 w-full text-left">
							{isDarkMode ? (
								<Sun className="w-5 h-5" />
							) : (
								<Moon className="w-5 h-5" />
							)}
							<span className="font-medium">
								{isDarkMode ? "Light Mode" : "Dark Mode"}
							</span>
						</button>
					</div>
				</div>
			)}
		</header>
	);
}
