import { cn } from "@/lib/utils";
import { IMPACT_STORIES, type ImpactStory } from "@/content/impact-stories";
import { ROAST_IMPACT, ROAST_STORY_FRAMING } from "@/experiences/roast/content";
import { formatStoryRange } from "@/experiences/roast/roast-dates";
import { RoastKicker } from "@/experiences/roast/roast-kicker";
import { RoastLotName, RoastNotes } from "@/experiences/roast/roast-label";
import {
  RoastSection,
  RoastSectionHead,
} from "@/experiences/roast/roast-section";
import { RoastTextLink } from "@/experiences/roast/roast-text-link";

/** One unboxed lot per story: a ruled entry in a two-column grid from 768px */
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
        "gap-4 py-8",
        // Border
        "border-t border-roast-line",
        // Layout
        "flex scroll-mt-[88px] flex-col",
      )}>
      <div>
        <RoastKicker>
          Lot <b>{framing.lot}</b> · {formatStoryRange(story)}
        </RoastKicker>
        <RoastLotName
          id={headingId}
          origin={story.company}
          title={story.title}
          className="mt-3"
        />
        <RoastKicker as="p" className="mt-3">
          {lotCard.process}
        </RoastKicker>
      </div>
      <div className="flex flex-1 flex-col">
        <RoastNotes items={lotCard.bullets} />
        <div
          className={cn(
            // Size and spacing
            "mt-auto gap-3 pt-2",
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
      <ol
        className={cn(
          // Size and spacing
          "gap-x-12",
          // Border
          "border-b border-roast-line",
          // Layout
          "grid md:grid-cols-2",
        )}>
        {IMPACT_STORIES.map((story) => (
          <RoastLotRow key={story.id} story={story} />
        ))}
      </ol>
    </RoastSection>
  );
}
