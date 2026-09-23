import { cn } from "@/lib/utils";
import { IMPACT_STORIES, type ImpactStory } from "@/content/impact-stories";
import { ROAST_IMPACT, ROAST_STORY_FRAMING } from "@/experiences/roast/content";
import {
  formatStoryRange,
  formatTenure,
  getStoryMonths,
  getTenureScale,
  isStoryOngoing,
} from "@/experiences/roast/roast-dates";
import {
  RoastLabel,
  RoastLabelFields,
  RoastLabelField,
  RoastLabelFoil,
  RoastLabelFoot,
  RoastLabelTop,
  RoastLotName,
  RoastNotes,
  RoastTenure,
} from "@/experiences/roast/roast-label";
import {
  RoastSection,
  RoastSectionHead,
} from "@/experiences/roast/roast-section";
import { RoastTextLink } from "@/experiences/roast/roast-text-link";

interface RoastLotCardProps {
  story: ImpactStory;
  asOf: string;
  tenureScale: number;
}

function RoastLotCard({ story, asOf, tenureScale }: RoastLotCardProps) {
  const framing = ROAST_STORY_FRAMING[story.id];
  const { lotCard } = framing;
  const isOngoing = isStoryOngoing(story);
  const months = getStoryMonths(story, asOf);
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
        Lot <b>{framing.lot}</b>
        {isOngoing && " · Ongoing"}
      </RoastLabelTop>
      <RoastLotName id={headingId} origin={story.company} title={story.title} />
      <RoastLabelFields>
        <RoastLabelField term="Process">{lotCard.process}</RoastLabelField>
        <RoastLabelField term="Roast date">
          {formatStoryRange(story)}
          <RoastTenure
            months={months}
            scale={tenureScale}
            caption={formatTenure(months, isOngoing)}
          />
        </RoastLabelField>
        <RoastLabelField term="Notes" mono>
          {lotCard.notes}
        </RoastLabelField>
        <RoastLabelField term="Yield">
          <span
            className={cn(
              // Text
              "font-roast-display text-[1.15rem] font-semibold font-stretch-88%",
            )}>
            {lotCard.yieldLine}
          </span>
        </RoastLabelField>
      </RoastLabelFields>
      <RoastNotes items={lotCard.bullets} />
      <RoastLabelFoot>
        <RoastTextLink href={storyHref}>{ROAST_IMPACT.readStory}</RoastTextLink>
      </RoastLabelFoot>
    </RoastLabel>
  );
}

export default function RoastImpact({ asOf }: { asOf: string }) {
  const tenureScale = getTenureScale(IMPACT_STORIES, asOf);

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
          <RoastLotCard
            key={story.id}
            story={story}
            asOf={asOf}
            tenureScale={tenureScale}
          />
        ))}
      </div>
    </RoastSection>
  );
}
