import { cn } from "@/lib/utils";
import { WRAP } from "@/experiences/monograph/primitives";

/** `.section`: home section rhythm; anchors land below the sticky header */
export const SECTION = cn(
  WRAP,
  // Size and spacing
  "pt-[clamp(56px,8vw,128px)]",
  // Layout
  "scroll-mt-[60px]",
);
