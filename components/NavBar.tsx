import Link from "next/link";
import { motion, useScroll } from "framer-motion";

const NavBar = () => {
	const { scrollYProgress } = useScroll();
	return (
		<>
			<nav className="w-full h-[80px] fixed top-0 left-0 hidden md:flex items-center justify-center px-20 z-[100]">
				<ul className="flex gap-20 text-xs font-light items-center text-gray-100 bg-[#151515] border-[1px] border-[#FFFFFF22] px-4 py-2 relative">
					<motion.span
						style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
						className={`absolute h-[90%] w-full backdrop-invert left-[0px]`}
					></motion.span>
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
			</nav>
		</>
	);
};

export default NavBar;
