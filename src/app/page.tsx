import { Header } from "@/components/layout/header";
import {
	BookOpen,
	Calendar,
	Code,
	Instagram,
	MessageCircle,
	Users,
} from "lucide-react";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Header />

			{/* Main content with proper header clearance */}
			<main className="pt-16">
				{/* Hero Section */}
				<section className="section pt-8 md:pt-12 pb-16">
					<div className="container">
						<div className="text-center">
							<div className="mb-8">
								<div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--pastel-blue)] to-[var(--pastel-lavender)] text-neutral-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
									<span>Riverside City College</span>
								</div>

								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-8 leading-tight">
									Welcome to{" "}
									<span className="bg-gradient-to-r from-[var(--pastel-blue)] to-[var(--pastel-lavender)] bg-clip-text text-transparent">
										RCC ACM
									</span>
								</h1>

								<p className="text-xl text-neutral-600 mb-8 leading-relaxed">
									Connect with fellow computer science students and tech
									enthusiasts, attend workshops, and build your future in tech.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="section bg-neutral-50">
					<div className="container">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
								Why Join RCC ACM?
							</h2>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{[
								{
									icon: Users,
									title: "Community",
									description:
										"Connect with like-minded students and make friends",
									color: "var(--pastel-blue)",
								},
								{
									icon: Code,
									title: "Learning",
									description:
										"Attend workshops, coding sessions, and tech talks",
									color: "var(--pastel-mint)",
								},
								{
									icon: Calendar,
									title: "Events",
									description:
										"Participate in hackathons, competitions, and networking events",
									color: "var(--pastel-peach)",
								},
								{
									icon: BookOpen,
									title: "Resources",
									description:
										"Access study materials, career guidance, and mentorship",
									color: "var(--pastel-lavender)",
								},
							].map((feature) => (
								<div key={feature.title} className="card text-center group">
									<div
										className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
										style={{ backgroundColor: feature.color }}>
										<feature.icon className="w-8 h-8 text-neutral-700" />
									</div>
									<h3 className="text-xl font-semibold text-neutral-800 mb-3">
										{feature.title}
									</h3>
									<p className="text-neutral-600">{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="section bg-neutral-100">
					<div className="container">
						<div className="text-center max-w-4xl mx-auto">
							<p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
								Connect with us and become part of our growing community. We
								welcome students of all skill levels and backgrounds.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
								<a
									href="https://discord.gg/h8A9AkGF"
									className="btn btn-primary">
									<MessageCircle className="w-5 h-5 mr-2" />
									Join Discord
								</a>
								<a
									href="https://www.instagram.com/rcc.acm/"
									className="btn btn-secondary">
									<Instagram className="w-5 h-5 mr-2" />
									Follow Us
								</a>
							</div>

							<div className="grid sm:grid-cols-2 gap-6 md:gap-8 text-center">
								<div className="p-4">
									<h3 className="text-lg md:text-xl font-semibold text-neutral-800 mb-2">
										Meetings
									</h3>
									<p className="text-neutral-700">
										Every Thursday at 12:50 - 1:50 PM
									</p>
								</div>
								<div className="p-4">
									<h3 className="text-lg md:text-xl font-semibold text-neutral-800 mb-2">
										Location
									</h3>
									<p className="text-neutral-700">A-210 Simulation Lab</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
