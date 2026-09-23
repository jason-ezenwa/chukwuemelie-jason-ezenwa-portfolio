import Image from "next/image";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/experiences/monograph/content";
import { SECTION } from "@/experiences/monograph/home/section";
import {
  CELL,
  GRID,
  MONO,
  SectionHead,
  TextLink,
} from "@/experiences/monograph/primitives";

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="proj-h" className={SECTION}>
      <SectionHead
        id="proj-h"
        title="Projects"
        sub={PROJECTS.sub}
        count={PROJECTS.count}
      />
      <div className={cn("grid gap-[clamp(64px,9vw,150px)]")}>
        {PROJECTS.items.map((project) => {
          const urls = PROJECTS.urls[project.id];

          return (
            <figure
              key={project.id}
              className={cn(GRID, "group gap-y-4 items-start")}>
              <div
                className={cn(
                  CELL,
                  // Size and spacing
                  "p-[clamp(10px,1.8vw,28px)]",
                  // Border
                  "border border-mono-rule",
                  // Background
                  "bg-mono-plate",
                  // Layout
                  "overflow-hidden lg:col-[1/span_8]",
                )}>
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  sizes="(min-width: 1680px) 1060px, (min-width: 1024px) 64vw, 92vw"
                  className={cn(
                    // Size and spacing
                    "w-full h-auto aspect-[2939/1665]",
                    // Layout
                    "block object-cover object-left-top",
                    // Effects and interactive states
                    "transition-transform duration-1200 ease-mono-out group-hover:scale-[1.012]",
                  )}
                />
              </div>
              <figcaption className={cn(CELL, "lg:col-[9/span_4] lg:self-end")}>
                <span className={cn(MONO, "text-mono-mid")}>
                  {project.plate}
                </span>
                <h3
                  className={cn(
                    // Size and spacing
                    "mt-2.5 mb-3",
                    // Text
                    "font-mono-sans font-stretch-125% font-bold text-[clamp(1.6rem,3vw,2.6rem)] leading-[0.95] tracking-[-0.03em]",
                  )}>
                  {project.name}
                </h3>
                <p className="max-w-[38ch]">{project.blurb}</p>
                <p className={cn(MONO, "mt-3.5 text-mono-mid")}>
                  {project.tags}
                </p>
                <p
                  className={cn(
                    // Size and spacing
                    "gap-[22px] mt-4",
                    // Text
                    "font-mono-code text-[12px]",
                    // Layout
                    "flex",
                  )}>
                  <TextLink href={urls.repo} external>
                    GitHub
                  </TextLink>
                  <TextLink href={urls.live} external>
                    Live
                  </TextLink>
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
