import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="text-slate-100 body-font">
			<div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-between">
				<a className="flex font-medium items-center md:mb-0">
					<div className="text-black">
						<svg
							className="w-8 h-8"
							version="1.0"
							xmlns="http://www.w3.org/2000/svg"
							width="200.000000pt"
							height="202.000000pt"
							viewBox="0 0 200.000000 202.000000"
							preserveAspectRatio="xMidYMid meet">
							{" "}
							<g
								transform="translate(0.000000,202.000000) scale(0.100000,-0.100000)"
								fill="#4f46e5"
								stroke="none">
								{" "}
								<path d="M889 1857 c-155 -95 -453 -277 -540 -330 -153 -94 -219 -178 -219 -282 l0 -51 82 -50 c45 -27 100 -60 122 -73 63 -36 212 -126 301 -180 149 -91 300 -179 337 -197 l37 -17 83 50 c46 28 106 63 133 78 28 15 56 32 63 38 16 13 16 65 -1 82 -7 7 -112 72 -233 145 -257 155 -287 176 -308 212 -40 67 -8 112 140 197 58 34 107 61 109 61 2 0 104 -61 227 -135 123 -74 230 -135 239 -135 19 0 291 171 296 186 2 6 -56 47 -129 91 -73 43 -215 128 -315 189 -266 159 -307 184 -314 184 -4 0 -53 -29 -110 -63z"></path>{" "}
								<path d="M935 1404 c-74 -39 -92 -59 -87 -95 5 -33 10 -37 172 -132 212 -123 364 -217 371 -228 9 -16 -1 -88 -17 -120 -18 -37 -72 -81 -156 -130 -40 -23 -101 -59 -135 -80 -34 -22 -68 -39 -74 -39 -11 0 -98 51 -284 167 -44 27 -152 94 -240 148 -88 54 -199 122 -246 151 -47 30 -91 54 -98 54 -7 0 -11 -30 -11 -93 0 -109 -4 -103 115 -169 44 -25 118 -69 165 -98 47 -29 110 -67 140 -85 30 -17 140 -82 243 -144 151 -90 194 -112 215 -108 15 3 69 31 120 61 51 31 96 56 99 56 3 0 20 11 37 23 17 13 81 52 141 86 61 35 146 85 190 112 44 27 128 76 188 110 l107 62 0 151 0 151 -31 18 c-41 23 -59 22 -105 -10 -21 -14 -64 -40 -94 -56 -30 -16 -62 -36 -71 -43 -8 -8 -22 -14 -29 -14 -12 0 -371 209 -492 286 -55 35 -77 37 -133 8z"></path>{" "}
								<path d="M1849 811 c-13 -10 -46 -30 -74 -46 -27 -15 -93 -53 -145 -85 -383 -230 -620 -370 -631 -370 -11 0 -143 77 -626 367 -122 73 -227 133 -233 133 -6 0 -10 -40 -10 -110 0 -129 -28 -99 230 -250 102 -60 199 -118 215 -128 154 -97 410 -242 428 -242 13 0 55 20 94 44 39 24 75 45 80 47 4 2 60 35 123 73 63 38 140 84 170 101 30 18 116 69 190 115 74 46 156 95 182 109 l48 26 0 112 c0 61 -4 114 -9 117 -5 3 -19 -3 -32 -13z"></path>{" "}
							</g>{" "}
						</svg>
					</div>
					<h1 className="hidden lg:block ml-3 text-2xl cursor-default">
						RCC ACM
					</h1>
				</a>
				<div className="flex flex-wrap items-center">
					<nav className="md:ml-auto flex flex-wrap items-center justify-center">
						<Link href="/">
							<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
								Home
							</span>
						</Link>
						<Link href="/about">
							<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
								About
							</span>
						</Link>
						<Link href="/contact">
							<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
								Contact
							</span>
						</Link>
					</nav>
					<Link href="/projects">
						<button className="inline-flex items-center border-orange-600 border-2 bg-white text-slate-900 font-semibold py-1 px-3 focus:outline-none hover:bg-orange-600 transform transition-transform hover:scale-110 hover:text-white rounded-lg text-base">
							Projects
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
