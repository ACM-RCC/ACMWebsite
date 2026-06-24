import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	// Pin the workspace root: a stray package-lock.json in a parent directory
	// otherwise makes Turbopack infer the wrong root, which breaks standalone
	// output tracing for the Cloud Run Docker build.
	turbopack: {
		root: __dirname,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
