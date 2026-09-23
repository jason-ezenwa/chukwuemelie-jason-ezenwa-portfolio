import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  HERO_LEDE,
  HERO_META,
  HERO_NAME_LINES,
  HERO_STATUS,
  PROFILE_LINKS,
} from "@/experiences/monograph/content";
import { yearOf } from "@/experiences/monograph/format";
import {
  CELL,
  DISPLAY,
  GRID,
  MONO,
  MONO_UP,
  TextLink,
  WRAP,
  motionClasses,
} from "@/experiences/monograph/primitives";
import { useFitText } from "@/experiences/monograph/use-fit-text";

/** Largest the fitted name may grow, in px */
const NAME_MAX_SIZE = 260;

/** Hero meta columns: stacked, halves at `sm`, even thirds at `lg` */
const META_COLUMNS = [
  "lg:col-[1/span_4]",
  "lg:col-[5/span_4]",
  "lg:col-[9/span_4]",
];

export default function HeroSection({ asOf }: { asOf: string }) {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useFitText(nameRef, NAME_MAX_SIZE);

  return (
    <section
      aria-labelledby="name"
      className={cn(
        WRAP,
        // Size and spacing
        "pt-[clamp(20px,3vw,40px)]",
      )}>
      <dl className={cn(GRID, MONO, "mono-rise gap-y-2.5")}>
        {HERO_META.map((item, index) => (
          <div
            key={item.term}
            className={cn(CELL, "sm:col-span-6", META_COLUMNS[index])}>
            <dt className="mono-line text-mono-mid">
              <span className={motionClasses(index)}>{item.term}</span>
            </dt>
            {item.details.map((detail, detailIndex) => (
              <dd key={detail} className="mono-line">
                <span className={motionClasses(index + detailIndex + 1)}>{detail}</span>
              </dd>
            ))}
          </div>
        ))}
        <div className={cn(CELL, "sm:col-span-6", META_COLUMNS[2])}>
          <dt className="mono-line text-mono-mid">
            <span className={motionClasses(2)}>{HERO_STATUS.term}</span>
          </dt>
          <dd className="mono-line">
            <span className={motionClasses(3)}>
              <span
                className={cn(
                  // Size and spacing
                  "gap-2",
                  // Layout
                  "inline-flex items-center",
                  // Status dot: a full circle with its border drawn inside
                  "before:box-border before:size-[9px] before:flex-none before:rounded-full before:border before:border-mono-ink before:bg-mono-signal",
                )}>
                {HERO_STATUS.detail}
              </span>
            </span>
          </dd>
        </div>
      </dl>

      <h1
        id="name"
        ref={nameRef}
        className={cn(
          DISPLAY,
          "mono-rise",
          // Size and spacing
          "mt-[clamp(28px,6vw,96px)]",
          // Text
          "text-[clamp(2.1rem,10.4vw,14rem)] leading-[0.84] tracking-[-0.035em] uppercase",
        )}>
        {HERO_NAME_LINES.map((line, index) => (
          <span key={line} className="mono-line" data-fit-line>
            <span className={motionClasses(index, 250)}>{line}</span>
          </span>
        ))}
      </h1>

      <div
        aria-hidden="true"
        className={cn(
          "mono-draw",
          motionClasses(0, 700),
          // Size and spacing
          "h-px mt-[clamp(24px,3vw,40px)]",
          // Background
          "bg-mono-ink",
        )}
      />

      <div
        className={cn(
          GRID,
          // Size and spacing
          "gap-y-7 pt-4 pb-[clamp(56px,9vw,140px)]",
        )}>
        <p
          className={cn(CELL, MONO, MONO_UP, "mono-fade text-mono-mid", motionClasses(0, 900))}>
          Index — {yearOf(asOf)}
        </p>
        <div
          className={cn(CELL, "mono-fade lg:col-[1/span_8]", motionClasses(0, 1000))}>
          <p
            className={cn(
              // Size and spacing
              "max-w-[30ch]",
              // Text
              "text-[clamp(1.25rem,2.3vw,2.1rem)] leading-[1.18] tracking-[-0.012em] font-normal",
            )}>
            {HERO_LEDE}
          </p>
          <p
            className={cn(
              // Size and spacing
              "gap-x-[22px] gap-y-2 mt-[22px]",
              // Text
              "font-mono-code text-[12px]",
              // Layout
              "flex flex-wrap",
            )}>
            {PROFILE_LINKS.map((link) => (
              <TextLink key={link.label} href={link.href} external>
                {link.label}
              </TextLink>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
