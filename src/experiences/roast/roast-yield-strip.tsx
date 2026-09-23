import { cn } from "@/lib/utils";
import type { RoastYieldItem } from "@/experiences/roast/content";
import { RoastKicker } from "@/experiences/roast/roast-kicker";

/** Row of big thin figures. Two columns on mobile, one per item from 1024px. */
export default function RoastYieldStrip({
  items,
  className,
}: {
  items: RoastYieldItem[];
  className?: string;
}) {
  return (
    <ul
      className={cn("roast-yield", `roast-yield-cols-${items.length}`, className)}>
      {items.map((item) => (
        <li key={`${item.num}-${item.what}`}>
          <span
            className={cn(
              // Text
              "font-roast-display text-[clamp(2.4rem,6vw,4rem)] font-[250] font-stretch-90% leading-none tracking-[-.04em] text-roast-ink [font-variation-settings:'opsz'_96]",
              // Layout
              "block",
            )}>
            {item.num}
            {item.sup && (
              <sup
                className={cn(
                  // Size and spacing
                  "ml-[.04em]",
                  // Text
                  "text-[.45em] font-normal align-[.9em] text-roast-accent-ink",
                  // Layout
                  "static",
                )}>
                {item.sup}
              </sup>
            )}
          </span>
          <span
            className={cn(
              // Size and spacing
              "mt-2.5",
              // Text
              "text-[.98rem] leading-[1.35] text-roast-ink-2",
              // Layout
              "block",
            )}>
            {item.what}
          </span>
          <RoastKicker as="span" className="mt-2 block">
            {item.kicker}
          </RoastKicker>
        </li>
      ))}
    </ul>
  );
}
