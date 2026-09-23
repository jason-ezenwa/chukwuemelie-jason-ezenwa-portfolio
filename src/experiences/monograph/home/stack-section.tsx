import { cn } from "@/lib/utils";
import { STACK } from "@/experiences/monograph/content";
import { SECTION } from "@/experiences/monograph/home/section";
import {
  GRID,
  MONO,
  MONO_UP,
  SectionHead,
} from "@/experiences/monograph/primitives";

export default function StackSection() {
  return (
    <section id="stack" aria-labelledby="stack-h" className={SECTION}>
      <SectionHead
        id="stack-h"
        title="Stack"
        sub={STACK.sub}
        count={STACK.count}
      />
      <div className={cn(GRID, "gap-y-8")}>
        {STACK.groups.map((group) => (
          <div
            key={group.name}
            className={cn(
              // Size and spacing
              "min-w-0 pt-3",
              // Border
              "border-t border-mono-rule",
              // Layout
              "col-span-12 sm:col-span-6 lg:col-span-3",
            )}>
            <h3 className={cn(MONO, MONO_UP, "mb-3.5 text-mono-mid")}>
              {group.name}
            </h3>
            <ul>
              {group.tools.map((tool) => (
                <li
                  key={tool}
                  className={cn(
                    // Text
                    "font-mono-sans font-stretch-112% font-semibold text-[clamp(1.25rem,2vw,1.85rem)] tracking-[-0.02em] leading-[1.2]",
                  )}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
