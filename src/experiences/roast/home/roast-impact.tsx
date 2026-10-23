import { cn } from "@/lib/utils";
import { IMPACT_STORIES, type ImpactStory } from "@/content/impact-stories";
import { ROAST_IMPACT, ROAST_STORY_FRAMING } from "@/experiences/roast/content";
import { formatStoryRange } from "@/experiences/roast/roast-dates";
import { RoastKicker } from "@/experiences/roast/roast-kicker";
import { RoastNotes } from "@/experiences/roast/roast-label";
import {
  RoastSection,
  RoastSectionHead,
} from "@/experiences/roast/roast-section";
import { RoastTextLink } from "@/experiences/roast/roast-text-link";

/** One ruled row per story, laid out like the steps on the story page */
function RoastLotRow({ story }: { story: ImpactStory }) {
  const framing = ROAST_STORY_FRAMING[story.id];
  const { lotCard } = framing;
  const headingId = `lot-${story.id}-name`;

  return (
    <li
      id={`lot-${story.id}`}
      aria-labelledby={headingId}
      className={cn(
        // Size and spacing
        "gap-4 py-8 md:gap-10",
        // Border
        "border-b border-roast-line",
        // Layout
        "grid scroll-mt-[88px] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
      )}>
      <div>
        <RoastKicker>
          Lot <b>{framing.lot}</b> · {formatStoryRange(story)}
        </RoastKicker>
        <h3 id={headingId} className="mt-3">
          <span
            className={cn(
              // Text
              "font-roast-display text-[clamp(2.2rem,5vw,2.9rem)] font-bold font-stretch-78% leading-[.95] tracking-[-.03em] [font-variation-settings:'opsz'_96]",
              // Layout
              "block",
            )}>
            {story.company}
          </span>
          <span
            className={cn(
              // Size and spacing
              "mt-2.5",
              // Text
              "font-roast-body text-[1.15rem] font-normal italic leading-[1.3] text-roast-ink-2",
              // Layout
              "block",
            )}>
            {story.title}
          </span>
        </h3>
        <RoastKicker as="p" className="mt-3">
          {lotCard.process}
        </RoastKicker>
      </div>
      <div>
        <RoastNotes items={lotCard.bullets} className="px-0 pt-0 pb-0" />
        <div
          className={cn(
            // Size and spacing
            "mt-2 gap-3",
            // Layout
            "flex flex-wrap items-center justify-between",
          )}>
          <RoastKicker as="span">{lotCard.yieldLine}</RoastKicker>
          <RoastTextLink href={`/impact-stories#${story.id}`}>
            {ROAST_IMPACT.readStory}
          </RoastTextLink>
        </div>
      </div>
    </li>
  );
}

export default function RoastImpact() {
  return (
    <RoastSection id="impact" labelledBy="impact-h" alt>
      <RoastSectionHead
        kicker={ROAST_IMPACT.kicker}
        heading={ROAST_IMPACT.heading}
        headingId="impact-h"
        lede={ROAST_IMPACT.lede}
      />
      <ol className="border-t border-roast-line">
        {IMPACT_STORIES.map((story) => (
          <RoastLotRow key={story.id} story={story} />
        ))}
      </ol>
    </RoastSection>
  );
}
