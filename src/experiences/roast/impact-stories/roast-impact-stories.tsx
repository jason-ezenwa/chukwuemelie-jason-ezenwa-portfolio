import Link from "next/link";
import { cn } from "@/lib/utils";
import { IMPACT_STORIES } from "@/content/impact-stories";
import SiteHead from "@/experiences/site-head";
import {
  ROAST_IMPACT,
  ROAST_STORIES_PAGE,
} from "@/experiences/roast/content";
import RoastStory, {
  roastBackIconClassName,
  roastBackLinkClassName,
  roastStoryThinClassName,
  roastStoryTitleClassName,
} from "@/experiences/roast/impact-stories/roast-story";
import { getTenureScale } from "@/experiences/roast/roast-dates";
import { RoastArrowLeftIcon } from "@/experiences/roast/roast-icons";
import { RoastKicker } from "@/experiences/roast/roast-kicker";
import RoastLayout from "@/experiences/roast/roast-layout";
import RoastNextCard from "@/experiences/roast/roast-next-card";
import { RoastSplit, roastWrapClassName } from "@/experiences/roast/roast-section";
import { ROAST_THEME_COLOR } from "@/experiences/roast/roast-theme-color";

const PAGE_TITLE = "Impact Stories | Chukwuemelie Obumse";

export default function RoastImpactStories({ asOf }: { asOf: string }) {
  const tenureScale = getTenureScale(IMPACT_STORIES, asOf);

  return (
    <RoastLayout asOf={asOf}>
      <SiteHead
        title={PAGE_TITLE}
        canonicalPath="/impact-stories"
        themeColor={ROAST_THEME_COLOR}
      />
      <div className="roast-anim-fade">
        <div className={cn(roastWrapClassName, "pt-7")}>
          <div
            className={cn(
              // Size and spacing
              "gap-x-[18px] gap-y-2.5 pb-4",
              // Border
              "border-b border-roast-line",
              // Layout
              "flex flex-wrap items-center justify-between",
            )}>
            <Link
              href={ROAST_STORIES_PAGE.backHref}
              className={roastBackLinkClassName}>
              <RoastArrowLeftIcon className={roastBackIconClassName} />
              {ROAST_STORIES_PAGE.back}
            </Link>
            <RoastKicker>
              {ROAST_STORIES_PAGE.kicker.lead} ·{" "}
              <b>{ROAST_STORIES_PAGE.kicker.bold}</b> ·{" "}
              {ROAST_STORIES_PAGE.kickerTail}
            </RoastKicker>
          </div>

          <h1
            tabIndex={-1}
            className={cn("roast-anim-rise-fast", roastStoryTitleClassName)}>
            <RoastSplit
              heading={ROAST_IMPACT.heading}
              thinClassName={roastStoryThinClassName}
            />
          </h1>
          <p
            className={cn(
              // Size and spacing
              "mt-6 max-w-[52ch]",
              // Text
              "text-[1.1rem] text-roast-ink-2",
            )}>
            {ROAST_IMPACT.lede}
          </p>

          <nav
            id="lots"
            aria-label="Impact stories"
            className={cn(
              // Size and spacing
              "mt-12 scroll-mt-24",
            )}>
            <RoastKicker>{ROAST_STORIES_PAGE.indexKicker}</RoastKicker>
            <div
              className={cn(
                // Size and spacing
                "mt-[22px] gap-5",
                // Layout
                "grid md:grid-cols-2 xl:grid-cols-4",
              )}>
              {IMPACT_STORIES.map((story) => (
                <RoastNextCard key={story.id} story={story} />
              ))}
            </div>
          </nav>
        </div>

        {IMPACT_STORIES.map((story, index) => (
          <RoastStory
            key={story.id}
            story={story}
            index={index}
            total={IMPACT_STORIES.length}
            next={IMPACT_STORIES[index + 1]}
            asOf={asOf}
            tenureScale={tenureScale}
          />
        ))}
      </div>
    </RoastLayout>
  );
}
