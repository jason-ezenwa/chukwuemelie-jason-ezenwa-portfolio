import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GRID, WRAP } from "@/experiences/monograph/primitives";

const COLUMNS = Array.from({ length: 12 }, (_, index) => index);

/** Grid overlay state, toggled by the header button and the G key (ignored in fields and with modifiers). */
export function useGridOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = useCallback(() => setIsVisible((visible) => !visible), []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isField =
        !!target &&
        (/^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) ||
          target.isContentEditable);

      if (event.metaKey || event.ctrlKey || event.altKey || isField) {
        return;
      }

      if (event.key === "g" || event.key === "G") {
        toggle();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  return { isVisible, toggle };
}

/** The 12-column grid, drawn over the page */
export default function GridOverlay({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        // Layout
        "fixed inset-0 z-[90]",
        // Effects and interactive states
        "pointer-events-none opacity-0 transition-opacity duration-300 ease-mono-out",
        isVisible && "opacity-100",
      )}>
      <div className={cn(WRAP, "h-full")}>
        <div className={cn(GRID, "h-full")}>
          {COLUMNS.map((column) => (
            <span
              key={column}
              className={cn(
                // Border
                "border-x border-mono-grid-edge",
                // Background
                "bg-mono-grid-tint",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
