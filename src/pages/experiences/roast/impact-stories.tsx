import type { InferGetStaticPropsType } from "next";
import { getExperienceStaticProps } from "@/experiences/get-experience-static-props";
import RoastImpactStories from "@/experiences/roast/impact-stories/roast-impact-stories";

export const getStaticProps = getExperienceStaticProps("roast");

export default function RoastImpactStoriesPage({
  asOf,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <RoastImpactStories asOf={asOf} />;
}
