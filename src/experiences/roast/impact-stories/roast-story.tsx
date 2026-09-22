import Link from "next/link";
import { cn } from "@/lib/utils";
import type {
  ImpactStory,
  ImpactStoryContribution,
} from "@/content/impact-stories";
import {
  ROAST_STORIES_PAGE,
  ROAST_STORY_FRAMING,
} from "@/experiences/roast/content";
import RoastPhaseBar from "@/experiences/roast/impact-stories/roast-phase-bar";
import RoastSpecSheet from "@/experiences/roast/impact-stories/roast-spec-sheet";
import { formatStoryRange } from "@/experiences/roast/roast-dates";
import { RoastArrowLeftIcon } from "@/experiences/roast/roast-icons";
import { RoastKicker, RoastKickerText } from "@/experiences/roast/roast-kicker";
import RoastNextCard from "@/experiences/roast/roast-next-card";
import { RoastSplit, roastWrapClassName } from "@/experiences/roast/roast-section";
import { RoastTextLink } from "@/experiences/roast/roast-text-link";
import RoastYieldStrip from "@/experiences/roast/roast-yield-strip";

/** Large condensed title shared by the page h1 and each story h2 */
export const roastStoryTitleClassName = cn(
  // Size and spacing
  "mt-9 max-w-[14ch]",
  // Text
  "font-roast-display text-[clamp(2.6rem,8.6vw,7.2rem)] font-extrabold font-stretch-76% leading-[.9] tracking-[-.035em] [font-variation-settings:'opsz'_96]",
);

export const roastStoryThinClassName = cn(
  // Text
  "font-extralight",
);

export const roastBackLinkClassName = cn(
  "group/back",
  // Size and spacing
  "min-h-10 gap-2.5",
  // Text
  "font-roast-mono text-[.74rem] uppercase tracking-[.12em] no-underline",
  // Layout
  "inline-flex items-center",
);

export const roastBackIconClassName = cn(
  // Size and spacing
  "size-3.5",
  // Effects and interactive states
  "transition-transform duration-[250ms] group-hover/back:-translate-x-[3px]",
);

function RoastStep({
  contribution,
  storyId,
}: {
  contribution: ImpactStoryContribution;
  storyId: ImpactStory["id"];
}) {
  const framing = ROAST_STORY_FRAMING[storyId].contributions[contribution.id];

  return (
    <li
      className={cn(
        // Size and spacing
        "gap-3.5 py-[26px] sm:gap-7",
        // Border
        "border-b border-roast-line",
        // Layout
        "grid sm:grid-cols-[11rem_minmax(0,1fr)]",
      )}>
      <div>
        {framing && <RoastKicker>{framing.kicker}</RoastKicker>}
        {framing?.metric && (
          <span
            className={cn(
              // Size and spacing
              "mt-2",
              // Text
              "font-roast-display text-[2.4rem] font-[250] font-stretch-90% leading-none tracking-[-.04em] [font-variation-settings:'opsz'_96]",
              // Layout
              "block",
            )}>
            {framing.metric}
          </span>
        )}
        {framing?.metricCap && (
          <span
            className={cn(
              // Size and spacing
              "mt-1.5",
              // Text
              "font-roast-mono text-[.68rem] tracking-[.06em] text-roast-muted",
              // Layout
              "block",
            )}>
            {framing.metricCap}
          </span>
        )}
      </div>
      <div>
        <h3
          className={cn(
            // Text
            "font-roast-display text-[1.45rem] font-semibold font-stretch-90% leading-[1.15] tracking-[-.015em]",
          )}>
          {contribution.title}
        </h3>
        {contribution.body.map((paragraph, index) => (
          <p
            key={paragraph}
            className={cn(
              // Size and spacing
              index === 0 ? "mt-2" : "mt-[.6em]",
              // Text
              "text-roast-ink-2",
            )}>
            {paragraph}
          </p>
        ))}
        {contribution.bullets && (
          <ul className="roast-notes mt-3">
            {contribution.bullets.map((bullet) => (
              <li
                key={bullet}
                className={cn(
                  // Size and spacing
                  "pb-2 pl-[18px]",
                  // Text
                  "leading-[1.45] text-roast-ink-2",
                  // Layout
                  "relative",
                )}>
                {bullet}
              </li>
            ))}
          </ul>
        )}
        {contribution.links && (
          <p
            className={cn(
              // Size and spacing
              "mt-3.5 gap-x-[22px] gap-y-3",
              // Layout
              "flex flex-wrap",
            )}>
            {contribution.links.map((link) => (
              <RoastTextLink key={link.href} href={link.href} external>
                {link.label}
              </RoastTextLink>
            ))}
          </p>
        )}
      </div>
    </li>
  );
}

interface RoastStoryProps {
  story: ImpactStory;
  index: number;
  total: number;
  next?: ImpactStory;
  asOf: string;
  tenureScale: number;
}

/** One full story in the spec-sheet template */
export default function RoastStory({
  story,
  index,
  total,
  next,
  asOf,
  tenureScale,
}: RoastStoryProps) {
  const framing = ROAST_STORY_FRAMING[story.id];
  const headingId = `${story.id}-title`;
  const brewId = `${story.id}-brew`;

  return (
    <section
      id={story.id}
      aria-labelledby={headingId}
      className={cn(
        roastWrapClassName,
        // Size and spacing
        "scroll-mt-16 pt-24 lg:pt-28",
      )}>
      <div
        className={cn(
          // Size and spacing
          "gap-x-[18px] gap-y-2.5 pb-4",
          // Border
          "border-b border-roast-line",
          // Layout
          "flex flex-wrap items-center justify-between",
        )}>
        <RoastKicker>
          Impact story · Lot <b>{framing.lot}</b> · Spec sheet
        </RoastKicker>
        <RoastKicker>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </RoastKicker>
      </div>

      <h2 id={headingId} className={roastStoryTitleClassName}>
        <RoastSplit heading={framing.title} thinClassName={roastStoryThinClassName} />
      </h2>
      <div
        className={cn(
          // Size and spacing
          "mt-[22px] gap-x-[22px] gap-y-2",
          // Layout
          "flex flex-wrap",
        )}>
        <RoastKicker>
          Origin <b>{story.company}</b>
        </RoastKicker>
        <RoastKicker>{formatStoryRange(story)}</RoastKicker>
        <RoastKicker>{story.stack.join(" · ")}</RoastKicker>
      </div>

      <RoastYieldStrip items={framing.yield} className="mt-11" />

      {story.roles.length > 1 && framing.phaseNames && (
        <RoastPhaseBar story={story} phaseNames={framing.phaseNames} asOf={asOf} />
      )}

      <div
        className={cn(
          // Size and spacing
          "mt-[72px] gap-12 lg:gap-16",
          // Layout
          "grid lg:grid-cols-[minmax(0,7.5fr)_minmax(0,4.5fr)] lg:items-start",
        )}>
        <div>
          <div>
            <RoastKicker className="mb-[18px]">
              <RoastKickerText copy={ROAST_STORIES_PAGE.overviewKicker} />
            </RoastKicker>
            {story.overview.map((paragraph, paragraphIndex) => (
              <p
                key={paragraph}
                className={cn(
                  // Size and spacing
                  paragraphIndex > 0 && "mt-[1em]",
                  // Text
                  "text-[clamp(1.15rem,2vw,1.35rem)] font-[350] leading-[1.55]",
                  paragraphIndex === 0 ? "text-roast-ink" : "text-roast-ink-2",
                )}>
                {paragraph}
              </p>
            ))}
          </div>

          <p
            className={cn(
              // Size and spacing
              "my-11 py-7",
              // Text
              "font-roast-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-light font-stretch-92% leading-[1.12] tracking-[-.02em]",
              // Border
              "border-y border-roast-line-strong",
            )}>
            {framing.pullQuote.text}{" "}
            <b className="font-bold text-roast-accent-ink">
              {framing.pullQuote.bold}
            </b>
          </p>

          <section aria-labelledby={brewId}>
            <RoastKicker>
              <RoastKickerText copy={ROAST_STORIES_PAGE.brewKicker} />
            </RoastKicker>
            <p
              id={brewId}
              className={cn(
                // Size and spacing
                "mt-2.5",
                // Text
                "font-roast-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold font-stretch-84% leading-none tracking-[-.025em]",
              )}>
              {ROAST_STORIES_PAGE.brewHeading}
            </p>
            <ol
              className={cn(
                // Size and spacing
                "mt-7",
                // Border
                "border-t border-roast-line-strong",
              )}>
              {story.contributions.map((contribution) => (
                <RoastStep
                  key={contribution.id}
                  contribution={contribution}
                  storyId={story.id}
                />
              ))}
            </ol>
          </section>
        </div>

        <RoastSpecSheet story={story} asOf={asOf} tenureScale={tenureScale} />
      </div>

      <nav
        aria-label={next ? "Next impact story" : "All impact stories"}
        className={cn(
          // Size and spacing
          "mt-24 pt-[18px]",
          // Border
          "border-t border-roast-line-strong",
        )}>
        {next ? (
          <>
            <RoastKicker>{ROAST_STORIES_PAGE.nextKicker}</RoastKicker>
            <div
              className={cn(
                // Size and spacing
                "mt-[22px] gap-5",
                // Layout
                "grid lg:grid-cols-3",
              )}>
              <RoastNextCard story={next} />
            </div>
          </>
        ) : (
          <Link href="/impact-stories#lots" className={roastBackLinkClassName}>
            <RoastArrowLeftIcon className={roastBackIconClassName} />
            {ROAST_STORIES_PAGE.backToTop}
          </Link>
        )}
      </nav>
    </section>
  );
}
