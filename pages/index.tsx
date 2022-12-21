import MainLayout from "../components/layouts/MainLayout";
import MainHeader from "../components/MainHeader";
import AboutMeSection from "../components/Sections/AboutMeSection";
import FutureSection from "../components/Sections/FutureSection";
import ProjectsSection from "../components/Sections/ProjectsSection";

export default function Home() {
	return (
		<>
			<MainLayout>
				<MainHeader />
				<AboutMeSection />
				<FutureSection />
				<ProjectsSection />
			</MainLayout>
		</>
	);
}
