import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import ExperienceSwitcher from "@/experiences/experience-switcher";
import SiteHead from "@/experiences/site-head";
import type { PublicPath } from "@/experiences/experience";
import { archivo, plexMono } from "@/experiences/monograph/fonts";
import GridOverlay, { useGridOverlay } from "@/experiences/monograph/grid-overlay";
import MonographFooter from "@/experiences/monograph/monograph-footer";
import MonographHeader from "@/experiences/monograph/monograph-header";
import { useIsomorphicLayoutEffect } from "@/experiences/monograph/use-isomorphic-layout-effect";

/** Page backgrounds (`--mono-paper`) for the browser chrome */
const THEME_COLOR = { light: "#F1F0EC", dark: "#0E0E0D" };

interface MonographLayoutProps {
  canonicalPath: PublicPath;
  asOf: string;
  children: ReactNode;
}

export default function MonographLayout({
  canonicalPath,
  asOf,
  children,
}: MonographLayoutProps) {
  const { isVisible: isGridVisible, toggle: toggleGrid } = useGridOverlay();

  // D4 safety net: a client transition can land here from the other experience.
  useIsomorphicLayoutEffect(() => {
    document.documentElement.dataset.experience = "monograph";
  }, []);

  return (
    <>
      <SiteHead canonicalPath={canonicalPath} themeColor={THEME_COLOR} />
      <style jsx global>{`
        :root[data-experience="monograph"] {
          --mono-font-sans: ${archivo.style.fontFamily};
          --mono-font-code: ${plexMono.style.fontFamily};
        }
      `}</style>

      <a
        href="#main"
        className={cn(
          // Size and spacing
          "px-3 py-2",
          // Text
          "font-mono-code text-[12px] text-mono-paper no-underline",
          // Background
          "bg-mono-ink",
          // Layout
          "absolute left-(--mono-pad) -top-[100px] z-[100] focus:top-3",
        )}>
        Skip to content
      </a>

      <GridOverlay isVisible={isGridVisible} />

      <MonographHeader
        isGridVisible={isGridVisible}
        onToggleGrid={toggleGrid}
      />

      <main id="main">{children}</main>

      <MonographFooter asOf={asOf} />

      <ExperienceSwitcher current="monograph" />
    </>
  );
}
