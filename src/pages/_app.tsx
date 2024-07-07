import "@/styles/globals.css";
import { Metadata } from "next";
import type { AppProps } from "next/app";

export const metadata: Metadata = {
	title: 'Chukwuemelie Obumse | Software Engineer',
	description:
		'Chukwuemelie Obumse | Full Stack Software Engineer with over one year experience in software development, specialized in backend development. Experienced in frontend development, system administration, devops and database management. Adept at crafting clean, testable code to develop efficient, secure, & scalable server-side applications and user interface systems.',
	keywords:
		'jason-ezenwa, Chukwuemelie Obumse, Full Stack developer, React developer, Node.js developer, Python developer, backend engineer',
	themeColor: '#36d1dc',
	openGraph: {
		type: 'website',
		url: 'https://flair-portfolio.vercel.app/',
		title: 'Chukwuemelie Obumse | Full Stack Software Engineer',
		description:
			'Portfolio website for Chukwuemelie Obumse | Full Stack Software Engineer'
		// images: [
		// 	{
		// 		url: 'https://flair-portfolio.vercel.app/assets/DevFolio.PNG',
		// 		alt: "Chukwuemelie Obumse's Portfolio Thumbnail"
		// 	}
		// ]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Chukwuemelie Obumse | Full Stack Software Engineer',
		description:
			'Portfolio website for Chukwuemelie Obumse | Full Stack Software Engineer'
		// images: [
		// 	{
		// 		url: 'https://flair-portfolio.vercel.app/assets/DevFolio.PNG',
		// 		alt: "Chukwuemelie Obumse's Portfolio Thumbnail"
		// 	}
		// ]
	}
};
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
