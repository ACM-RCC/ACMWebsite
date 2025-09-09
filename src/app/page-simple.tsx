import { Header } from "@/components/layout/header";
import { motion } from "framer-motion";
import {
	ArrowRight,
	BookOpen,
	Calendar,
	Code,
	Mail,
	Users,
} from "lucide-react";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<section className="section pt-24 pb-16">
				<div className="container">
					<div className="text-center max-w-4xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="mb-8">
							<div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--pastel-blue)] to-[var(--pastel-lavender)] text-neutral-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
								<span>Riverside City College</span>
							</div>

							<h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6 leading-tight">
								Welcome to{" "}
								<span className="bg-gradient-to-r from-[var(--pastel-blue)] to-[var(--pastel-lavender)] bg-clip-text text-transparent">
									RCC ACM
								</span>
							</h1>

							<p className="text-xl text-neutral-600 mb-8 leading-relaxed">
								Join the Association for Computing Machinery chapter at
								Riverside City College. Connect with fellow computer science
								students, attend workshops, and build your future in tech.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<motion.a
									href="#about"
									className="btn btn-primary text-lg px-8 py-4"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}>
									Learn More
									<ArrowRight className="w-5 h-5 ml-2" />
								</motion.a>
								<motion.a
									href="#contact"
									className="btn btn-secondary text-lg px-8 py-4"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}>
									Join Our Club
								</motion.a>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="section bg-neutral-50">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
							Why Join RCC ACM?
						</h2>
						<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
							Discover the benefits of being part of our computer science
							community
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: Users,
								title: "Community",
								description:
									"Connect with like-minded students and build lasting friendships",
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
						].map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="card text-center group">
								<div
									className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
									style={{ backgroundColor: feature.color }}>
									<feature.icon className="w-8 h-8 text-neutral-700" />
								</div>
								<h3 className="text-xl font-semibold text-neutral-800 mb-3">
									{feature.title}
								</h3>
								<p className="text-neutral-600">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="section bg-gradient-to-br from-[var(--pastel-blue)] to-[var(--pastel-lavender)]">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center max-w-3xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
							Ready to Join RCC ACM?
						</h2>
						<p className="text-lg text-neutral-700 mb-8">
							Connect with us and become part of our growing computer science
							community. We welcome students of all skill levels and
							backgrounds.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
							<motion.a
								href="mailto:acm@rcc.edu"
								className="btn btn-primary bg-white text-neutral-800 hover:bg-neutral-100"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								<Mail className="w-5 h-5 mr-2" />
								Email Us
							</motion.a>
							<motion.a
								href="https://discord.gg/rcc-acm"
								className="btn btn-secondary bg-white/20 text-neutral-800 hover:bg-white/30"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								Join Discord
							</motion.a>
						</div>

						<div className="grid md:grid-cols-3 gap-8 text-center">
							<div>
								<h3 className="text-xl font-semibold text-neutral-800 mb-2">
									Meetings
								</h3>
								<p className="text-neutral-700">Every Tuesday at 6:00 PM</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-neutral-800 mb-2">
									Location
								</h3>
								<p className="text-neutral-700">Science Building, Room 101</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-neutral-800 mb-2">
									Membership
								</h3>
								<p className="text-neutral-700">Free for RCC students</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
