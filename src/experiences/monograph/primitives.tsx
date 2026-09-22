import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* Shared Monograph building blocks. Class-string constants are the prototype's
   type and layout primitives (.wrap, .grid, .mono, .mono-up, .display). */

/** `.wrap`: page gutter and max measure */
export const WRAP = cn(
  // Size and spacing
  "w-full max-w-[1680px] mx-auto px-(--mono-pad)",
);

/** `.grid`: 12 columns. Children set their own column (full width by default via `CELL`). */
export const GRID = cn(
  // Size and spacing
  "gap-x-(--mono-gap)",
  // Layout
  "grid grid-cols-12",
);

/** Default grid child: full row, allowed to shrink */
export const CELL = cn(
  // Size and spacing
  "min-w-0",
  // Layout
  "col-span-full",
);

/** `.mono`: small monospaced label text */
export const MONO = cn(
  // Text
  "font-mono-code text-[11px] leading-[1.45] tracking-[0.02em] font-normal",
);

/** `.mono-up` on top of `MONO` */
export const MONO_UP = cn(
  // Text
  "uppercase tracking-[0.08em]",
);

/** `.display`: expanded heavy headline */
export const DISPLAY = cn(
  // Text
  "font-mono-sans font-stretch-125% font-extrabold tracking-[-0.02em] leading-[0.86]",
);

/** Animation offsets for `.mono-rise` lines and `.mono-fade`/`.mono-draw` blocks */
export function motionVars(index: number, delayMs = 0): CSSProperties {
  return { "--i": index, "--d": `${delayMs}ms` } as CSSProperties;
}

export function Arrow({ children }: { children: ReactNode }) {
  return (
    <span className="mono-arrow" aria-hidden="true">
      {children}
    </span>
  );
}

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** External links open in a new tab and get the ↗ arrow */
  external?: boolean;
  /** In-app route (next/link) rather than a plain anchor */
  internal?: boolean;
  arrow?: string;
}

/** `.u` link: hairline underline at rest, ink line draws in on hover */
export function TextLink({
  href,
  children,
  className,
  external = false,
  internal = false,
  arrow,
}: TextLinkProps) {
  const arrowGlyph = arrow ?? (external ? "↗" : undefined);
  const content = (
    <>
      {children}
      {arrowGlyph && (
        <>
          {" "}
          <Arrow>{arrowGlyph}</Arrow>
        </>
      )}
    </>
  );

  if (internal) {
    return (
      <Link href={href} className={cn("mono-u", className)}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={cn("mono-u", className)}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {content}
    </a>
  );
}

interface SectionHeadProps {
  id: string;
  title: string;
  sub: string;
  count: string;
}

/** `.sec-head`: ink rule, then title / subtitle / count on the grid */
export function SectionHead({ id, title, sub, count }: SectionHeadProps) {
  return (
    <div
      className={cn(
        GRID,
        // Size and spacing
        "gap-y-2 pt-3 mb-[clamp(32px,5vw,72px)]",
        // Border
        "border-t border-mono-ink",
      )}>
      <h2
        id={id}
        className={cn(
          // Size and spacing
          "min-w-0",
          // Text
          "font-mono-code text-[11px] font-medium tracking-[0.08em] uppercase",
          // Layout
          "col-span-6 lg:col-[1/span_3]",
        )}>
        {title}
      </h2>
      <p
        className={cn(
          MONO,
          // Text
          "text-mono-mid",
          // Layout
          "hidden lg:block lg:col-[4/span_6]",
        )}>
        {sub}
      </p>
      <p
        className={cn(
          MONO,
          // Size and spacing
          "min-w-0",
          // Text
          "text-right text-mono-mid",
          // Layout
          "col-span-6 lg:col-[10/span_3]",
        )}>
        {count}
      </p>
    </div>
  );
}
