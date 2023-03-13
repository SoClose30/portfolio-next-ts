import Image from "next/image";
import React, { useState } from "react";
import { ContextTypes, ProjectContext } from "../../providers/ProjectProvider";
import ProjectInfo from "./ProjectInfo";

type Props = {
	title: string;
	description: string;
	link: string;
	image: string;
	isLocal: boolean;
	technologies?: string;
};

const Project = ({ title, description, link, image, isLocal, technologies }: Props) => {

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={`transition-all duration-500 flex flex-col ${isOpen && isLocal ? "w-[100vw] h-[100vh] fixed top-0 z-[200]" : "w-[500px] h-[300px] md:h-[350px] relative"} ${!isOpen && "hover:scale-105"} items-center shadow-xl shadow-[#15151544] rounded-[4px] group`}>
				<div className={`transition-all duration-500 absolute h-full bg-[#FFF] backdrop-blur-lg top-0 left-0 z-50 flex items-center justify-center overflow-hidden ${isOpen && isLocal ? "w-full" : "w-0 group-hover:w-full"}`}>
					<ProjectInfo link={link} title={title} description={description} isLocal={isLocal} technologies={technologies} stateHandler={{isOpen, setIsOpen}} />
				</div>
				<p className="bg-black text-white py-2 w-full text-center rounded-t-[4px]">{title}</p>
				<div className="relative w-full h-[500px] bg-black">
					<Image src={image} alt="" fill={true} />
				</div>
				<p className="text-sm p-3 text-gray-700">{description}</p>
			</div>
		</>
	);
};

export default Project;
