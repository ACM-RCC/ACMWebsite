import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/UI/Navbar";
import Footer from "@/components/UI/Footer";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
