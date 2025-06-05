import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<header className=" bg-black text-slate-100 body-font">
			<div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-between">
				<a className="flex font-medium items-center md:mb-0">
					<Image
						className="transform transition-transform hover:scale-110 hover:animate-spin cursor-pointer"
						src="/smiley.png"
						alt="ACM temp logo"
						width={50}
						height={50}
						priority
					/>
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
						<Link href="/">
							<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
								Members
							</span>
						</Link>
					</nav>
					<Link href="/projects">
						<button className="inline-flex items-center  bg-white text-slate-900 font-semibold py-1 px-3 focus:outline-none hover:bg-orange-600 transform transition-transform hover:scale-110 hover:text-white rounded-lg text-base">
							Projects
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
