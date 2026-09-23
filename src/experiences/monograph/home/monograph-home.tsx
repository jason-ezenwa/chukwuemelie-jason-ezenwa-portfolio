import AboutSection from "@/experiences/monograph/home/about-section";
import HeroSection from "@/experiences/monograph/home/hero-section";
import ImpactSection from "@/experiences/monograph/home/impact-section";
import ProjectsSection from "@/experiences/monograph/home/projects-section";
import StackSection from "@/experiences/monograph/home/stack-section";
import WritingSection from "@/experiences/monograph/home/writing-section";
import MonographLayout from "@/experiences/monograph/monograph-layout";

export default function MonographHome({ asOf }: { asOf: string }) {
  return (
    <MonographLayout canonicalPath="/" asOf={asOf}>
      <HeroSection asOf={asOf} />
      <AboutSection />
      <StackSection />
      <ImpactSection />
      <ProjectsSection />
      <WritingSection />
    </MonographLayout>
  );
}
