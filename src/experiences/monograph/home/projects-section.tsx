import Image from "next/image";
import { cn } from "@/lib/utils";
import { PROJECTS, type MonographProject } from "@/experiences/monograph/content";
import { ProjectVideo } from "@/experiences/project-video";
import { useSpecimenFont } from "@/experiences/use-specimen-font";
import { SECTION } from "@/experiences/monograph/home/section";
import {
  CELL,
  GRID,
  MONO,
  SectionHead,
  TextLink,
} from "@/experiences/monograph/primitives";

function ProjectCard({ project }: { project: MonographProject }) {
  const urls = PROJECTS.urls[project.id];
  const specimen = useSpecimenFont(project.specimen);

  return (
    <figure className={cn(GRID, "group gap-y-4 items-start")}>
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
        {project.video ? (
          <ProjectVideo
            video={project.video}
            className={cn(
              // Size and spacing
              "w-full h-auto aspect-[2939/1665]",
              // Background: the recording's own terminal colour, around its letterbox
              "bg-[#1e1e2e]",
              // Layout
              "block object-contain",
            )}
          />
        ) : (
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
        )}
      </div>
      <figcaption
        data-specimen={specimen.on ? "on" : undefined}
        className={cn(CELL, "lg:col-[9/span_4] lg:self-end")}>
        <span className={cn(MONO, "text-mono-mid")}>{project.plate}</span>
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
        <p className={cn(MONO, "mt-3.5 text-mono-mid")}>{project.tags}</p>
        <p
          className={cn(
            // Size and spacing
            "gap-x-[22px] gap-y-2 mt-4",
            // Text
            "font-mono-code text-[12px]",
            // Layout
            "flex flex-wrap",
          )}>
          {urls.repo && (
            <TextLink href={urls.repo} external>
              GitHub
            </TextLink>
          )}
          {urls.live && (
            <TextLink href={urls.live} external>
              Live
            </TextLink>
          )}
          {urls.doc && (
            <TextLink href={urls.doc.href} external>
              {urls.doc.label}
            </TextLink>
          )}
          {project.specimen && (
            <button
              type="button"
              onClick={specimen.toggle}
              aria-pressed={specimen.on}
              disabled={specimen.loading}
              className={cn("mono-u", "cursor-pointer disabled:cursor-wait")}>
              {specimen.on
                ? "Back to site font"
                : specimen.loading
                  ? "Loading…"
                  : `Render in ${project.specimen.family}`}
            </button>
          )}
        </p>
      </figcaption>
    </figure>
  );
}

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
        {PROJECTS.items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
