import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { MouseEvent, useState } from "react";

const ResNavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav className="flex md:hidden w-full h-[60px] fixed top-0 left-0 items-center justify-between px-7 md:px-20 z-[100] bg-black">
				<h1 className="font-light tracking-tighter text-xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
					Emmanuel Salvo
				</h1>
				<div onClick={() => handleOpen()} className="w-8 h-8 relative cursor-pointer">
					<span className={`transition-all w-full h-[2px] bg-white absolute ${isOpen ? "rotate-45 top-4" : "top-3"}`}></span>
					<span className={`transition-all w-full h-[2px] bg-white absolute ${isOpen ? "-rotate-45 top-4" : "top-5"}`}></span>
				</div>
				<div
					className={`${
						isOpen ? "h-[100vh]" : "h-0"
					} w-full absolute left-0 top-[60px] bg-gradient-to-b from-black to-gray-900 transition-all overflow-hidden flex items-center justify-center`}
				>
					<ul className="text-white flex flex-col gap-10 -translate-y-10">
						<li>
							<Link href="#top">Home</Link>
						</li>
						<li>
							<Link href="#aboutme">About Me</Link>
						</li>
						<li>
							<Link href="#future">Future</Link>
						</li>
						<li>
							<Link href="#projects">Projects</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default ResNavBar;
