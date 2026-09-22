import Image from "next/image";
import { cn } from "@/lib/utils";
import { PROJECT_URLS } from "@/utils/constants";
import { ROAST_PROJECTS, type RoastProject } from "@/experiences/roast/content";
import { RoastKicker } from "@/experiences/roast/roast-kicker";
import {
  RoastSection,
  RoastSectionHead,
} from "@/experiences/roast/roast-section";
import { RoastTextLink } from "@/experiences/roast/roast-text-link";

const FEATURE_SIZES =
  "(min-width: 1280px) 700px, (min-width: 1024px) 58vw, 100vw";

const PLATE_SIZES = "(min-width: 1280px) 590px, (min-width: 768px) 50vw, 100vw";

function RoastProjectCard({ project }: { project: RoastProject }) {
  const urls = PROJECT_URLS[project.id];

  return (
    <article
      className={cn(
        "group/project",
        project.featured && [
          // Size and spacing
          "md:col-span-2 lg:gap-10",
          // Layout
          "lg:grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end",
        ],
      )}>
      <figure
        className={cn(
          // Size and spacing
          "p-2",
          // Border
          "border border-roast-line-strong",
          // Background
          "bg-roast-surface-2",
        )}>
        <div className="overflow-hidden">
          <Image
            src={project.image}
            alt={project.alt}
            width={1600}
            height={1000}
            sizes={project.featured ? FEATURE_SIZES : PLATE_SIZES}
            className={cn(
              // Size and spacing
              "aspect-[16/10] h-auto w-full",
              // Layout
              "block object-cover object-left-top",
              // Effects and interactive states
              "saturate-[.92] transition-transform duration-[600ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover/project:scale-[1.02]",
            )}
          />
        </div>
        <figcaption
          className={cn(
            // Size and spacing
            "gap-2.5 px-0.5 pt-2",
            // Layout
            "flex justify-between",
          )}>
          <RoastKicker as="span">{project.figure}</RoastKicker>
          <RoastKicker as="span">{project.figureNote}</RoastKicker>
        </figcaption>
      </figure>
      <div className={cn("mt-5", project.featured && "lg:mt-0 lg:pb-9")}>
        <RoastKicker>{project.kicker}</RoastKicker>
        <h3
          className={cn(
            // Size and spacing
            "mt-2.5",
            // Text
            "font-roast-display text-[clamp(1.8rem,3.6vw,2.4rem)] font-bold font-stretch-84% leading-none tracking-[-.025em]",
            project.featured && "lg:text-[3.2rem]",
          )}>
          {project.name}
        </h3>
        <p
          className={cn(
            // Size and spacing
            "mt-3 max-w-[48ch]",
            // Text
            "text-roast-ink-2",
          )}>
          {project.description}
        </p>
        <p
          className={cn(
            // Size and spacing
            "mt-3.5",
            // Text
            "font-roast-mono text-[.74rem] tracking-[.04em] text-roast-muted",
          )}>
          {project.stack}
        </p>
        <div
          className={cn(
            // Size and spacing
            "mt-5 gap-[22px]",
            // Layout
            "flex flex-wrap",
          )}>
          <RoastTextLink href={urls.live} external>
            Live site
          </RoastTextLink>
          <RoastTextLink href={urls.repo} external>
            GitHub
          </RoastTextLink>
        </div>
      </div>
    </article>
  );
}

export default function RoastProjects() {
  return (
    <RoastSection id="projects" labelledBy="projects-h">
      <RoastSectionHead
        kicker={ROAST_PROJECTS.kicker}
        heading={ROAST_PROJECTS.heading}
        headingId="projects-h"
      />
      <div
        className={cn(
          // Size and spacing
          "gap-14 md:gap-x-8 md:gap-y-16",
          // Layout
          "grid md:grid-cols-2",
        )}>
        {ROAST_PROJECTS.items.map((project) => (
          <RoastProjectCard key={project.id} project={project} />
        ))}
      </div>
    </RoastSection>
  );
}
