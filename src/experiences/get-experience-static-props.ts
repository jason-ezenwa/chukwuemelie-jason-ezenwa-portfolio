import type { GetStaticProps } from "next";
import type { Experience } from "@/experiences/experience";

export const EXPERIENCE_REVALIDATE_SECONDS = 60 * 60 * 24;

export interface ExperiencePageProps {
  experience: Experience;
  /** ISO date (`YYYY-MM-DD`) the page was generated on. Drives tenure, months and the © year. */
  asOf: string;
}

export function getExperienceStaticProps(
  experience: Experience,
): GetStaticProps<ExperiencePageProps> {
  return async () => ({
    props: {
      experience,
      asOf: new Date().toISOString().slice(0, 10),
    },
    revalidate: EXPERIENCE_REVALIDATE_SECONDS,
  });
}
