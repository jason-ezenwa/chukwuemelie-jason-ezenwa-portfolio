import type { InferGetStaticPropsType } from "next";
import { getExperienceStaticProps } from "@/experiences/get-experience-static-props";
import MonographImpactStories from "@/experiences/monograph/impact-stories/monograph-impact-stories";

export const getStaticProps = getExperienceStaticProps("monograph");

export default function MonographImpactStoriesPage({
  asOf,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MonographImpactStories asOf={asOf} />;
}
