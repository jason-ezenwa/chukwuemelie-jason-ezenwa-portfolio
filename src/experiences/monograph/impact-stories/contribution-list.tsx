import { cn } from "@/lib/utils";
import type { ImpactStoryContribution } from "@/content/impact-stories";
import { MONO, MONO_UP, TextLink } from "@/experiences/monograph/primitives";

export const BODY_P = cn(
  // Size and spacing
  "max-w-[62ch]",
  // Text
  "text-[1.0625rem] leading-[1.62]",
);

interface ContributionListProps {
  contributions: ImpactStoryContribution[];
  kickers: Record<string, string>;
  className?: string;
}

/** `.contrib`: ruled rows, kicker on the left, title and body on the right */
export default function ContributionList({
  contributions,
  kickers,
  className,
}: ContributionListProps) {
  return (
    <ol className={className}>
      {contributions.map((contribution) => (
        <li
          key={contribution.id}
          className={cn(
            // Size and spacing
            "gap-1.5 pt-[22px] pb-7 sm:gap-(--mono-gap)",
            // Border
            "border-t border-mono-rule",
            // Layout
            "grid grid-cols-1 sm:grid-cols-[9rem_1fr]",
          )}>
          <span className={cn(MONO, MONO_UP, "text-mono-mid")}>
            {kickers[contribution.id]}
          </span>
          <div className="min-w-0">
            <h3
              className={cn(
                // Size and spacing
                "mb-3.5",
                // Text
                "font-mono-sans font-stretch-125% font-extrabold text-[clamp(1.35rem,2vw,1.9rem)] tracking-[-0.025em] leading-none",
              )}>
              {contribution.title}
            </h3>
            <div className="space-y-[1em]">
              {contribution.body.map((paragraph) => (
                <p key={paragraph} className={BODY_P}>
                  {paragraph}
                </p>
              ))}
            </div>
            {contribution.bullets && (
              <ul className={cn(BODY_P, "mt-[1em]")}>
                {contribution.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={cn(
                      // Layout
                      "grid grid-cols-[1.6em_1fr]",
                      // Marker
                      "before:content-['—'] before:text-mono-mid",
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
                  "gap-x-[22px] gap-y-2 mt-4",
                  // Text
                  "font-mono-code text-[12px]",
                  // Layout
                  "flex flex-wrap",
                )}>
                {contribution.links.map((link) => (
                  <TextLink key={link.href} href={link.href} external>
                    {link.label}
                  </TextLink>
                ))}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
