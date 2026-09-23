import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { RoastThemeIcon } from "@/experiences/roast/roast-icons";

export const roastIconButtonClassName = cn(
  // Size and spacing
  "h-[38px] gap-2 px-3",
  // Text
  "font-roast-mono text-[.7rem] uppercase tracking-[.12em] text-roast-ink",
  // Border
  "border border-roast-line-strong rounded-full",
  // Background
  "bg-transparent",
  // Layout
  "inline-flex items-center",
  // Effects and interactive states
  "cursor-pointer transition-[border-color,color] duration-200 hover:border-roast-accent hover:text-roast-accent-ink",
);

/**
 * Two-state Crema/Espresso toggle. The label is picked by CSS from `[data-theme]`
 * so it is right on first paint; the specific aria-label is set after mount.
 */
export default function RoastThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const ariaLabel = !mounted
    ? "Switch theme"
    : isDark
      ? "Switch to light theme (crema)"
      : "Switch to dark theme (espresso)";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={roastIconButtonClassName}>
      <RoastThemeIcon className="size-4 flex-none" />
      <span className="hidden min-[520px]:inline">
        <span className="roast-when-dark">Crema</span>
        <span className="roast-when-light">Espresso</span>
      </span>
    </button>
  );
}
