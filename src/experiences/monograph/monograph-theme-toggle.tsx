import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { TOOL_BUTTON } from "@/experiences/monograph/tool-button";

/**
 * Two-state Light/Dark toggle. Both labels are rendered and CSS shows the right one
 * (the mode it switches to), so the first paint is correct without a hydration mismatch.
 */
export default function MonographThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const ariaLabel = !isMounted
    ? "Toggle colour theme"
    : isDark
      ? "Switch to light theme"
      : "Switch to dark theme";

  return (
    <button
      type="button"
      className={TOOL_BUTTON}
      aria-label={ariaLabel}
      onClick={() => setTheme(isDark ? "light" : "dark")}>
      <span
        aria-hidden="true"
        className={cn(
          // Size and spacing
          "size-[9px]",
          // Border
          "border border-mono-ink rounded-full",
          // Background
          "bg-[linear-gradient(90deg,var(--mono-ink)_50%,transparent_50%)]",
        )}
      />
      <span className="mono-label-to-dark">Dark</span>
      <span className="mono-label-to-light">Light</span>
    </button>
  );
}
