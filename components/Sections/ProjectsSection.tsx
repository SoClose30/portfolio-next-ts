import Project from "../UI/Project";

const ProjectsSection = () => {
	return (
		<>
			<section id="projects" className="w-full h-[100vh] bg-white py-10 px-5 md:p-20 relative flex justify-center">
				<h2 className="font-bold tracking-tighter md:left-20 text-2xl md:text-6xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent inline-block absolute">
					I have something to show you
				</h2>
				<div className="w-[90vw] h-full flex items-center justify-center self-center mt-5">
					<div className="w-full h-[400px] md:mt-20 flex flex-wrap justify-center items-center gap-5">
						<Project
							title={"Selva Amazónica"}
							description={"FullStack design for Peru's company"}
							link={"https://clinicaselvaamazonica.com"}
							image={"/assets/images/selva-amazonica.png"}
						/>
						<Project
							title={"NightSky"}
							description={"A website to remember"}
							link={"https://nightsky-git-main-soclose30.vercel.app/"}
							image={"/assets/images/nightsky.png"}
						/>
						<Project
							title={"Under construction"}
							description={"No description"}
							link={"https://selvaamazonica.com"}
							image={"/assets/logos/react.svg"}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProjectsSection;
