import "@/styles/globals.css";
import { Metadata } from "next";
import type { AppProps } from "next/app";

export const metadata: Metadata = {
	title: 'Chukwuemelie Obumse | Software Engineer',
	description:
		'Chukwuemelie Jason Obumse | Full Stack Software Engineer with over two years of experience. Specialized in backend development and frontend development, experienced in system design, DevOps and database management. Adept at crafting clean and testable code, to develop and seamlessly integrate secure RESTful and GraphQL API paradigms, with frontend mobile and web applications. Skilled in integrating data analytics tools to support informed business decisions.',
	keywords:
		'jason-ezenwa, Chukwuemelie Obumse, Software Engineer, Full Stack developer, React developer, Node.js developer, Python developer, backend engineer',
	themeColor: '#36d1dc',
	openGraph: {
		type: 'website',
		url: 'https://jason-ezenwa.vercel.app/',
		title: 'Chukwuemelie Obumse | Full Stack Software Engineer',
		description:
			'Portfolio website for Chukwuemelie Obumse | Full Stack Software Engineer'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Chukwuemelie Obumse | Full Stack Software Engineer',
		description:
			'Portfolio website for Chukwuemelie Obumse | Full Stack Software Engineer'
	}
};
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
