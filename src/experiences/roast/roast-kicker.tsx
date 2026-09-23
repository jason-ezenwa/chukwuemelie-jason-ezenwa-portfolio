import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { RoastKickerCopy } from "@/experiences/roast/content";

interface RoastKickerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Mono, uppercase eyebrow. Any `<b>` inside is copper. */
export function RoastKicker({
  as: Component = "p",
  className,
  children,
}: RoastKickerProps) {
  return (
    <Component
      className={cn(
        "roast-kicker",
        // Text
        "font-roast-mono text-[.72rem] font-medium uppercase leading-[1.5] tracking-[.14em] text-roast-muted",
        className,
      )}>
      {children}
    </Component>
  );
}

/** `lead · <b>bold</b>` */
export function RoastKickerText({ copy }: { copy: RoastKickerCopy }) {
  return (
    <>
      {copy.lead} · <b>{copy.bold}</b>
    </>
  );
}
