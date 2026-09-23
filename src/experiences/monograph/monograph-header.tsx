import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { toPublicPath } from "@/experiences/experience";
import { NAV_LINKS } from "@/experiences/monograph/content";
import MonographThemeToggle from "@/experiences/monograph/monograph-theme-toggle";
import { GRID, MONO, WRAP } from "@/experiences/monograph/primitives";
import {
  HEADER_LABEL,
  TOOL_BUTTON,
} from "@/experiences/monograph/tool-button";

interface NavAnchorProps {
  href: string;
  className?: string;
  ariaCurrent?: "page";
  onClick?: () => void;
  children: ReactNode;
}

/** In-page hashes are plain anchors; routes go through next/link. */
function NavAnchor({
  href,
  className,
  ariaCurrent,
  onClick,
  children,
}: NavAnchorProps) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      aria-current={ariaCurrent}
      onClick={onClick}>
      {children}
    </Link>
  );
}

export default function MonographHeader() {
  const router = useRouter();
  const publicPath = toPublicPath(router.asPath);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);

    router.events.on("routeChangeStart", closeMenu);

    return () => router.events.off("routeChangeStart", closeMenu);
  }, [router.events]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        // Border
        "border-b border-mono-rule",
        // Background
        "bg-mono-paper",
        // Layout
        "sticky top-0 z-50",
        // Effects and interactive states
        "transition-[background-color,border-color] duration-400 ease-mono-out",
      )}>
      <div className={WRAP}>
        <div className={cn(GRID, "min-h-[52px] items-center")}>
          <Link
            href="/"
            aria-label="Chukwuemelie Jason Obumse, home"
            className={cn(
              // Size and spacing
              "min-w-0 gap-2.5",
              // Text
              "no-underline",
              // Layout
              "col-[1/span_6] md:col-[1/span_4] lg:col-[1/span_3] flex items-baseline",
            )}>
            <b
              className={cn(
                // Text
                "font-mono-sans font-stretch-125% font-extrabold text-[15px] tracking-[-0.01em] whitespace-nowrap",
              )}>
              C.J. Obumse
            </b>
            <span
              className={cn(
                MONO,
                // Text
                "text-mono-mid whitespace-nowrap",
                // Layout
                "hidden md:inline",
              )}>
              Software Engineer
            </span>
          </Link>

          <div
            className={cn(
              // Size and spacing
              "min-w-0 gap-4 md:gap-6",
              // Layout
              "col-[7/-1] md:col-[5/-1] lg:col-[4/-1] flex justify-end items-center",
            )}>
            <nav
              aria-label="Primary"
              className={cn(
                // Size and spacing
                "gap-6 mr-auto",
                // Layout
                "hidden md:flex",
              )}>
              {NAV_LINKS.map((link) => (
                <NavAnchor
                  key={link.href}
                  href={link.href}
                  ariaCurrent={publicPath === link.href ? "page" : undefined}
                  className={cn(HEADER_LABEL, "mono-u")}>
                  {link.label}
                </NavAnchor>
              ))}
            </nav>

            <MonographThemeToggle />

            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="monograph-mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className={cn(TOOL_BUTTON, "group md:hidden")}>
              <span
                aria-hidden="true"
                className={cn(
                  // Size and spacing
                  "w-4 gap-1",
                  // Layout
                  "inline-grid",
                )}>
                <i
                  className={cn(
                    // Size and spacing
                    "h-px",
                    // Background
                    "bg-mono-ink",
                    // Layout
                    "block",
                    // Effects and interactive states
                    "transition-transform duration-350 ease-mono-out",
                    "group-aria-expanded:translate-y-[2.5px] group-aria-expanded:rotate-45",
                  )}
                />
                <i
                  className={cn(
                    // Size and spacing
                    "h-px",
                    // Background
                    "bg-mono-ink",
                    // Layout
                    "block",
                    // Effects and interactive states
                    "transition-transform duration-350 ease-mono-out",
                    "group-aria-expanded:-translate-y-[2.5px] group-aria-expanded:-rotate-45",
                  )}
                />
              </span>
              <span>Menu</span>
            </button>
          </div>
        </div>

        <nav
          id="monograph-mobile-menu"
          aria-label="Mobile"
          hidden={!isMenuOpen}
          className={cn(
            // Size and spacing
            "pt-2 pb-6",
            // Border
            "border-t border-mono-rule",
            // Layout
            "md:hidden!",
          )}>
          {NAV_LINKS.map((link) => (
            <NavAnchor
              key={link.href}
              href={link.href}
              ariaCurrent={publicPath === link.href ? "page" : undefined}
              onClick={closeMenu}
              className={cn(
                // Size and spacing
                "py-3.5",
                // Text
                "font-mono-sans font-stretch-125% font-bold text-[1.75rem] tracking-[-0.02em] leading-none no-underline",
                // Border
                "border-b border-mono-rule",
                // Layout
                "flex justify-between items-baseline",
              )}>
              {link.label}
              <span className={cn(MONO, "text-mono-mid")}>{link.note}</span>
            </NavAnchor>
          ))}
        </nav>
      </div>
    </header>
  );
}
