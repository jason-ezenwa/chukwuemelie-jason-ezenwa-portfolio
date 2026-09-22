import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { RoastArrowRightIcon } from "@/experiences/roast/roast-icons";

const buttonClassName = cn(
  "group/button",
  // Size and spacing
  "min-h-12 gap-2.5 px-5",
  // Text
  "font-roast-mono text-[.74rem] font-medium uppercase tracking-[.12em] no-underline",
  // Border
  "border border-transparent rounded-[2px]",
  // Layout
  "inline-flex items-center justify-center",
  // Effects and interactive states
  "transition-[transform,background-color,border-color,color] duration-200 active:translate-y-px",
);

const variantClassNames = {
  solid: cn(
    // Text
    "text-roast-btn-ink hover:text-roast-btn-ink",
    // Background
    "bg-roast-btn-bg hover:bg-roast-accent-ink",
  ),
  line: cn(
    // Text
    "text-roast-ink hover:text-roast-accent-ink",
    // Border
    "border-roast-line-strong hover:border-roast-accent",
  ),
};

interface RoastButtonProps {
  href: string;
  variant: keyof typeof variantClassNames;
  children: ReactNode;
  /** Opens in a new tab */
  external?: boolean;
  /** Trailing arrow */
  arrow?: boolean;
  className?: string;
}

export default function RoastButton({
  href,
  variant,
  children,
  external,
  arrow,
  className,
}: RoastButtonProps) {
  const classes = cn(buttonClassName, variantClassNames[variant], className);
  const content = (
    <>
      {children}
      {arrow && (
        <RoastArrowRightIcon
          className={cn(
            // Size and spacing
            "size-3.5",
            // Effects and interactive states
            "transition-transform duration-[250ms] group-hover/button:translate-x-[3px]",
          )}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
