const FutureSection = () => {
	return (
		<>
			<section id="future" className="w-full h-[100vh] bg-[#151515] py-10 px-5 md:p-20 relative flex justify-center">
				<h2 className="font-bold tracking-tighter md:left-20 text-3xl md:text-6xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent inline-block absolute">
					How do I see my future?
				</h2>
				<div className="w-full md:w-6/12 h-full flex items-center">
					<div className="bg-gray-800 md:w-[500px] md:h-[300px] w-full h-[390px]">
						<p className="text-gray-200 p-5 md:p-10">
							I want to learn a lot, to grow up a lot, achieve more knowledge, be better, have something to offer to the world. I see my
							future teaching and helping other people, looking forward, be the person that I wasn&apos;t had while learning. The world is
							full of people that want to grow up, to gather knowledge, to chase they dreams and seize oportunities.
						</p>
						<div className="bg-gray-700 p-5 w-full justify-center">
							<p className="text-gray-200 text-center">I want to be part of the developing world</p>
						</div>
					</div>
				</div>
				<div className="hidden w-6/12 h-full md:flex items-center justify-center">
					<p className="relative text-[50px] font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent flex items-center">
						Where? When? How?
						<span className="w-full h-2 bg-gradient-to-r from-yellow-400 to-blue-400 absolute bottom-0"></span>
					</p>
				</div>
			</section>
		</>
	);
};

export default FutureSection;
