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

const SITE_URL = "https://rccacm.com";
const TITLE = "RCC ACM - Computer Science Community at Riverside City College";
const DESCRIPTION =
	"RCC ACM is the computer science community at Riverside City College. Build projects, compete in hackathons, learn the tools the industry uses, and connect with fellow CS students. Meets Thursdays in A-210.";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: TITLE,
		template: "%s - RCC ACM",
	},
	description: DESCRIPTION,
	applicationName: "RCC ACM",
	keywords: [
		"RCC ACM",
		"Riverside City College",
		"computer science",
		"ACM",
		"coding club",
		"hackathons",
		"programming",
		"CS community",
	],
	authors: [{ name: "RCC ACM" }],
	creator: "RCC ACM",
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		url: SITE_URL,
		siteName: "RCC ACM",
		title: TITLE,
		description: DESCRIPTION,
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: TITLE,
		description: DESCRIPTION,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true },
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
