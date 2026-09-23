import { useEffect, useLayoutEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import ExperienceSwitcher from "@/experiences/experience-switcher";
import { ROAST_FONT_VARIABLES } from "@/experiences/roast/fonts";
import RoastContact from "@/experiences/roast/roast-contact";
import RoastHeader from "@/experiences/roast/roast-header";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

interface RoastLayoutProps {
  asOf: string;
  children: ReactNode;
}

export default function RoastLayout({ asOf, children }: RoastLayoutProps) {
  // Safety net for a client transition that lands here after another tab changed the cookie.
  useIsomorphicLayoutEffect(() => {
    document.documentElement.dataset.experience = "roast";
  }, []);

  return (
    <>
      <style jsx global>{`
        ${ROAST_FONT_VARIABLES}
      `}</style>
      <a
        href="#main"
        className={cn(
          // Size and spacing
          "px-3.5 py-2.5",
          // Text
          "font-roast-mono text-[.8rem] tracking-[.02em] text-roast-btn-ink hover:text-roast-btn-ink",
          // Background
          "bg-roast-btn-bg",
          // Layout
          "absolute -left-[999px] top-2 z-[200] focus:left-4",
        )}>
        Skip to content
      </a>
      <RoastHeader />
      <main id="main" tabIndex={-1}>
        {children}
        <RoastContact asOf={asOf} />
      </main>
      <ExperienceSwitcher current="roast" />
    </>
  );
}
