import Head from 'next/head';

export default function Helmet() {
  return (
    <Head>
      <title>Chukwuemelie Obumse | Software Engineer</title>
      <meta name="keywords" content="jason-ezenwa, Chukwuemelie Obumse, Full Stack developer, React developer, Node.js developer, Python developer, backend engineer" />
      <meta name="description" content="Chukwuemelie Obumse | Full Stack Software Engineer with over one year experience in software development, specialized in backend development. Experienced in frontend development, system administration, devops and database management. Adept at crafting clean, testable code to develop efficient, secure, & scalable server-side applications and user interface systems." />
      <link rel="icon" type="image/png" href="/assets/DevFolio.PNG" />
      <meta name="theme-color" content="#36d1dc" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://flair-portfolio.vercel.app/" />
      <meta property="og:title" content="Chukwuemelie Obumse | Full Stack Software Engineer" />
      <meta property="og:description" content="Portfolio website for Chukwuemelie Obumse | Full Stack Software Engineer" />
      <meta property="og:image" content="https://flair-portfolio.vercel.app/assets/DevFolio.PNG" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://flair-portfolio.vercel.app/" />
      <meta property="twitter:title" content="Chukwuemelie Obumse | Full Stack Software Engineer" />
      <meta property="twitter:description" content="Portfolio website for Chukwuemelie Obumse | Full Stack Software Engineer" />
      <meta property="twitter:image" content="https://flair-portfolio.vercel.app/assets/DevFolio.PNG" />
    </Head>
  );
}
