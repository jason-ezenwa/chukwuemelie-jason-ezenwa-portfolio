import { Html, Head, Main, NextScript, type DocumentProps } from "next/document";
import { DEFAULT_EXPERIENCE, isExperience } from "@/experiences/experience";

export default function Document({ __NEXT_DATA__ }: DocumentProps) {
  const pageExperience = __NEXT_DATA__.props?.pageProps?.experience;
  const experience = isExperience(pageExperience)
    ? pageExperience
    : DEFAULT_EXPERIENCE;

  return (
    <Html lang="en" data-experience={experience} suppressHydrationWarning>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
