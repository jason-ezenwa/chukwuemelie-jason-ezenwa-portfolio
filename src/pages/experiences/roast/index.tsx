import type { InferGetStaticPropsType } from "next";
import { getExperienceStaticProps } from "@/experiences/get-experience-static-props";
import RoastHome from "@/experiences/roast/home/roast-home";

export const getStaticProps = getExperienceStaticProps("roast");

export default function RoastHomePage({
  asOf,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <RoastHome asOf={asOf} />;
}
