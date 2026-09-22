import SiteHead from "@/experiences/site-head";
import { RoastAbout, RoastYield } from "@/experiences/roast/home/roast-about";
import RoastHero from "@/experiences/roast/home/roast-hero";
import RoastImpact from "@/experiences/roast/home/roast-impact";
import RoastProjects from "@/experiences/roast/home/roast-projects";
import RoastStack from "@/experiences/roast/home/roast-stack";
import RoastWriting from "@/experiences/roast/home/roast-writing";
import RoastLayout from "@/experiences/roast/roast-layout";
import { ROAST_THEME_COLOR } from "@/experiences/roast/roast-theme-color";

export default function RoastHome({ asOf }: { asOf: string }) {
  return (
    <RoastLayout asOf={asOf}>
      <SiteHead canonicalPath="/" themeColor={ROAST_THEME_COLOR} />
      <div className="roast-anim-fade">
        <RoastHero />
        <RoastAbout />
        <RoastYield />
        <RoastStack />
        <RoastImpact asOf={asOf} />
        <RoastProjects />
        <RoastWriting />
      </div>
    </RoastLayout>
  );
}
