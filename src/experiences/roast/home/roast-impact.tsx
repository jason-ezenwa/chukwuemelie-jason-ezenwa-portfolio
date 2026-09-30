import { cn } from "@/lib/utils";
import { IMPACT_STORIES, type ImpactStory } from "@/content/impact-stories";
import { ROAST_IMPACT, ROAST_STORY_FRAMING } from "@/experiences/roast/content";
import { formatStoryRange } from "@/experiences/roast/roast-dates";
import { RoastKicker } from "@/experiences/roast/roast-kicker";
import {
  RoastLabel,
  RoastLabelFoil,
  RoastLabelFoot,
  RoastLabelTop,
  RoastLotName,
  RoastNotes,
} from "@/experiences/roast/roast-label";
import {
  RoastSection,
  RoastSectionHead,
} from "@/experiences/roast/roast-section";
import { RoastTextLink } from "@/experiences/roast/roast-text-link";

function RoastLotCard({ story }: { story: ImpactStory }) {
  const framing = ROAST_STORY_FRAMING[story.id];
  const { lotCard } = framing;
  const storyHref = `/impact-stories#${story.id}`;
  const headingId = `lot-${story.id}-name`;

  return (
    <RoastLabel
      as="article"
      id={`lot-${story.id}`}
      aria-labelledby={headingId}
      className={cn(
        lotCard.featured && "roast-lot-feature",
        // Layout
        "scroll-mt-[88px]",
        // Effects and interactive states
        "transition-[transform,border-color] duration-[350ms,300ms] ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-[3px] hover:border-roast-accent",
      )}>
      {lotCard.featured && <RoastLabelFoil />}
      <RoastLabelTop>
        Lot <b>{framing.lot}</b> · {formatStoryRange(story)}
      </RoastLabelTop>
      <RoastLotName
        id={headingId}
        origin={story.company}
        title={story.title}
        className="border-b-0 pb-3"
      />
      <RoastKicker
        as="p"
        className={cn(
          // Size and spacing
          "px-[18px] pb-[18px]",
          // Border
          "border-b border-roast-line",
        )}>
        {lotCard.process}
      </RoastKicker>
      <RoastNotes items={lotCard.bullets} />
      <RoastLabelFoot>
        <RoastKicker as="span">{lotCard.yieldLine}</RoastKicker>
        <RoastTextLink href={storyHref}>{ROAST_IMPACT.readStory}</RoastTextLink>
      </RoastLabelFoot>
    </RoastLabel>
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
      <div
        className={cn(
          // Size and spacing
          "gap-6",
          // Layout
          "grid md:grid-cols-2",
        )}>
        {IMPACT_STORIES.map((story) => (
          <RoastLotCard key={story.id} story={story} />
        ))}
      </div>
    </RoastSection>
  );
}
