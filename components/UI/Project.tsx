import Image from "next/image";
import Link from "next/link";

type Props = {
	title: string;
	description: string;
	link: string;
	image: string;
};

const Project = ({ title, description, link, image }: Props) => {
	return (
		<>
			<div className="flex flex-col w-[350px] h-[270px] items-center shadow-md rounded-xl relative overflow-hidden group">
				<div className="transition-all absolute w-0 h-full bg-[#00000055] backdrop-blur-lg top-0 left-0 z-50 flex items-center justify-center overflow-hidden group-hover:w-full">
					<Link href={link} className="text-white" target="_blank">
						Visit
					</Link>
				</div>
				<p className="bg-blue-500 text-white py-2 w-full text-center">{title}</p>
				<div className="relative w-full h-[500px] bg-black">
					<Image src={image} alt="" fill={true} />
				</div>
				<p className="text-sm p-3 text-gray-700">{description}</p>
			</div>
		</>
	);
};

export default Project;
