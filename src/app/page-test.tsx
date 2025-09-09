import { Header } from "@/components/layout/header";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="container mx-auto px-4 py-8">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-neutral-800 mb-4">
						Welcome to RCC ACM
					</h1>
					<p className="text-lg text-neutral-600">
						Join the Association for Computing Machinery chapter at Riverside
						City College.
					</p>
				</div>
			</main>
		</div>
	);
}
