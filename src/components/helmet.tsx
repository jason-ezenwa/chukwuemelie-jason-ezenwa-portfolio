import Head from 'next/head';

export default function Helmet() {
  return (
    <Head>
      <title>Chukwuemelie Obumse | Software Engineer</title>
      <meta name="keywords" content="jason-ezenwa, Chukwuemelie Obumse, Software Engineer, Full Stack developer, React developer, Node.js developer, Python developer, backend engineer" />
      <meta name="description" content="Chukwuemelie Obumse | Full Stack Software Engineer with over two years of experience. Specialized in backend development and frontend development, experienced in system design, DevOps and database management. Adept at crafting clean and testable code, to develop and seamlessly integrate secure RESTful and GraphQL API paradigms, with frontend mobile and web applications. Skilled in integrating data analytics tools to support informed business decisions." />
      <link rel="icon" type="image/ico" href="/favicon.ico" />
      <meta name="theme-color" content="#F5F6F4" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jason-ezenwa.vercel.app/" />
      <meta property="og:title" content="Chukwuemelie Obumse | Full Stack Software Engineer" />
      <meta property="og:description" content="Portfolio website for Chukwuemelie Obumse | Full Stack Software Engineer" />
      <meta property="og:image" content="https://jason-ezenwa.vercel.app/favicon.ico" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jason-ezenwa.vercel.app/" />
      <meta property="twitter:title" content="Chukwuemelie Obumse | Full Stack Software Engineer" />
      <meta property="twitter:description" content="Portfolio website for Chukwuemelie Obumse | Full Stack Software Engineer" />
      <meta property="twitter:image" content="https://jason-ezenwa.vercel.app/favicon.ico" />
    </Head>
  );
}
