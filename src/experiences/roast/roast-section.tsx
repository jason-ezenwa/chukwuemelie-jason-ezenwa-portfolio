import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type {
  RoastKickerCopy,
  RoastSplitHeading,
} from "@/experiences/roast/content";
import { RoastKicker, RoastKickerText } from "@/experiences/roast/roast-kicker";

/** Centred page column: 1280px max with 16 / 24 / 40px gutters */
export const roastWrapClassName = cn(
  // Size and spacing
  "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10",
);

interface RoastSectionProps {
  id?: string;
  labelledBy: string;
  /** Alternate band with the second background and hairlines */
  alt?: boolean;
  children: ReactNode;
}

export function RoastSection({
  id,
  labelledBy,
  alt,
  children,
}: RoastSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        // Size and spacing
        "scroll-mt-16 py-[72px] lg:py-28",
        alt && [
          // Border
          "border-y border-roast-line",
          // Background
          "bg-roast-bg-2",
        ],
      )}>
      <div className={roastWrapClassName}>{children}</div>
    </section>
  );
}

/** Thin/bold split used by section, story and contact headings */
export function RoastSplit({
  heading,
  thinClassName,
}: {
  heading: RoastSplitHeading;
  thinClassName?: string;
}) {
  return (
    <>
      {heading.strong}{" "}
      <span
        className={cn(
          // Text
          "font-[250] font-stretch-100% text-roast-ink-2",
          thinClassName,
        )}>
        {heading.thin}
      </span>
    </>
  );
}

interface RoastSectionHeadProps {
  kicker: RoastKickerCopy;
  heading: RoastSplitHeading;
  headingId: string;
  lede?: string;
}

export function RoastSectionHead({
  kicker,
  heading,
  headingId,
  lede,
}: RoastSectionHeadProps) {
  return (
    <div
      className={cn(
        // Size and spacing
        "mb-10 gap-3.5 lg:mb-16 lg:gap-x-10 lg:gap-y-0",
        // Layout
        "grid lg:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]",
      )}>
      <RoastKicker className="lg:pt-[.9rem]">
        <RoastKickerText copy={kicker} />
      </RoastKicker>
      <h2
        id={headingId}
        className={cn(
          // Size and spacing
          "max-w-[16ch]",
          // Text
          "font-roast-display text-[clamp(2.2rem,6.4vw,4.4rem)] font-bold font-stretch-82% leading-[.95] tracking-[-.03em] [font-variation-settings:'opsz'_96]",
        )}>
        <RoastSplit heading={heading} />
      </h2>
      {lede && (
        <p
          className={cn(
            // Size and spacing
            "max-w-[52ch] lg:col-start-2",
            // Text
            "text-[1.1rem] text-roast-ink-2",
          )}>
          {lede}
        </p>
      )}
    </div>
  );
}
