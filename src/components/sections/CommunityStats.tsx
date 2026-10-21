"use client";

export function CommunityStats() {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
			{[
				{ label: "Active Members", value: "50+" },
				{ label: "Weekly Meetings", value: "1" },
				{ label: "Projects", value: "12+" },
				{ label: "Years Active", value: "3+" },
			].map((stat) => (
				<div
					key={stat.label}
					className="text-center p-6 md:p-8 bg-white/8 backdrop-blur-lg rounded-3xl border border-white/15 shadow-lg shadow-black/10">
					<div className="text-2xl md:text-3xl font-bold text-racing-orange mb-3 drop-shadow-md">
						{stat.value}
					</div>
					<div className="text-neutral-200 text-xs md:text-sm drop-shadow-sm font-medium">
						{stat.label}
					</div>
				</div>
			))}
		</div>
	);
}
