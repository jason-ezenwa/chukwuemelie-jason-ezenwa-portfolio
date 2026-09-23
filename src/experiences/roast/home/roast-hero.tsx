import { cn } from "@/lib/utils";
import { ROAST_HERO } from "@/experiences/roast/content";
import RoastButton from "@/experiences/roast/roast-button";
import RoastProfile from "@/experiences/roast/home/roast-profile";
import { RoastKicker } from "@/experiences/roast/roast-kicker";
import {
  RoastLabel,
  RoastLabelField,
  RoastLabelFields,
  RoastLabelFoot,
  RoastLabelTop,
} from "@/experiences/roast/roast-label";
import { roastWrapClassName } from "@/experiences/roast/roast-section";
import { RoastTextLink } from "@/experiences/roast/roast-text-link";
import { useFitName } from "@/experiences/roast/use-fit-name";


export default function RoastHero() {
  const firstNameRef = useFitName<HTMLSpanElement>();
  const { label } = ROAST_HERO;

  return (
    <section
      aria-labelledby="hero-name"
      className={cn(
        roastWrapClassName,
        // Size and spacing
        "pt-9 pb-6",
      )}>
      <div
        className={cn(
          // Size and spacing
          "gap-x-6 gap-y-1.5 pb-[18px]",
          // Border
          "border-b border-roast-line",
          // Layout
          "flex flex-wrap justify-between",
        )}>
        <RoastKicker>
          Lot <b>{ROAST_HERO.lotCode}</b> · {ROAST_HERO.since}
        </RoastKicker>
        <RoastKicker>{ROAST_HERO.role}</RoastKicker>
      </div>

      <h1
        id="hero-name"
        tabIndex={-1}
        className={cn(
          // Size and spacing
          "mt-7",
          // Text
          "font-roast-display leading-[.86] tracking-[-.035em]",
        )}>
        <span
          ref={firstNameRef}
          className={cn(
            "roast-anim-roast",
            // Text
            "text-[clamp(3rem,14vw,11.25rem)] font-extrabold font-stretch-75% text-roast-ink [font-variation-settings:'opsz'_96]",
            // Layout
            "block",
          )}>
          {ROAST_HERO.firstName}
        </span>
        <span
          className={cn(
            "roast-anim-rise roast-delay-350",
            // Size and spacing
            "mt-[.08em] md:pl-[1.1em]",
            // Text
            "text-[clamp(2.1rem,9.2vw,7rem)] font-extralight font-stretch-100% tracking-[-.03em] text-roast-ink-2 [font-variation-settings:'opsz'_96]",
            // Layout
            "block",
          )}>
          {ROAST_HERO.lastNames}
        </span>
      </h1>

      <div
        className={cn(
          // Size and spacing
          "mt-9 gap-7 lg:gap-14",
          // Layout
          "grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end",
        )}>
        <div>
          <p
            className={cn(
              "roast-anim-rise roast-delay-500",
              // Size and spacing
              "max-w-[34ch]",
              // Text
              "text-[clamp(1.2rem,2.4vw,1.55rem)] font-[350] leading-[1.45] text-roast-ink-2",
            )}>
            {ROAST_HERO.lede.before}
            <em className="italic text-roast-ink">{ROAST_HERO.lede.em}</em>
            {ROAST_HERO.lede.after}
          </p>
          <div
            className={cn(
              // Size and spacing
              "mt-[26px] gap-2.5",
              // Layout
              "flex flex-wrap",
            )}>
            <RoastButton
              href={ROAST_HERO.primaryCta.href}
              variant="solid"
              arrow
              className="basis-full min-[520px]:basis-auto min-[520px]:flex-none">
              {ROAST_HERO.primaryCta.label}
            </RoastButton>
            <RoastButton
              href={ROAST_HERO.secondaryCta.href}
              variant="line"
              external
              className="basis-full min-[520px]:basis-auto min-[520px]:flex-none">
              {ROAST_HERO.secondaryCta.label}
            </RoastButton>
          </div>
        </div>

        <RoastLabel
          as="aside"
          aria-label="Profile label"
          className="roast-anim-rise roast-delay-650">
          <RoastLabelTop>{label.kicker}</RoastLabelTop>
          <div
            className={cn(
              // Size and spacing
              "px-[18px] pt-[18px] pb-3.5",
              // Border
              "border-b border-roast-line",
            )}>
            <p
              className={cn(
                // Text
                "font-roast-display text-[1.6rem] font-bold font-stretch-85% leading-none tracking-[-.01em]",
              )}>
              {label.title}
            </p>
            <p
              className={cn(
                // Size and spacing
                "mt-1.5",
                // Text
                "italic text-roast-ink-2",
              )}>
              {label.subtitle}
            </p>
          </div>
          <RoastLabelFields>
            {label.fields.map((field) => (
              <RoastLabelField key={field.term} term={field.term}>
                {field.value}
              </RoastLabelField>
            ))}
            {label.monoFields.map((field) => (
              <RoastLabelField key={field.term} term={field.term} mono>
                {field.value}
              </RoastLabelField>
            ))}
          </RoastLabelFields>
          <RoastLabelFoot>
            <RoastKicker as="span">{label.footKicker}</RoastKicker>
            <RoastTextLink href={label.footLink.href} external>
              {label.footLink.label}
            </RoastTextLink>
          </RoastLabelFoot>
        </RoastLabel>
      </div>

      <RoastProfile />
    </section>
  );
}
