import Link from "next/link";
import { cn } from "@/lib/utils";
import { IMPACT_STORIES } from "@/content/impact-stories";
import { IMPACT_STORIES_PAGE } from "@/experiences/monograph/content";
import MonographStory, {
  CS_TITLE,
} from "@/experiences/monograph/impact-stories/monograph-story";
import StoryLinkList from "@/experiences/monograph/impact-stories/story-link-list";
import MonographLayout from "@/experiences/monograph/monograph-layout";
import {
  GRID,
  MONO,
  WRAP,
  motionClasses,
} from "@/experiences/monograph/primitives";

const PAGE_TITLE = "Impact Stories | Chukwuemelie Obumse";

export default function MonographImpactStories({ asOf }: { asOf: string }) {
  return (
    <MonographLayout
      title={PAGE_TITLE}
      canonicalPath="/impact-stories"
      asOf={asOf}>
      <article aria-labelledby="cs-title" className={WRAP}>
        <div
          className={cn(
            GRID,
            // Size and spacing
            "gap-y-3 pt-[clamp(20px,3vw,40px)]",
          )}>
          <Link
            href="/#work"
            className={cn(
              "group",
              // Size and spacing
              "gap-2",
              // Text
              "font-mono-code text-[12px] no-underline",
              // Layout
              "col-[1/span_6] inline-flex items-center justify-self-start",
            )}>
            <span
              aria-hidden="true"
              className={cn(
                // Effects and interactive states
                "transition-transform duration-400 ease-mono-out group-hover:-translate-x-1 group-focus-visible:-translate-x-1",
              )}>
              ←
            </span>
            {IMPACT_STORIES_PAGE.back}
          </Link>
          <p className={cn(MONO, "col-[7/-1] text-right text-mono-mid")}>
            {IMPACT_STORIES_PAGE.crumb}
          </p>
        </div>

        <div className={GRID}>
          <h1
            id="cs-title"
            className={cn(CS_TITLE, "mono-rise mt-[clamp(40px,8vw,128px)]")}>
            {IMPACT_STORIES_PAGE.titleLines.map((line, index) => (
              <span key={line} className="mono-line">
                <span className={motionClasses(index)}>{line}</span>
              </span>
            ))}
          </h1>
        </div>

        <StoryLinkList
          label="Impact stories"
          kicker={IMPACT_STORIES_PAGE.indexKicker}
          stories={IMPACT_STORIES}
          className="mt-[clamp(56px,8vw,120px)]"
        />

        {IMPACT_STORIES.map((story, index) => {
          const nextStory = IMPACT_STORIES[index + 1];

          return (
            <div key={story.id}>
              <MonographStory story={story} />
              {nextStory && (
                <StoryLinkList
                  label="Next impact story"
                  kicker={IMPACT_STORIES_PAGE.nextKicker}
                  stories={[nextStory]}
                  className="mt-[clamp(72px,10vw,160px)]"
                />
              )}
            </div>
          );
        })}
      </article>
    </MonographLayout>
  );
}
