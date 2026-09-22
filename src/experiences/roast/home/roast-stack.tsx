import { cn } from "@/lib/utils";
import { ROAST_STACK } from "@/experiences/roast/content";
import { RoastKicker } from "@/experiences/roast/roast-kicker";
import {
  RoastSection,
  RoastSectionHead,
} from "@/experiences/roast/roast-section";

/** The menu board: tools with dotted leaders to where they were used */
export default function RoastStack() {
  return (
    <RoastSection id="stack" labelledBy="stack-h">
      <RoastSectionHead
        kicker={ROAST_STACK.kicker}
        heading={ROAST_STACK.heading}
        headingId="stack-h"
      />
      <div
        className={cn(
          // Size and spacing
          "gap-x-12 gap-y-10",
          // Layout
          "grid md:grid-cols-2 lg:grid-cols-3",
        )}>
        {ROAST_STACK.groups.map((group) => (
          <div key={group.title}>
            <h3
              className={cn(
                // Size and spacing
                "pb-2.5",
                // Text
                "font-roast-mono text-[.72rem] font-medium uppercase tracking-[.16em] text-roast-muted",
                // Border
                "border-b border-roast-line-strong",
                // Layout
                "flex justify-between",
              )}>
              <span>{group.title}</span>
              <span>{group.column}</span>
            </h3>
            <ul>
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className={cn(
                    // Size and spacing
                    "gap-2.5 py-3",
                    // Border
                    "border-b border-roast-line",
                    // Layout
                    "flex items-baseline",
                  )}>
                  <span
                    className={cn(
                      // Size and spacing
                      "gap-2.5",
                      // Text
                      "font-roast-display text-[1.45rem] font-medium font-stretch-88% leading-[1.1] tracking-[-.015em] whitespace-nowrap",
                      item.house && "font-bold",
                      // Layout
                      "inline-flex items-center",
                    )}>
                    {item.house && (
                      <i className="roast-diamond" aria-hidden="true" />
                    )}
                    {item.name}
                  </span>
                  <span className="roast-menu-lead" aria-hidden="true" />
                  <span
                    className={cn(
                      // Text
                      "text-right font-roast-mono text-[.68rem] tracking-[.06em] text-roast-muted",
                    )}>
                    {item.where}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <RoastKicker
        className={cn(
          // Size and spacing
          "mt-7 gap-2.5",
          // Layout
          "flex items-center",
        )}>
        <i className="roast-diamond" aria-hidden="true" />
        {ROAST_STACK.note}
      </RoastKicker>
    </RoastSection>
  );
}
