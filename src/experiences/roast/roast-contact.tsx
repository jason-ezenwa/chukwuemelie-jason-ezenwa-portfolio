import { cn } from "@/lib/utils";
import { EMAIL_ADDRESS } from "@/utils/constants";
import { ROAST_CONTACT } from "@/experiences/roast/content";
import { getYear } from "@/experiences/roast/roast-dates";
import { RoastKicker, RoastKickerText } from "@/experiences/roast/roast-kicker";
import { roastWrapClassName } from "@/experiences/roast/roast-section";

/** Shared contact block and footer, on both pages */
export default function RoastContact({ asOf }: { asOf: string }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-h"
      className={cn(
        roastWrapClassName,
        // Size and spacing
        "scroll-mt-16 pt-[88px] pb-[calc(96px+env(safe-area-inset-bottom))]",
        // Layout
        "relative",
      )}>
      <hr
        className={cn(
          "roast-copper",
          // Size and spacing
          "mb-14 h-px",
          // Border
          "border-0",
        )}
      />
      <div
        className={cn(
          // Size and spacing
          "gap-10 lg:gap-16",
          // Layout
          "grid lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:items-end",
        )}>
        <div>
          <RoastKicker className="mb-5">
            <RoastKickerText copy={ROAST_CONTACT.kicker} />
          </RoastKicker>
          <h2
            id="contact-h"
            className={cn(
              // Text
              "font-roast-display text-[clamp(3rem,11vw,8.5rem)] font-extrabold font-stretch-75% leading-[.88] tracking-[-.02em] [font-variation-settings:'opsz'_96]",
            )}>
            {ROAST_CONTACT.heading.strong}{" "}
            <span
              className={cn(
                // Size and spacing
                "mt-[.08em]",
                // Text
                "text-[.62em] font-extralight font-stretch-100% leading-[.95] text-roast-ink-2",
                // Layout
                "block",
              )}>
              {ROAST_CONTACT.heading.thin}
            </span>
          </h2>
          <p
            tabIndex={0}
            aria-label={`Email address: ${EMAIL_ADDRESS}`}
            className={cn(
              // Size and spacing
              "mt-8 pb-1",
              // Text
              "font-roast-body text-[clamp(1.25rem,4.6vw,2.6rem)] italic leading-[1.2] [overflow-wrap:anywhere]",
              // Border
              "border-b border-roast-accent",
              // Layout
              "inline-block",
              // Effects and interactive states
              "select-all",
            )}>
            {EMAIL_ADDRESS}
          </p>
        </div>
        <div
          className={cn(
            // Border
            "border-t border-roast-line-strong",
            // Layout
            "grid",
          )}>
          {ROAST_CONTACT.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener"
              className={cn(
                // Size and spacing
                "py-4",
                // Text
                "font-roast-display text-[1.3rem] font-medium font-stretch-90% no-underline",
                // Border
                "border-b border-roast-line",
                // Layout
                "flex items-center justify-between",
              )}>
              {link.label}{" "}
              <span
                className={cn(
                  // Text
                  "font-roast-mono text-[.7rem] tracking-[.02em] text-roast-muted",
                )}>
                {link.note}
              </span>
            </a>
          ))}
        </div>
      </div>
      <footer
        className={cn(
          // Size and spacing
          "mt-[72px] gap-x-5 gap-y-2 pt-[18px]",
          // Border
          "border-t border-roast-line",
          // Layout
          "flex flex-wrap justify-between",
        )}>
        <RoastKicker>{ROAST_CONTACT.footerLeft}</RoastKicker>
        <RoastKicker>
          {ROAST_CONTACT.footerLot} · © {getYear(asOf)}
        </RoastKicker>
      </footer>
    </section>
  );
}
