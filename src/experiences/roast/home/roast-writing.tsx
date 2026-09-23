import { cn } from "@/lib/utils";
import { POST_URLS } from "@/utils/constants";
import { ROAST_WRITING } from "@/experiences/roast/content";
import { RoastPostArrowIcon } from "@/experiences/roast/roast-icons";
import { RoastKicker, RoastKickerText } from "@/experiences/roast/roast-kicker";
import {
  RoastSection,
  RoastSectionHead,
} from "@/experiences/roast/roast-section";

/** The brew journal: one featured essay and a list of the rest */
export default function RoastWriting() {
  const { feature } = ROAST_WRITING;

  return (
    <RoastSection id="writing" labelledBy="writing-h" alt>
      <RoastSectionHead
        kicker={ROAST_WRITING.kicker}
        heading={ROAST_WRITING.heading}
        headingId="writing-h"
        lede={ROAST_WRITING.lede}
      />
      <div
        className={cn(
          // Size and spacing
          "lg:gap-x-12",
          // Border
          "border-t border-roast-line-strong lg:border-t-0",
          // Layout
          "grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
        )}>
        <div
          className={cn(
            // Size and spacing
            "py-7",
            // Border
            "border-b border-roast-line lg:border-t lg:border-b-0 lg:border-t-roast-line-strong",
          )}>
          <a
            href={POST_URLS[feature.id]}
            target="_blank"
            rel="noopener"
            className={cn(
              "group/feature",
              // Text
              "no-underline",
              // Layout
              "block",
            )}>
            <RoastKicker>
              <RoastKickerText copy={feature.kicker} />
            </RoastKicker>
            <h3
              className={cn(
                // Size and spacing
                "mt-3.5",
                // Text
                "font-roast-display text-[clamp(1.9rem,3.6vw,2.7rem)] font-bold font-stretch-84% leading-none tracking-[-.025em]",
                // Effects and interactive states
                "transition-colors duration-200 group-hover/feature:text-roast-accent-ink",
              )}>
              {feature.title}
            </h3>
            <blockquote
              className={cn(
                // Size and spacing
                "mt-[22px] pl-4",
                // Text
                "text-[1.2rem] italic leading-[1.45] text-roast-ink-2",
                // Border
                "border-l border-roast-accent",
              )}>
              “{feature.quote}”
            </blockquote>
          </a>
        </div>
        <ul className="lg:border-t lg:border-roast-line-strong">
          {ROAST_WRITING.posts.map((post) => (
            <li key={post.id} className="border-b border-roast-line">
              <a
                href={POST_URLS[post.id]}
                target="_blank"
                rel="noopener"
                className={cn(
                  "group/post",
                  // Size and spacing
                  "gap-x-4 gap-y-1.5 py-[18px]",
                  // Text
                  "no-underline",
                  // Layout
                  "grid grid-cols-[minmax(0,1fr)_auto] items-center",
                )}>
                <span
                  className={cn(
                    // Text
                    "text-[1.2rem] font-[450] leading-[1.3]",
                    // Effects and interactive states
                    "transition-colors duration-200 group-hover/post:text-roast-accent-ink",
                  )}>
                  {post.title}
                </span>
                <RoastKicker as="span" className="col-start-1">
                  {post.kicker}
                </RoastKicker>
                <span
                  aria-hidden="true"
                  className={cn(
                    // Size and spacing
                    "size-[34px]",
                    // Border
                    "border border-roast-line-strong rounded-full",
                    // Layout
                    "col-start-2 row-span-2 row-start-1 grid place-items-center",
                    // Effects and interactive states
                    "transition-[border-color,transform] duration-[200ms,300ms] group-hover/post:-rotate-45 group-hover/post:border-roast-accent",
                  )}>
                  <RoastPostArrowIcon className="size-3" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </RoastSection>
  );
}
