import Project from "../UI/Project";

const ProjectsSection = () => {
	return (
		<>
			<section id="projects" className="w-full bg-gradient-to-b from-slate-100 to-white py-10 px-5 md:p-20 relative flex justify-center">
				<h2 className="font-bold tracking-tighter md:left-20 text-2xl md:text-6xl bg-gradient-to-r from-yellow-200 to-blue-400 bg-clip-text text-transparent inline-block absolute">
				&#62;Principal projects
				</h2>
				<div className="w-[90vw] h-full flex items-center justify-center self-center mt-5">
					<div className="w-full md:mt-20 mt-10 flex flex-wrap justify-center items-center gap-5">
						<Project
							title={"Selva Amazónica"}
							description={"FullStack design for Peru's company"}
							link={"https://clinicaselvaamazonica.com"}
							image={"/assets/images/selva-amazonica.png"}
							isLocal={false}
						/>
						<Project
							title={"NightSky"}
							description={"A website to remember"}
							link={"https://nightsky-git-main-soclose30.vercel.app/"}
							image={"/assets/images/nightsky.png"}
							isLocal={false}
						/>
						<Project
							title={"Exchange Manager"}
							description={"Complex WhatsApp bot through API and NodeJS"}
							link={"none"}
							isLocal={true}
							image={"/assets/images/exchange-image.jpg"}
							technologies="I made an application that is able firstly to CRUD client's accounts, working with Google Sheets API and WhatsApp API together. Secondly, to receive the amount the person wants to buy and register on the Google Sheet depending of the available account implementing rules (greater, equal or lesser, i.e.)"
						/>
						<Project
							title={"Appointments Manager"}
							description={"WhatsApp bot through API and NodeJS for Travel Agency"}
							link={"none"}
							isLocal={true}
							image={"/assets/images/exchange-image.jpg"}
							technologies="This application is able to register appointments from the client and saves it to a Google Sheet automatically. Making all the questions one by one, it gets all the information on a specific order so it has no errors."
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProjectsSection;
