import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { EMAIL_ADDRESS, EMAIL_URL } from "@/utils/constants";
import { CONTACT, PROFILE_LINKS } from "@/experiences/monograph/content";
import { yearOf } from "@/experiences/monograph/format";
import {
  CELL,
  DISPLAY,
  GRID,
  MONO,
  MONO_UP,
  TextLink,
  WRAP,
} from "@/experiences/monograph/primitives";

/** Contact block and colophon, shared by both Monograph pages */
export default function MonographFooter({ asOf }: { asOf: string }) {
  return (
    <footer className={WRAP}>
      <section
        id="contact"
        aria-labelledby="contact-h"
        className={cn(
          GRID,
          // Size and spacing
          "pt-[clamp(72px,10vw,160px)] pb-[clamp(32px,4vw,56px)]",
          // Layout
          "scroll-mt-16",
        )}>
        <p
          className={cn(
            CELL,
            MONO,
            MONO_UP,
            // Size and spacing
            "mb-5",
            // Text
            "text-mono-mid",
            // Layout
            "lg:col-[1/span_3]",
          )}>
          {CONTACT.kicker}
        </p>
        <h2
          id="contact-h"
          className={cn(
            CELL,
            DISPLAY,
            // Text
            "text-[clamp(2.6rem,11vw,11rem)] leading-[0.84] tracking-[-0.01em]",
          )}>
          {CONTACT.headingLines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h2>
        <p
          className={cn(
            CELL,
            // Size and spacing
            "mt-[clamp(28px,4vw,56px)]",
            // Text
            "font-mono-sans font-stretch-100% font-medium text-[clamp(1.05rem,3.2vw,2.8rem)] tracking-[-0.02em] leading-[1.1] wrap-anywhere",
            // Layout
            "lg:col-[1/span_9]",
          )}>
          <TextLink href={EMAIL_URL}>{EMAIL_ADDRESS}</TextLink>
        </p>
        <p
          className={cn(
            CELL,
            // Size and spacing
            "gap-x-7 gap-y-2.5 mt-6",
            // Text
            "font-mono-code text-[12px]",
            // Layout
            "flex flex-wrap lg:col-[10/span_3] lg:flex-col lg:self-end",
          )}>
          {PROFILE_LINKS.map((link) => (
            <TextLink key={link.label} href={link.href} external>
              {link.label}
            </TextLink>
          ))}
        </p>
      </section>

      <div
        className={cn(
          GRID,
          MONO,
          // Size and spacing
          "gap-y-2 pt-3.5 pb-[clamp(72px,8vw,96px)]",
          // Text
          "text-mono-mid",
          // Border
          "border-t border-mono-ink",
        )}>
        <p className={cn(CELL, "md:col-[1/span_4]")}>
          © {yearOf(asOf)} Chukwuemelie Jason Obumse
        </p>
        <p className={cn(CELL, "md:col-[5/span_8] md:text-right")}>
          {CONTACT.colophon}
        </p>
      </div>
    </footer>
  );
}
