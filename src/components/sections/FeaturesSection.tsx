"use client";

// import { useFeatureModal } from "@/components/ui/FeatureModalProvider";
import { ANIMATION_CONFIG } from "@/lib/animations/gsap-config";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BookOpen, Calendar, Code, Users } from "lucide-react";
import { useEffect, useRef } from "react";

interface FeatureCardProps {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	description: string;
	detailedDescription: string;
	benefits: string[];
	activities: string[];
	index: number;
}

function FeatureCard({
	icon: Icon,
	title,
	description,
	detailedDescription,
	benefits,
	activities,
	index,
}: FeatureCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	// const { openModal } = useFeatureModal();

	useEffect(() => {
		const card = cardRef.current;
		if (!card) return;

		// Hover animation with depth
		const handleMouseEnter = () => {
			gsap.to(card, {
				y: -12,
				rotationX: 5,
				rotationY: 2,
				scale: 1.02,
				duration: ANIMATION_CONFIG.duration.fast,
				ease: ANIMATION_CONFIG.easing.power,
			});

			// Icon animation
			gsap.to(card.querySelector(".feature-icon"), {
				scale: 1.1,
				duration: ANIMATION_CONFIG.duration.fast,
				ease: ANIMATION_CONFIG.easing.back,
			});
		};

		const handleMouseLeave = () => {
			gsap.to(card, {
				y: 0,
				rotationX: 0,
				rotationY: 0,
				scale: 1,
				duration: ANIMATION_CONFIG.duration.normal,
				ease: ANIMATION_CONFIG.easing.elastic,
			});

			gsap.to(card.querySelector(".feature-icon"), {
				scale: 1,
				duration: ANIMATION_CONFIG.duration.normal,
				ease: ANIMATION_CONFIG.easing.elastic,
			});
		};

		card.addEventListener("mouseenter", handleMouseEnter);
		card.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			card.removeEventListener("mouseenter", handleMouseEnter);
			card.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	const handleClick = () => {
		// openModal({
		// 	icon: Icon,
		// 	title,
		// 	description,
		// 	detailedDescription,
		// 	benefits,
		// 	activities,
		// });
		console.log("Feature card clicked:", title);
	};

	return (
		<div
			ref={cardRef}
			onClick={handleClick}
			className="text-center group cursor-pointer p-8 md:p-10 lg:p-12 bg-white/8 backdrop-blur-lg rounded-3xl border border-white/15 shadow-lg shadow-black/10 hover:bg-white/12"
			style={{ transition: "none", transformStyle: "preserve-3d" }}>
			<div className="feature-icon w-20 h-20 rounded-2xl bg-white/12 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 border border-white/25 shadow-sm">
				<Icon className="w-10 h-10 text-white drop-shadow-md" />
			</div>
			<h3 className="text-lg md:text-xl font-semibold text-white mb-6 drop-shadow-md">
				{title}
			</h3>
			<p className="text-neutral-200 leading-relaxed mb-8 text-sm md:text-base drop-shadow-sm">
				{description}
			</p>
			<div
				className="opacity-0 group-hover:opacity-100"
				style={{ transition: "none" }}>
				<ArrowRight className="w-5 h-5 mx-auto text-racing-orange drop-shadow-md" />
			</div>
		</div>
	);
}

export function FeaturesSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const section = sectionRef.current;
		const title = titleRef.current;
		const grid = gridRef.current;

		if (!section || !title || !grid) return;

		// Title animation
		gsap.from(title, {
			y: 50,
			opacity: 0,
			duration: ANIMATION_CONFIG.duration.normal,
			ease: ANIMATION_CONFIG.easing.power,
			scrollTrigger: {
				trigger: title,
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
		});

		// Stagger animation for cards
		gsap.from(grid.children, {
			y: 100,
			opacity: 0,
			duration: ANIMATION_CONFIG.duration.normal,
			stagger: ANIMATION_CONFIG.stagger.normal,
			ease: ANIMATION_CONFIG.easing.power,
			scrollTrigger: {
				trigger: grid,
				start: "top 70%",
				toggleActions: "play none none reverse",
			},
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	const features = [
		{
			icon: Users,
			title: "Community",
			description:
				"Connect with like-minded students and make lifelong friends in the tech industry",
			detailedDescription:
				"Join a vibrant community of passionate computer science students who share your interests and ambitions. Our community is built on collaboration, mutual support, and the shared goal of advancing in technology careers.",
			benefits: [
				"Build lasting professional relationships",
				"Find study partners and project collaborators",
				"Access to alumni network and industry connections",
				"Participate in peer mentoring programs",
				"Join study groups for challenging courses",
			],
			activities: [
				"Weekly community meetups and social events",
				"Study sessions and group projects",
				"Alumni networking events",
				"Peer mentoring and tutoring programs",
				"Online community discussions and forums",
			],
		},
		{
			icon: Code,
			title: "Learning",
			description:
				"Attend workshops, coding sessions, and cutting-edge tech talks from industry experts",
			detailedDescription:
				"Accelerate your learning journey with hands-on workshops, coding challenges, and insights from industry professionals. Our learning programs are designed to bridge the gap between academic knowledge and real-world applications.",
			benefits: [
				"Hands-on coding workshops and tutorials",
				"Access to industry expert presentations",
				"Learn cutting-edge technologies and frameworks",
				"Practice with real-world coding challenges",
				"Develop portfolio-worthy projects",
			],
			activities: [
				"Weekly coding workshops and tutorials",
				"Guest speaker sessions from tech companies",
				"Coding bootcamps and intensive sessions",
				"Project-based learning opportunities",
				"Technology deep-dives and research presentations",
			],
		},
		{
			icon: Calendar,
			title: "Events",
			description:
				"Participate in hackathons, competitions, and networking events throughout the year",
			detailedDescription:
				"Engage in exciting events that challenge your skills and expand your network. From hackathons to career fairs, our events provide opportunities to showcase your talents and connect with potential employers.",
			benefits: [
				"Compete in hackathons and coding competitions",
				"Attend career fairs and networking events",
				"Showcase your projects to industry professionals",
				"Win prizes and recognition for your work",
				"Build your professional portfolio",
			],
			activities: [
				"Annual hackathons and coding competitions",
				"Career fairs with top tech companies",
				"Project showcase events",
				"Networking mixers and social events",
				"Industry panel discussions and Q&A sessions",
			],
		},
		{
			icon: BookOpen,
			title: "Resources",
			description:
				"Access study materials, career guidance, and mentorship opportunities for success",
			detailedDescription:
				"Get access to comprehensive resources designed to support your academic and career journey. From study materials to mentorship programs, we provide the tools you need to succeed in computer science.",
			benefits: [
				"Access to exclusive study materials and resources",
				"One-on-one mentorship from industry professionals",
				"Career guidance and internship opportunities",
				"Scholarship and funding information",
				"Academic support and tutoring services",
			],
			activities: [
				"Resource library with textbooks and online materials",
				"Mentorship matching with industry professionals",
				"Career counseling and resume workshops",
				"Internship and job placement assistance",
				"Academic tutoring and study groups",
			],
		},
	];

	return (
		<section ref={sectionRef} className="py-20 md:py-28 lg:py-32">
			<div className="container">
				<div className="text-center mb-16 md:mb-20 lg:mb-24">
					<h2
						ref={titleRef}
						className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-10 drop-shadow-lg">
						Why Join <span className="text-racing-orange">RCC ACM</span>?
					</h2>
					<p className="text-xl md:text-2xl text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
						Discover the opportunities waiting for you in our vibrant computer
						science community. Build your skills, expand your network, and shape
						your future in technology.
					</p>
				</div>

				<div
					ref={gridRef}
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
					{features.map((feature, index) => (
						<FeatureCard
							key={feature.title}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
							detailedDescription={feature.detailedDescription}
							benefits={feature.benefits}
							activities={feature.activities}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
