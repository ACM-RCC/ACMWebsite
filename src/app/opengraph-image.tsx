import { ImageResponse } from "next/og";

export const alt =
	"RCC ACM - Computer Science Community at Riverside City College";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded share card. Solid colors only (no gradients / custom fonts) so it
// renders reliably at build time.
export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					background: "#0a0a0a",
					borderLeft: "24px solid #ff4d00",
					padding: "0 96px",
				}}>
				<div
					style={{
						display: "flex",
						color: "#ff4d00",
						fontSize: 30,
						letterSpacing: 8,
						textTransform: "uppercase",
					}}>
					Riverside City College
				</div>
				<div
					style={{
						display: "flex",
						color: "#ffffff",
						fontSize: 190,
						letterSpacing: -6,
						marginTop: 12,
					}}>
					RCC ACM
				</div>
				<div
					style={{
						display: "flex",
						color: "#a3a3a3",
						fontSize: 42,
						marginTop: 28,
					}}>
					Build. Compete. Learn. Connect.
				</div>
			</div>
		),
		{ ...size }
	);
}
