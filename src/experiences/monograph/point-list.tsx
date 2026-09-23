import { cn } from "@/lib/utils";

/** `.pts`: ruled list with an em-dash marker */
export function PointList({
  points,
  className,
}: {
  points: string[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {points.map((point) => (
        <li
          key={point}
          className={cn(
            // Size and spacing
            "py-2.5",
            // Text
            "text-base leading-[1.45]",
            // Border
            "border-t border-mono-rule last:border-b",
            // Layout
            "grid grid-cols-[2.2em_1fr]",
            // Marker
            "before:content-['—'] before:text-mono-mid",
          )}>
          {point}
        </li>
      ))}
    </ul>
  );
}
