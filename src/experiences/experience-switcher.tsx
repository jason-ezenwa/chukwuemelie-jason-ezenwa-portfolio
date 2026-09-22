import type { MouseEvent } from "react";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import {
  EXPERIENCES,
  EXPERIENCE_LABELS,
  buildExperienceHref,
  toPublicPath,
  type Experience,
} from "@/experiences/experience";

interface ExperienceSwitcherProps {
  current: Experience;
}

/**
 * Floating pill that switches experience with a full document navigation
 * (plain `<a>`, never `next/link`), keeping the public path and hash.
 * Styled only through `--xp-bg`, `--xp-fg`, `--xp-line`, `--xp-on-bg`, `--xp-on-fg` and `--xp-font`.
 */
export default function ExperienceSwitcher({ current }: ExperienceSwitcherProps) {
  const router = useRouter();
  const publicPath = toPublicPath(router.asPath);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    experience: Experience,
  ) => {
    if (experience === current) {
      event.preventDefault();
      return;
    }

    event.currentTarget.href = buildExperienceHref(
      publicPath,
      experience,
      window.location.hash,
    );
  };

  return (
    <nav
      aria-label="Experience"
      className={cn(
        // Size and spacing
        "gap-0.5 p-[3px]",
        // Text
        "font-(family-name:--xp-font) text-[11px] uppercase tracking-[.06em]",
        // Border
        "border border-(color:--xp-line) rounded-full",
        // Background
        "bg-(--xp-bg)",
        // Layout
        "fixed right-3 bottom-[calc(12px+env(safe-area-inset-bottom))] z-[85] inline-flex items-center",
        // Effects and interactive states
        "shadow-[0_10px_30px_-16px_rgba(0,0,0,.45)]",
      )}>
      {EXPERIENCES.map((experience) => {
        const isCurrent = experience === current;

        return (
          <a
            key={experience}
            href={buildExperienceHref(publicPath, experience)}
            aria-current={isCurrent ? "true" : undefined}
            onClick={(event) => handleClick(event, experience)}
            className={cn(
              // Size and spacing
              "min-h-[30px] px-3",
              // Text
              "text-(color:--xp-fg) no-underline hover:text-(color:--xp-on-bg)",
              // Border
              "rounded-full",
              // Layout
              "inline-flex items-center",
              // Effects and interactive states
              "transition-[background-color,color] duration-200",
              isCurrent && "bg-(--xp-on-bg) text-(color:--xp-on-fg) hover:text-(color:--xp-on-fg)",
            )}>
            {EXPERIENCE_LABELS[experience]}
          </a>
        );
      })}
    </nav>
  );
}
