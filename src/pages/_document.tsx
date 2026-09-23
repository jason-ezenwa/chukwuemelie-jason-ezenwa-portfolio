import { Html, Head, Main, NextScript, type DocumentProps } from "next/document";
import {
  DEFAULT_EXPERIENCE,
  EXPERIENCES,
  EXPERIENCE_COOKIE,
  EXPERIENCE_COOKIE_MAX_AGE,
  EXPERIENCE_PARAM,
  isExperience,
} from "@/experiences/experience";

/**
 * Persists `?experience=` to the cookie before Next boots. The middleware sets it too,
 * but a revalidated page can come back as a 304 without `Set-Cookie`, and Next's
 * first prefetches would then resolve (and cache) the old experience.
 */
const PERSIST_EXPERIENCE_PARAM = `(function () {
  var experience = new URLSearchParams(location.search).get(${JSON.stringify(EXPERIENCE_PARAM)});
  if (${JSON.stringify(EXPERIENCES)}.indexOf(experience) === -1) return;
  document.cookie = ${JSON.stringify(`${EXPERIENCE_COOKIE}=`)} + experience + "; path=/; max-age=${EXPERIENCE_COOKIE_MAX_AGE}; samesite=lax";
})();`;

export default function Document({ __NEXT_DATA__ }: DocumentProps) {
  const pageExperience = __NEXT_DATA__.props?.pageProps?.experience;
  const experience = isExperience(pageExperience)
    ? pageExperience
    : DEFAULT_EXPERIENCE;

  return (
    <Html lang="en" data-experience={experience} suppressHydrationWarning>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: PERSIST_EXPERIENCE_PARAM }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
