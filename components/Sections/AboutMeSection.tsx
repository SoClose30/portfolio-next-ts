const AboutMeSection = () => {
	return (
		<>
			<section id="aboutme" className="w-full h-[100vh] bg-white p-20 relative flex">
				<h2 className="font-bold tracking-tighter text-6xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent inline-block absolute">
					About Me
				</h2>
				<div className="w-6/12 h-full flex items-center">
					<div className="bg-gray-800 w-[500px] h-[300px]">
						<p className="text-gray-200 p-10">
							I&apos;m a 23 years old Argentinian developer, because I ever liked computers and how the stuff works, I had my first aproach
							to developing at 14 years old with HTML, I wrote just a couple of lines, continue in high-school, forgetting it. Since 2020, I
							went back to the developing world, with more time by my side, falling in love completily; seeing the thing working because of
							me was exceptional.
						</p>
						<div className="bg-gray-700 p-5 w-full justify-center">
							<p className="text-gray-200 text-center">+20 projects | +2 years coding and practicing</p>
						</div>
					</div>
				</div>
				<div className="w-6/12 h-full flex items-center justify-center">
					<p className="text-[300px] font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent flex items-center">
						&#60;<span className="text-[200px]">&#47;</span>&#62;
					</p>
				</div>
			</section>
		</>
	);
};

export default AboutMeSection;
