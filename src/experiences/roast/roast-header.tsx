import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { toPublicPath } from "@/experiences/experience";
import { ROAST_BRAND, ROAST_NAV } from "@/experiences/roast/content";
import { RoastBrandSeal } from "@/experiences/roast/roast-icons";
import RoastThemeToggle, {
  roastIconButtonClassName,
} from "@/experiences/roast/roast-theme-toggle";
import { roastWrapClassName } from "@/experiences/roast/roast-section";

const NAV_ID = "roast-site-nav";

export default function RoastHeader() {
  const router = useRouter();
  const publicPath = toPublicPath(router.asPath);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        // Border
        "border-b border-roast-line",
        // Background
        "bg-roast-bg-glass",
        // Layout
        "sticky top-0 z-50",
        // Effects and interactive states
        "backdrop-blur-[12px] backdrop-saturate-[1.2]",
      )}>
      <div
        className={cn(
          roastWrapClassName,
          // Size and spacing
          "h-16 gap-3",
          // Layout
          "flex items-center justify-between",
        )}>
        <Link
          href="/"
          aria-label={ROAST_BRAND.ariaLabel}
          className={cn(
            // Size and spacing
            "gap-2.5",
            // Text
            "text-roast-ink no-underline hover:text-roast-accent-ink",
            // Layout
            "flex items-center",
          )}>
          <RoastBrandSeal className="size-[34px] flex-none" />
          <span>
            <span
              className={cn(
                // Text
                "font-roast-display text-[1.05rem] font-bold font-stretch-85% leading-none tracking-[-.01em]",
                // Layout
                "block",
              )}>
              {ROAST_BRAND.name}
            </span>
            <span
              className={cn(
                // Size and spacing
                "mt-1.5",
                // Text
                "font-roast-mono text-[.62rem] font-normal uppercase tracking-[.14em] text-roast-muted",
                // Layout
                "block",
              )}>
              {ROAST_BRAND.subtitle}
            </span>
          </span>
        </Link>

        <nav
          id={NAV_ID}
          aria-label="Primary"
          className={cn(
            // Size and spacing
            "px-4 pt-2 pb-[18px] lg:p-0",
            // Border
            "border-b border-roast-line-strong lg:border-0",
            // Background
            "bg-roast-bg lg:bg-transparent",
            // Layout
            "absolute inset-x-0 top-16 lg:static lg:block",
            isMenuOpen ? "block" : "hidden",
          )}>
          <ul className="grid lg:flex lg:gap-[26px]">
            {ROAST_NAV.map((item) => {
              const isCurrent = item.href === publicPath;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "roast-nav-link",
                      // Size and spacing
                      "py-3.5 lg:py-1.5",
                      // Text
                      "font-roast-display text-[1.35rem] font-medium font-stretch-90% no-underline",
                      "lg:font-roast-mono lg:text-[.72rem] lg:font-medium lg:font-stretch-100% lg:uppercase lg:tracking-[.12em] lg:text-roast-ink-2",
                      "aria-[current=page]:text-roast-accent-ink lg:aria-[current=page]:text-roast-accent-ink",
                      // Border
                      "border-b border-roast-line lg:border-0",
                      // Layout
                      "relative flex items-baseline justify-between",
                    )}>
                    {item.label}{" "}
                    <span
                      className={cn(
                        // Text
                        "font-roast-mono text-[.7rem] tracking-[.02em] text-roast-muted",
                        // Layout
                        "lg:hidden",
                      )}>
                      {item.note}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={cn(
            // Size and spacing
            "gap-2",
            // Layout
            "flex items-center",
          )}>
          <RoastThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={NAV_ID}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className={cn(roastIconButtonClassName, "lg:hidden")}>
            <span
              aria-hidden="true"
              className={cn(
                "roast-menu-lines",
                // Size and spacing
                "w-4 gap-1",
                // Layout
                "grid",
              )}>
              <i />
              <i />
            </span>
            <span>Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
