import { cn } from "@/lib/utils";
import { ABOUT } from "@/experiences/monograph/content";
import { SECTION } from "@/experiences/monograph/home/section";
import { CELL, GRID, SectionHead } from "@/experiences/monograph/primitives";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-h" className={SECTION}>
      <SectionHead
        id="about-h"
        title="About"
        sub={ABOUT.sub}
        count={ABOUT.count}
      />
      <div className={GRID}>
        <p
          className={cn(
            CELL,
            // Text
            "text-[clamp(1.5rem,3.6vw,3.4rem)] leading-[1.08] tracking-[-0.022em] font-normal",
            // Layout
            "lg:col-[1/span_11]",
          )}>
          {ABOUT.statementBefore}
          <span className="mono-mark">{ABOUT.statementMark}</span>
          {ABOUT.statementAfter}
        </p>
        <p
          className={cn(
            CELL,
            // Size and spacing
            "max-w-[44ch] mt-[clamp(24px,4vw,56px)]",
            // Text
            "text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.55] text-mono-ink",
            // Layout
            "lg:col-[7/span_5]",
          )}>
          {ABOUT.body}
        </p>
      </div>
    </section>
  );
}
