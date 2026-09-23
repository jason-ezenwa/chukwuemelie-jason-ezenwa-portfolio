import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  RoastArrowRightIcon,
  RoastExternalIcon,
} from "@/experiences/roast/roast-icons";

const textLinkClassName = cn(
  // Size and spacing
  "gap-2 pb-1",
  // Text
  "font-roast-mono text-[.74rem] uppercase tracking-[.12em] text-roast-ink no-underline",
  // Border
  "border-b border-roast-line-strong",
  // Layout
  "inline-flex items-center",
  // Effects and interactive states
  "transition-[border-color,color] duration-200 hover:border-roast-accent hover:text-roast-accent-ink",
);

const iconClassName = cn(
  // Size and spacing
  "size-3",
  // Effects and interactive states
  "transition-transform duration-[250ms] group-hover/text-link:translate-x-[3px]",
);

interface RoastTextLinkProps {
  href: string;
  children: ReactNode;
  /** Opens in a new tab with the diagonal arrow */
  external?: boolean;
  className?: string;
}

export function RoastTextLink({
  href,
  children,
  external,
  className,
}: RoastTextLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className={cn("group/text-link", textLinkClassName, className)}>
        {children} <RoastExternalIcon className={iconClassName} />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn("group/text-link", textLinkClassName, className)}>
      {children} <RoastArrowRightIcon className={iconClassName} />
    </Link>
  );
}

/** Text-link look for use inside a larger link, e.g. a next-card. */
export function RoastTextLinkLabel({ children }: { children: ReactNode }) {
  return (
    <span className={textLinkClassName}>
      {children} <RoastArrowRightIcon className={iconClassName} />
    </span>
  );
}
