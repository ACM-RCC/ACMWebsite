"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Calendar, Code, Mail, Menu, Users, X } from "lucide-react";
import { useState } from "react";

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navigation = [
		{ name: "About", href: "#about", icon: Users },
		{ name: "Events", href: "#events", icon: Calendar },
		{ name: "Resources", href: "#resources", icon: BookOpen },
		{ name: "Contact", href: "#contact", icon: Mail },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
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
								Computer Science
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

					{/* CTA Button */}
					<motion.a
						href="#contact"
						className="hidden md:inline-flex btn btn-primary"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}>
						Join Us
					</motion.a>

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
						className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200">
						<div className="px-6 py-4 space-y-2">
							{navigation.map((item, index) => (
								<motion.a
									key={item.name}
									href={item.href}
									className="block px-4 py-3 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 rounded-lg transition-all duration-200 flex items-center space-x-3"
									onClick={() => setIsMobileMenuOpen(false)}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}>
									<item.icon className="w-5 h-5" />
									<span className="font-medium">{item.name}</span>
								</motion.a>
							))}
							<motion.a
								href="#contact"
								className="block mt-4 mx-4 btn btn-primary text-center"
								onClick={() => setIsMobileMenuOpen(false)}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.5 }}>
								Join Our Club
							</motion.a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
