import type { InferGetStaticPropsType } from "next";
import { getExperienceStaticProps } from "@/experiences/get-experience-static-props";
import MonographHome from "@/experiences/monograph/home/monograph-home";

export const getStaticProps = getExperienceStaticProps("monograph");

export default function MonographHomePage({
  asOf,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MonographHome asOf={asOf} />;
}
