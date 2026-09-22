import { cn } from "@/lib/utils";
import { WRITING } from "@/experiences/monograph/content";
import { SECTION } from "@/experiences/monograph/home/section";
import {
  CELL,
  GRID,
  MONO,
  MONO_UP,
  SectionHead,
} from "@/experiences/monograph/primitives";

export default function WritingSection() {
  return (
    <section id="writing" aria-labelledby="writing-h" className={SECTION}>
      <SectionHead
        id="writing-h"
        title="Writing"
        sub={WRITING.sub}
        count={WRITING.count}
      />
      <ol className="border-t border-mono-ink">
        {WRITING.posts.map((post) => (
          <li key={post.id} className="border-b border-mono-rule">
            <a
              href={WRITING.urls[post.id]}
              target="_blank"
              rel="noopener"
              className={cn(
                GRID,
                "group",
                // Size and spacing
                "gap-y-1.5 pt-[18px] pb-5 lg:pt-[22px] lg:pb-6",
                // Text
                "no-underline hover:text-mono-paper focus-visible:text-mono-paper",
                // Layout
                "relative isolate lg:items-baseline",
                // Ink fill rises from the baseline on hover
                "before:absolute before:inset-y-0 before:-inset-x-(--mono-pad) before:-z-10 before:bg-mono-ink",
                "before:origin-bottom before:scale-y-0 before:transition-transform before:duration-500 before:ease-mono-out",
                "hover:before:scale-y-100 focus-visible:before:scale-y-100",
                // Effects and interactive states
                "transition-colors duration-450 ease-mono-out focus-visible:outline-offset-[-2px]",
              )}>
              <span
                className={cn(
                  CELL,
                  MONO,
                  MONO_UP,
                  // Text
                  "text-mono-mid group-hover:text-inherit group-focus-visible:text-inherit",
                  // Layout
                  "lg:col-[1/span_2]",
                  // Effects and interactive states
                  "transition-colors duration-450 ease-mono-out",
                )}>
                {post.topic}
              </span>
              <span
                className={cn(
                  CELL,
                  // Text
                  "text-[clamp(1.25rem,2.4vw,2.25rem)] font-medium tracking-[-0.02em] leading-[1.1]",
                  // Layout
                  "lg:col-[3/span_8]",
                  // Effects and interactive states
                  "transition-transform duration-500 ease-mono-out lg:group-hover:translate-x-[0.5em] lg:group-focus-visible:translate-x-[0.5em]",
                )}>
                {post.title}
                {post.excerpt && (
                  <span
                    className={cn(
                      // Size and spacing
                      "max-w-[60ch] mt-2",
                      // Text
                      "text-[0.95rem] font-normal tracking-normal text-mono-mid group-hover:text-inherit group-focus-visible:text-inherit",
                      // Layout
                      "block",
                    )}>
                    {post.excerpt}
                  </span>
                )}
              </span>
              <span
                className={cn(
                  CELL,
                  MONO,
                  // Layout
                  "lg:col-[11/span_2] lg:text-right",
                  // Effects and interactive states
                  "lg:opacity-0 lg:-translate-x-3 lg:transition-[opacity,translate] lg:duration-500 lg:ease-mono-out",
                  "lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus-visible:opacity-100 lg:group-focus-visible:translate-x-0",
                )}>
                {post.publication} ↗
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
