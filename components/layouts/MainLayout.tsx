import Head from "next/head";
import NavBar from "../NavBar";
import ResNavBar from "../ResNavBar";

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<Head>
				<title>Emmanuel Salvo - FullStack Developer</title>
				<link
					href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
					rel="stylesheet"
				/>
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			</Head>
			<NavBar />
			<ResNavBar />
			{children}
		</>
	);
};

export default MainLayout;
