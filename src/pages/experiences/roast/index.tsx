import Link from "next/link";
import type { InferGetStaticPropsType } from "next";
import { cn } from "@/lib/utils";
import ExperienceSwitcher from "@/experiences/experience-switcher";
import SiteHead from "@/experiences/site-head";
import { getExperienceStaticProps } from "@/experiences/get-experience-static-props";

export const getStaticProps = getExperienceStaticProps("roast");

// Phase 1 placeholder, replaced by the Roast page.
export default function RoastHomePage({
  experience,
  asOf,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SiteHead
        canonicalPath="/"
        themeColor={{ light: "#ffffff", dark: "#000000" }}
      />
      <main
        className={cn(
          // Size and spacing
          "min-h-screen p-4 sm:p-6 lg:p-8 space-y-4",
        )}>
        <h1 data-testid="experience-name">Roast · Home</h1>
        <p>As of {asOf}</p>
        <Link href="/impact-stories" data-testid="internal-link">
          Impact stories
        </Link>
      </main>
      <ExperienceSwitcher current={experience} />
    </>
  );
}
