import Head from "next/head";
import { SITE_URL, type PublicPath } from "@/experiences/experience";

const DEFAULT_TITLE = "Chukwuemelie Obumse | Software Engineer";

const DEFAULT_DESCRIPTION =
  "Chukwuemelie Obumse | Full Stack Software Engineer with 3+ years of experience. Specialized in backend development and frontend development, experienced in system design, DevOps and database management. Adept at crafting clean and testable code, to develop and seamlessly integrate secure RESTful and GraphQL API paradigms, with frontend mobile and web applications. Skilled in integrating data analytics tools to support informed business decisions.";

const SOCIAL_TITLE = "Chukwuemelie Obumse | Full Stack Software Engineer";

const SOCIAL_DESCRIPTION =
  "Portfolio website for Chukwuemelie Obumse | Full Stack Software Engineer";

const SOCIAL_IMAGE = `${SITE_URL}/favicon.ico`;

interface SiteHeadProps {
  title?: string;
  description?: string;
  canonicalPath: PublicPath;
  /** Page background per mode, emitted as `media`-qualified `theme-color` metas */
  themeColor: { light: string; dark: string };
}

export default function SiteHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalPath,
  themeColor,
}: SiteHeadProps) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="jason-ezenwa, Chukwuemelie Obumse, Software Engineer, Full Stack developer, React developer, Node.js developer, Python developer, backend engineer"
      />
      <meta name="description" content={description} />
      <link rel="icon" type="image/ico" href="/favicon.ico" />
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content={themeColor.light}
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content={themeColor.dark}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={SOCIAL_TITLE} />
      <meta property="og:description" content={SOCIAL_DESCRIPTION} />
      <meta property="og:image" content={SOCIAL_IMAGE} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={SOCIAL_TITLE} />
      <meta property="twitter:description" content={SOCIAL_DESCRIPTION} />
      <meta property="twitter:image" content={SOCIAL_IMAGE} />
    </Head>
  );
}
