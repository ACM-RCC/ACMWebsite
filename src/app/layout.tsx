import { EventModalProvider } from "@/components/ui/EventModalProvider";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "RCC ACM - Association for Computing Machinery",
	description:
		"Join the premier computer science community at Riverside City College. Connect with fellow CS students, attend workshops, and build your future in tech.",
	openGraph: {
		title: "RCC ACM - Computing Excellence",
		description:
			"Connect, learn, and grow with fellow computer science students at Riverside City College.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
				<EventModalProvider>{children}</EventModalProvider>
			</body>
		</html>
	);
}
