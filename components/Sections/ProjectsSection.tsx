const ProjectsSection = () => {
	return (
		<>
			<section id="projects" className="w-full h-[100vh] bg-white p-14 relative flex flex-col">
				<h2 className="font-bold tracking-tighter leading-[80px] text-6xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
					I have something to show you
				</h2>
				<div className="w-[90vw] h-full flex items-center justify-center self-center">
					<div className="bg-white shadow-2xl rounded-md w-full h-[400px] flex items-center">
						<div className="bg-gray-700 p-5 w-full justify-center">
							<p className="text-gray-200 text-center">Under construction</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProjectsSection;
