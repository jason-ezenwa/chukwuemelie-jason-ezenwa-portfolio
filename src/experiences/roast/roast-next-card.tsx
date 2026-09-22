import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ImpactStory } from "@/content/impact-stories";
import { ROAST_STORY_FRAMING, ROAST_STORIES_PAGE } from "@/experiences/roast/content";
import { formatStoryRange } from "@/experiences/roast/roast-dates";
import { RoastKicker } from "@/experiences/roast/roast-kicker";
import {
  RoastLabel,
  RoastLabelFoot,
  RoastLabelTop,
  RoastLotName,
} from "@/experiences/roast/roast-label";
import { RoastTextLinkLabel } from "@/experiences/roast/roast-text-link";

/** Compact lot label that links to a story on `/impact-stories`. */
export default function RoastNextCard({ story }: { story: ImpactStory }) {
  const framing = ROAST_STORY_FRAMING[story.id];

  return (
    <Link
      href={`/impact-stories#${story.id}`}
      className={cn(
        "group",
        // Text
        "no-underline",
        // Layout
        "block",
      )}>
      <RoastLabel
        className={cn(
          // Size and spacing
          "h-full",
          // Effects and interactive states
          "transition-[transform,border-color] duration-[350ms,300ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:-translate-y-[3px] group-hover:border-roast-accent",
        )}>
        <RoastLabelTop>
          Lot <b>{framing.lot}</b> · {formatStoryRange(story)}
        </RoastLabelTop>
        <RoastLotName
          as="p"
          origin={story.company}
          title={story.title}
          className="border-b-0"
        />
        <RoastLabelFoot>
          <RoastKicker as="span">{framing.lotCard.yieldLine}</RoastKicker>
          <RoastTextLinkLabel>{ROAST_STORIES_PAGE.viewLot}</RoastTextLinkLabel>
        </RoastLabelFoot>
      </RoastLabel>
    </Link>
  );
}
