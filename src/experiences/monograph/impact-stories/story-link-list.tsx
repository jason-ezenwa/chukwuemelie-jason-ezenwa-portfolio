import { cn } from "@/lib/utils";
import type { ImpactStory } from "@/content/impact-stories";
import { formatPeriod } from "@/experiences/monograph/format";
import { Arrow, MONO, MONO_UP } from "@/experiences/monograph/primitives";

interface StoryLinkListProps {
  label: string;
  kicker: string;
  stories: ImpactStory[];
  className?: string;
}

/** `.next`: large ruled links to stories on this page (period, company, title) */
export default function StoryLinkList({
  label,
  kicker,
  stories,
  className,
}: StoryLinkListProps) {
  return (
    <nav
      aria-label={label}
      className={cn("border-t border-mono-ink", className)}>
      <p className={cn(MONO, MONO_UP, "pt-3 text-mono-mid")}>{kicker}</p>
      {stories.map((story) => (
        <a
          key={story.id}
          href={`#${story.id}`}
          className={cn(
            "group",
            // Size and spacing
            "gap-x-(--mono-gap) gap-y-2 pt-[22px] pb-[26px]",
            // Text
            "no-underline",
            // Border
            "border-b border-mono-rule",
            // Layout
            "grid grid-cols-12",
          )}>
          <span
            className={cn(
              MONO,
              MONO_UP,
              // Text
              "text-mono-mid",
              // Layout
              "col-span-full lg:col-[1/span_2]",
            )}>
            {formatPeriod(story.roles)}
          </span>
          <span
            className={cn(
              // Size and spacing
              "min-w-0",
              // Text
              "font-mono-sans font-stretch-125% font-extrabold text-[clamp(2rem,6.5vw,6.5rem)] leading-[0.88] tracking-[-0.045em]",
              // Layout
              "col-span-full lg:col-[3/span_7]",
              // Effects and interactive states
              "transition-transform duration-600 ease-mono-out group-hover:translate-x-[0.18em] group-focus-visible:translate-x-[0.18em]",
            )}>
            {story.company} <Arrow>→</Arrow>
          </span>
          <span
            className={cn(
              MONO,
              // Layout
              "col-span-full lg:col-[10/span_3] lg:self-end",
            )}>
            {story.title}
          </span>
        </a>
      ))}
    </nav>
  );
}
