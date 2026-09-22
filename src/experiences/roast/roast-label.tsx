import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { RoastKicker } from "@/experiences/roast/roast-kicker";

/** The bag label: the core Roast component. */
export function RoastLabel({
  as: Component = "div",
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
  style?: CSSProperties;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <Component
      className={cn(
        // Border
        "border border-roast-line-strong",
        // Background
        "bg-roast-surface",
        // Layout
        "relative flex flex-col",
        // Effects and interactive states
        "shadow-(--roast-shadow)",
        className,
      )}
      {...rest}>
      {children}
    </Component>
  );
}

/** Copper foil strip on featured labels */
export function RoastLabelFoil() {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "roast-copper",
        // Size and spacing
        "h-0.5",
      )}
    />
  );
}

/** Crimped seal and the header row with the one-way valve */
export function RoastLabelTop({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="roast-label-seal" aria-hidden="true" />
      <div
        className={cn(
          // Size and spacing
          "gap-3 px-[18px] py-3",
          // Border
          "border-b border-roast-line",
          // Layout
          "flex items-center justify-between",
        )}>
        <RoastKicker as="span">{children}</RoastKicker>
        <span
          aria-hidden="true"
          className={cn(
            "roast-valve",
            // Size and spacing
            "size-5",
            // Border
            "border border-roast-line-strong rounded-full",
            // Layout
            "relative flex-none",
          )}
        />
      </div>
    </>
  );
}

export function RoastLabelFields({ children }: { children: ReactNode }) {
  return <dl className="grid">{children}</dl>;
}

export function RoastLabelField({
  term,
  mono,
  children,
}: {
  term: string;
  /** Renders the value in the small mono style used for stacks */
  mono?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        // Size and spacing
        "gap-3.5 px-[18px] py-[11px]",
        // Border
        "border-b border-roast-line",
        // Layout
        "grid grid-cols-[6.4rem_minmax(0,1fr)] items-baseline",
      )}>
      <dt
        className={cn(
          // Text
          "font-roast-mono text-[.66rem] uppercase tracking-[.14em] text-roast-muted",
        )}>
        {term}
      </dt>
      <dd
        className={cn(
          // Text
          "text-base leading-[1.45]",
          mono &&
            "font-roast-mono text-[.78rem] leading-[1.7] tracking-[.02em] text-roast-ink-2",
        )}>
        {children}
      </dd>
    </div>
  );
}

/** Tenure bar and caption, scaled so the longest tenure fills the bar. */
export function RoastTenure({
  months,
  scale,
  caption,
}: {
  months: number;
  scale: number;
  caption: string;
}) {
  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "roast-tenure",
          // Size and spacing
          "mt-2 h-[3px] max-w-[220px]",
          // Background
          "bg-roast-line",
          // Layout
          "relative block",
        )}
        style={{ "--m": months, "--scale": scale } as CSSProperties}>
        <i />
      </span>
      <span
        className={cn(
          // Size and spacing
          "mt-[5px]",
          // Text
          "font-roast-mono text-[.66rem] tracking-[.06em] text-roast-muted",
          // Layout
          "block",
        )}>
        {caption}
      </span>
    </>
  );
}

/** Bulleted notes with copper dashes */
export function RoastNotes({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "roast-notes",
        // Size and spacing
        "px-[18px] pt-4 pb-1.5",
        className,
      )}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            // Size and spacing
            "pb-3 pl-[18px]",
            // Text
            "text-base leading-[1.45] text-roast-ink-2",
            // Layout
            "relative",
          )}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function RoastLabelFoot({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        // Size and spacing
        "mt-auto gap-3 px-[18px] py-3",
        // Layout
        "flex flex-wrap items-center justify-between",
        className,
      )}>
      {children}
    </div>
  );
}

/** Origin (big condensed display) and title (italic serif), as on the lot cards */
export function RoastLotName({
  as: Component = "h3",
  id,
  origin,
  title,
  className,
}: {
  as?: ElementType;
  id?: string;
  origin: string;
  title: string;
  className?: string;
}) {
  return (
    <Component
      id={id}
      className={cn(
        // Size and spacing
        "px-[18px] pt-[22px] pb-[18px]",
        // Border
        "border-b border-roast-line",
        className,
      )}>
      <span
        className={cn(
          // Text
          "font-roast-display text-[clamp(2.2rem,5vw,2.9rem)] font-extrabold font-stretch-78% leading-[.95] tracking-[-.03em] [font-variation-settings:'opsz'_96]",
          // Layout
          "block",
        )}>
        {origin}
      </span>
      <span
        className={cn(
          // Size and spacing
          "mt-2.5",
          // Text
          "font-roast-body text-[1.15rem] font-normal italic leading-[1.3] text-roast-ink-2",
          // Layout
          "block",
        )}>
        {title}
      </span>
    </Component>
  );
}
