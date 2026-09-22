import { cn } from "@/lib/utils";

/** `.tool-btn` / `.nav a`: mono uppercase header controls */
export const HEADER_LABEL = cn(
  // Text
  "font-mono-code text-[11px] tracking-[0.08em] uppercase",
);

export const TOOL_BUTTON = cn(
  HEADER_LABEL,
  // Size and spacing
  "gap-1.5 py-1.5",
  // Layout
  "inline-flex items-center",
  // Effects and interactive states
  "cursor-pointer",
);
