import { cn } from "@/lib/utils";
import type { ImpactStory } from "@/content/impact-stories";
import { ROAST_STORY_FRAMING } from "@/experiences/roast/content";
import {
  formatStoryRange,
  formatTenure,
  getStoryMonths,
  isStoryOngoing,
} from "@/experiences/roast/roast-dates";
import { RoastKicker } from "@/experiences/roast/roast-kicker";
import {
  RoastLabel,
  RoastLabelField,
  RoastLabelFields,
  RoastLabelFoil,
  RoastLabelFoot,
  RoastLabelTop,
  RoastNotes,
  RoastTenure,
} from "@/experiences/roast/roast-label";
import { RoastTextLink } from "@/experiences/roast/roast-text-link";

interface RoastSpecSheetProps {
  story: ImpactStory;
  asOf: string;
  tenureScale: number;
}

/** Sticky spec-sheet label beside the story body */
export default function RoastSpecSheet({
  story,
  asOf,
  tenureScale,
}: RoastSpecSheetProps) {
  const { lot, spec } = ROAST_STORY_FRAMING[story.id];
  const isOngoing = isStoryOngoing(story);
  const months = getStoryMonths(story, asOf);

  return (
    <RoastLabel
      as="aside"
      aria-label={`Spec sheet: ${story.company}`}
      className="lg:sticky lg:top-[88px]">
      <RoastLabelFoil />
      <RoastLabelTop>
        Spec sheet · Lot <b>{lot}</b>
      </RoastLabelTop>
      <div
        className={cn(
          // Size and spacing
          "px-[18px] pt-5 pb-4",
          // Border
          "border-b border-roast-line",
        )}>
        <p
          className={cn(
            // Text
            "font-roast-display text-[2.4rem] font-extrabold font-stretch-78% leading-[.95] tracking-[-.03em]",
          )}>
          {story.company}
        </p>
        <p
          className={cn(
            // Size and spacing
            "mt-1.5",
            // Text
            "italic text-roast-ink-2",
          )}>
          {spec.subtitle}
        </p>
      </div>
      <RoastLabelFields>
        <RoastLabelField term="Origin">
          <a
            href={spec.origin.href}
            target="_blank"
            rel="noopener"
            className="underline">
            {spec.origin.label}
          </a>
        </RoastLabelField>
        <RoastLabelField term="Process">
          {story.roles.map((role) => role.title).join(" → ")}
        </RoastLabelField>
        <RoastLabelField term="Roast date">
          {formatStoryRange(story)}
          <RoastTenure
            months={months}
            scale={tenureScale}
            caption={formatTenure(months, isOngoing)}
          />
        </RoastLabelField>
        <RoastLabelField term="Notes" mono>
          {story.stack.join(" · ")}
        </RoastLabelField>
        <RoastLabelField term="Yield" mono>
          {spec.yield}
        </RoastLabelField>
        {spec.servedTo && (
          <RoastLabelField term="Served to">{spec.servedTo}</RoastLabelField>
        )}
      </RoastLabelFields>
      <RoastNotes items={story.impactSummary} className="border-b border-roast-line" />
      <RoastLabelFoot>
        <RoastKicker as="span">{spec.footKicker}</RoastKicker>
        <RoastTextLink href={spec.footLink.href} external>
          {spec.footLink.label}
        </RoastTextLink>
      </RoastLabelFoot>
    </RoastLabel>
  );
}
