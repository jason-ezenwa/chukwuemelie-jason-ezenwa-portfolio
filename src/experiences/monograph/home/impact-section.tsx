import { cn } from "@/lib/utils";
import { IMPACT_STORIES, type ImpactStory } from "@/content/impact-stories";
import {
  HOME_STORIES,
  IMPACT,
  type MonographFigure,
} from "@/experiences/monograph/content";
import { formatPeriod } from "@/experiences/monograph/format";
import { SECTION } from "@/experiences/monograph/home/section";
import {
  CELL,
  DISPLAY,
  GRID,
  MONO,
  SectionHead,
  TextLink,
} from "@/experiences/monograph/primitives";
import { PointList } from "@/experiences/monograph/point-list";

const FIG_NUM = cn(
  "mono-fig-num",
  // Text
  "font-mono-sans font-stretch-125% font-extrabold tabular-nums lining-nums",
  "text-[clamp(3rem,12vw,5.4rem)] leading-[0.85] tracking-[-0.045em]",
  // Layout
  "block",
);

function FigureCaption({ children }: { children: string }) {
  return (
    <span
      className={cn(
        MONO,
        // Size and spacing
        "max-w-[30ch] mt-2.5 pt-2",
        // Border
        "border-t border-mono-rule",
        // Layout
        "block",
      )}>
      {children}
    </span>
  );
}

function Figure({ figure }: { figure: MonographFigure }) {
  return (
    <div className="min-w-0">
      <span className={FIG_NUM}>{figure.num}</span>
      <FigureCaption>{figure.cap}</FigureCaption>
    </div>
  );
}

function StoryRow({ story }: { story: ImpactStory }) {
  const home = HOME_STORIES[story.id];

  return (
    <article
      id={home.anchor}
      className={cn(
        GRID,
        // Size and spacing
        "gap-y-[18px] pt-[clamp(24px,3vw,40px)] pb-[clamp(36px,5vw,64px)]",
        // Border
        "border-b border-mono-rule",
        // Layout
        "scroll-mt-[60px]",
      )}>
      <p
        className={cn(
          CELL,
          MONO,
          // Size and spacing
          "gap-3",
          // Layout
          "flex justify-between lg:col-[1/span_2] lg:flex-col lg:justify-start",
        )}>
        <span>{formatPeriod(story.roles)}</span>
        <span className="text-mono-mid">{story.stack.join(", ")}</span>
      </p>
      <h3
        className={cn(
          CELL,
          DISPLAY,
          // Text
          "text-[clamp(2.6rem,10vw,9.5rem)] leading-[0.84] tracking-[-0.045em]",
          // Layout
          "lg:col-[3/-1]",
        )}>
        {story.company}
      </h3>
      <div className={cn(CELL, "lg:col-[3/span_4]")}>
        <h3
          className={cn(
            // Size and spacing
            "max-w-[22ch]",
            // Text
            "text-[clamp(1.2rem,1.7vw,1.6rem)] font-semibold tracking-[-0.015em] leading-[1.15]",
          )}>
          {story.title}
        </h3>
        <p className={cn(MONO, "mt-2.5 text-mono-mid")}>{home.role}</p>
      </div>
      <div className={cn(CELL, "lg:col-[7/span_6]")}>
        <PointList points={home.points} />
        <p
          className={cn(
            // Size and spacing
            "gap-x-6 gap-y-2.5 mt-4",
            // Layout
            "flex flex-wrap justify-between",
          )}>
          {home.footNote && (
            <span className={cn(MONO, "text-mono-mid")}>{home.footNote}</span>
          )}
          <span
            className={cn(
              // Size and spacing
              "gap-x-6 gap-y-2.5",
              // Text
              "font-mono-code text-[12px] font-medium",
              // Layout
              "flex flex-wrap",
            )}>
            {home.externalLink && (
              <TextLink href={home.externalLink.href} external>
                {home.externalLink.label}
              </TextLink>
            )}
            <TextLink href={`/impact-stories#${story.id}`} internal arrow="→">
              Read the story
            </TextLink>
          </span>
        </p>
      </div>
    </article>
  );
}

export default function ImpactSection() {
  return (
    <section id="work" aria-labelledby="impact-h" className={SECTION}>
      <SectionHead
        id="impact-h"
        title="Impact"
        sub={IMPACT.sub}
        count={IMPACT.count}
      />

      <div className={cn(GRID, "gap-y-10 items-end")}>
        <div className={cn(CELL, "lg:col-[1/span_6]")}>
          <span
            className={cn(
              FIG_NUM,
              // Text
              "text-[clamp(7rem,38vw,17.5rem)] leading-[0.78] tracking-[-0.06em]",
            )}>
            {IMPACT.lead.num}
          </span>
          <FigureCaption>{IMPACT.lead.cap}</FigureCaption>
        </div>
        <div
          className={cn(
            CELL,
            "mono-fig-stack",
            // Size and spacing
            "gap-7",
            // Layout
            "grid sm:grid-cols-2 lg:col-[7/span_6]",
          )}>
          {IMPACT.figures.map((figure) => (
            <Figure key={figure.num} figure={figure} />
          ))}
        </div>
      </div>

      <div
        className={cn(
          // Size and spacing
          "mt-[clamp(64px,9vw,140px)]",
          // Border
          "border-t border-mono-ink",
        )}>
        {IMPACT_STORIES.map((story) => (
          <StoryRow key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
