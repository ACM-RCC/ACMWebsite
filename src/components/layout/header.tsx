"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
	BookOpen,
	Calendar,
	Code,
	Mail,
	Menu,
	Moon,
	Sun,
	Users,
	X,
} from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

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
		{ name: "Contact", href: "#contact", icon: Mail },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-neutral-200">
			<div className="container">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<motion.div
						className="flex items-center space-x-3"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}>
						<div className="w-10 h-10 bg-gradient-to-br from-[var(--pastel-blue)] to-[var(--pastel-lavender)] rounded-xl flex items-center justify-center shadow-sm">
							<Code className="w-6 h-6 text-neutral-700" />
						</div>
						<div className="flex flex-col">
							<span className="text-lg font-bold text-neutral-800">
								RCC ACM
							</span>
							<span className="text-xs text-neutral-500 -mt-1">
								Association for Computing Machinery
							</span>
						</div>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						{navigation.map((item, index) => (
							<motion.a
								key={item.name}
								href={item.href}
								className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 flex items-center space-x-2 group"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}>
								<item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
								<span className="font-medium">{item.name}</span>
							</motion.a>
						))}
					</nav>

					{/* Theme Toggle */}
					<motion.button
						onClick={toggleTheme}
						className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 transition-all duration-200 mr-4"
						aria-label="Toggle theme"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						whileTap={{ scale: 0.95 }}>
						{isDarkMode ? (
							<Sun className="w-5 h-5" />
						) : (
							<Moon className="w-5 h-5" />
						)}
					</motion.button>

					{/* Mobile menu button */}
					<motion.button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="md:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 transition-all duration-200"
						aria-label="Toggle mobile menu"
						whileTap={{ scale: 0.95 }}>
						{isMobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</motion.button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="md:hidden bg-background/95 backdrop-blur-md border-t border-neutral-200">
						<div className="px-6 py-4 space-y-2">
							{navigation.map((item, index) => (
								<motion.a
									key={item.name}
									href={item.href}
									className="flex items-center space-x-3 px-4 py-3 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 rounded-lg transition-all duration-200"
									onClick={() => setIsMobileMenuOpen(false)}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}>
									<item.icon className="w-5 h-5" />
									<span className="font-medium">{item.name}</span>
								</motion.a>
							))}
							{/* Mobile Theme Toggle */}
							<motion.button
								onClick={toggleTheme}
								className="flex items-center space-x-3 px-4 py-3 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 rounded-lg transition-all duration-200 mx-4 mt-2"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.4 }}>
								{isDarkMode ? (
									<Sun className="w-5 h-5" />
								) : (
									<Moon className="w-5 h-5" />
								)}
								<span className="font-medium">
									{isDarkMode ? "Light Mode" : "Dark Mode"}
								</span>
							</motion.button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
