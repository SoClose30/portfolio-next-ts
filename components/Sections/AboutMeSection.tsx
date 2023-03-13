const AboutMeSection = () => {
	return (
		<>
			<section id="aboutme" className="w-full h-[100vh] bg-white py-10 px-5 md:p-20 relative flex justify-center">
				<h2 className="font-bold tracking-tighter md:left-20 text-3xl md:text-6xl bg-gradient-to-r from-yellow-200 to-blue-400 bg-clip-text text-transparent inline-block absolute">
				&#62;About Me
				</h2>
				<div className="w-full md:w-[60%] h-full flex items-center">
					<div className="bg-[#151515] md:w-full md:mx-10 md:h-[300px] w-full h-[400px]">
						<p className="text-gray-200 p-5 md:p-10 italic">
							I&apos;m a 24 years old Argentinian developer, because I ever liked computers and how the stuff works, I had my first aproach
							to developing at 14 years old with HTML, I wrote just a couple of lines, continue in high-school, forgetting it. Since 2020, I
							went back to the developing world, with more time by my side, falling in love completily; seeing the thing working because of
							me was exceptional.
						</p>
						<div className="bg-[#F2F2F2] p-5 w-full justify-center items-end">
							<p className="text-[#151515] text-center">+20 projects | +2 years coding and practicing</p>
						</div>
					</div>
				</div>
				<div className="w-[40%] h-full hidden md:flex items-center justify-center">
					<p className="text-[25px] text-center font-bold bg-gradient-to-br from-yellow-200 to-blue-400 bg-clip-text text-transparent flex items-center">
						NodeJS. Creating. Express. Variables. Imagination. HTML. Programming. Cascading Style Sheets. Functions. Logic. Tailwind CSS. Objects. NextJS. Practicing. MongoDB. Modules. Asynchronous. Resolve. JavaScript. Coffee. TypeScript. 
					</p>
				</div>
			</section>
		</>
	);
};

export default AboutMeSection;
