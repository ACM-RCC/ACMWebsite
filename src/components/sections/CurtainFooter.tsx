"use client";

import { Instagram, MessageCircle } from "lucide-react";

export function CurtainFooter() {
	return (
		<div
			className="relative h-[80vh]"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
			<div className="fixed bottom-0 h-[80vh] w-full bg-racing-orange flex flex-col items-center justify-center p-8">
				<div className="text-center max-w-4xl mx-auto">
					<h2 className="text-[12vw] font-black text-black leading-none mb-8">
						LET'S BUILD
					</h2>
					
					<div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
						<a
							href="https://discord.gg/fM2HbsJyBG"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 bg-black text-white rounded-full text-xl font-bold hover:scale-105 transition-transform flex items-center gap-3">
							<MessageCircle />
							Join Discord
						</a>
						<a
							href="https://www.instagram.com/rcc.acm/"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 bg-white text-black rounded-full text-xl font-bold hover:scale-105 transition-transform flex items-center gap-3">
							<Instagram />
							Follow Us
						</a>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-black/60 font-medium text-sm md:text-base">
						<div>
							<h4 className="text-black font-bold mb-2">Meeting</h4>
							<p>Thursdays 12:50 PM</p>
							<p>A-210 Simulation Lab</p>
						</div>
						<div>
							<h4 className="text-black font-bold mb-2">Contact</h4>
							<p>acm.rcc@gmail.com</p>
						</div>
						<div>
							<h4 className="text-black font-bold mb-2">Socials</h4>
							<p>Instagram</p>
							<p>Discord</p>
							<p>LinkedIn</p>
						</div>
						<div>
							<h4 className="text-black font-bold mb-2">Legal</h4>
							<p>© 2025 RCC ACM</p>
							<p>Student Chapter</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
