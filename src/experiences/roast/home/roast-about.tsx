import { cn } from "@/lib/utils";
import { ROAST_ABOUT, ROAST_YIELD } from "@/experiences/roast/content";
import {
  RoastSection,
  RoastSectionHead,
} from "@/experiences/roast/roast-section";
import { RoastTextLink } from "@/experiences/roast/roast-text-link";
import RoastYieldStrip from "@/experiences/roast/roast-yield-strip";

export function RoastAbout() {
  return (
    <RoastSection id="about" labelledBy="about-h">
      <RoastSectionHead
        kicker={ROAST_ABOUT.kicker}
        heading={ROAST_ABOUT.heading}
        headingId="about-h"
      />
      <div
        className={cn(
          // Size and spacing
          "gap-7 lg:gap-10",
          // Layout
          "grid lg:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]",
        )}>
        <div
          className={cn(
            // Size and spacing
            "lg:col-start-2 lg:max-w-[46rem]",
          )}>
          {ROAST_ABOUT.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={cn(
                // Size and spacing
                "[&+p]:mt-[1em]",
                // Text
                "text-[clamp(1.2rem,2.2vw,1.5rem)] font-[350] leading-[1.5] text-roast-ink-2",
                index === 0 && ["roast-drop-cap", "text-roast-ink"],
              )}>
              {paragraph}
            </p>
          ))}
          <div
            className={cn(
              // Size and spacing
              "mt-8 gap-x-[22px] gap-y-3",
              // Layout
              "flex flex-wrap",
            )}>
            {ROAST_ABOUT.links.map((link) => (
              <RoastTextLink key={link.href} href={link.href} external>
                {link.label}
              </RoastTextLink>
            ))}
          </div>
        </div>
      </div>
    </RoastSection>
  );
}

export function RoastYield() {
  return (
    <RoastSection labelledBy="yield-h" alt>
      <RoastSectionHead
        kicker={ROAST_YIELD.kicker}
        heading={ROAST_YIELD.heading}
        headingId="yield-h"
      />
      <RoastYieldStrip items={ROAST_YIELD.items} />
    </RoastSection>
  );
}
