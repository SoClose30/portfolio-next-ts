import Image from "next/image";
import Link from "next/link";

const MainHeader = () => {
	return (
		<>
			<header className="w-[100vw] h-[650px] bg-black flex">
				<div className="hidden md:flex w-6/12 h-full items-center justify-center flex-col">
					<div>
						<h1 className="font-extralight tracking-tighter text-6xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
							Emmanuel Salvo
						</h1>
						<h2 className="font-light text-gray-500">FullStack Developer</h2>
						<div className="mt-10 hover:scale-105 origin-left transition-all inline-block">
							<Link
								href="/"
								className="bg-[#151515] border-[1px] border-[#FFFFFF22] text-white font-light tracking-thigther py-3 px-6 rounded-sm"
							>
								Download CV
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full md:w-6/12 h-full flex items-center justify-center relative">
					<div className="relative md:w-[350px] md:h-[350px] w-[80%] h-[60%] bg-[#151515] rounded-md z-50 grid grid-cols-3 grid-rows-3 place-items-center">
						<p className="absolute top-0 text-white bg-blue-500 w-full text-center -translate-y-4">Technologies Stack</p>
						<Image src="/assets/logos/html.svg" width={50} height={50} alt="Tecnología conocida por Emmanuel Salvo" />
						<Image src="/assets/logos/css.svg" width={50} height={50} alt="Tecnología conocida por Emmanuel Salvo" />
						<Image src="/assets/logos/javascript.svg" width={50} height={50} alt="Tecnología conocida por Emmanuel Salvo" />
						<Image src="/assets/logos/tailwind-css.svg" width={50} height={50} alt="Tecnología conocida por Emmanuel Salvo" />
						<Image src="/assets/logos/react.svg" width={50} height={50} alt="Tecnología conocida por Emmanuel Salvo" />
						<Image
							src="/assets/logos/nextjs.svg"
							className="bg-white px-2 py-4"
							width={60}
							height={60}
							alt="Tecnología conocida por Emmanuel Salvo"
						/>
						<Image src="/assets/logos/typescript.svg" width={50} height={50} alt="Tecnología conocida por Emmanuel Salvo" />
						<Image src="/assets/logos/nodejs.svg" width={70} height={70} alt="Tecnología conocida por Emmanuel Salvo" />
						<Image src="/assets/logos/mongodb.svg" width={60} height={60} alt="Tecnología conocida por Emmanuel Salvo" />
					</div>
					<div className="hidden md:block w-[325px] h-[325px] bg-gray-100 rounded-md z-40 absolute left-0 top-0 translate-x-[64%] translate-y-[70%]"></div>
				</div>
			</header>
		</>
	);
};

export default MainHeader;
