import { cn } from "@/lib/utils";
import type { ImpactStory } from "@/content/impact-stories";
import {
  IMPACT_STORIES_PAGE,
  STORY_FRAMING,
} from "@/experiences/monograph/content";
import { formatPeriod, formatRoles } from "@/experiences/monograph/format";
import ContributionList, {
  BODY_P,
} from "@/experiences/monograph/impact-stories/contribution-list";
import { PointList } from "@/experiences/monograph/point-list";
import {
  CELL,
  DISPLAY,
  GRID,
  MONO,
  MONO_UP,
  TextLink,
} from "@/experiences/monograph/primitives";

const DEFAULT_SPLIT_INDEX = 2;

/** `.cs-title` */
export const CS_TITLE = cn(
  CELL,
  DISPLAY,
  // Text
  "text-[clamp(2.3rem,8.2vw,9rem)] leading-[0.86] tracking-[-0.04em]",
);

const SIDENOTE = cn(CELL, MONO, "lg:col-[1/span_3]");

const ARTICLE = cn(CELL, "lg:col-[5/span_7]");

interface SidenoteRow {
  term: string;
  detail: string;
  href?: string;
}

function Sidenote({ rows }: { rows: SidenoteRow[] }) {
  return (
    <aside
      aria-label="Project details"
      className={cn(SIDENOTE, "lg:sticky lg:top-[76px]")}>
      <dl
        className={cn(
          // Size and spacing
          "gap-x-(--mono-gap)",
          // Layout
          "grid grid-cols-2 lg:grid-cols-1",
        )}>
        {rows.map((row) => (
          <div
            key={row.term}
            className={cn(
              // Size and spacing
              "min-w-0 pt-2.5 pb-3.5",
              // Border
              "border-t border-mono-rule",
            )}>
            <dt className={cn(MONO_UP, "mb-1 text-mono-mid")}>{row.term}</dt>
            <dd className="text-[0.95rem] leading-[1.35]">
              {row.href ? (
                <TextLink href={row.href} external>
                  {row.detail}
                </TextLink>
              ) : (
                row.detail
              )}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

/** One full story in the Monograph long-form template */
export default function MonographStory({ story }: { story: ImpactStory }) {
  const framing = STORY_FRAMING[story.id];
  const period = formatPeriod(story.roles);
  const splitIndex = framing.splitIndex ?? DEFAULT_SPLIT_INDEX;
  const leadContributions = story.contributions.slice(0, splitIndex);
  const restContributions = story.contributions.slice(splitIndex);
  const [leadParagraph, ...overviewRest] = story.overview;
  const titleId = `${story.id}-title`;

  const sidenoteRows: SidenoteRow[] = [
    { term: "Company", detail: story.company, href: story.companyUrl },
    { term: "Role", detail: formatRoles(story.roles) },
    { term: "Period", detail: period },
    { term: "Stack", detail: story.stack.join(", ") },
    ...(framing.sidenoteExtras ?? []),
  ];

  return (
    <section
      id={story.id}
      aria-labelledby={titleId}
      className={cn(
        // Size and spacing
        "pt-[clamp(56px,8vw,120px)]",
        // Layout
        "scroll-mt-[53px]",
      )}>
      <div className={GRID}>
        <p className={cn(CELL, MONO, "text-mono-mid")}>
          Impact story / {story.company}
        </p>
        <h2 id={titleId} className={cn(CS_TITLE, "mt-[clamp(24px,4vw,56px)]")}>
          {framing.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>

      <div
        className={cn(
          GRID,
          // Size and spacing
          "gap-y-4 mt-[clamp(28px,4vw,56px)] pt-4",
          // Border
          "border-t border-mono-ink",
        )}>
        <p className={cn(CELL, MONO, MONO_UP, "text-mono-mid")}>{period}</p>
        <p
          className={cn(
            CELL,
            // Size and spacing
            "max-w-[34ch]",
            // Text
            "text-[clamp(1.3rem,2.3vw,2.1rem)] leading-[1.2] tracking-[-0.015em] font-normal",
            // Layout
            "lg:col-[1/span_9]",
          )}>
          {framing.deck}
        </p>
      </div>

      <div
        className={cn(
          GRID,
          // Size and spacing
          "gap-y-12 mt-[clamp(56px,8vw,120px)]",
          // Layout
          "items-start",
        )}>
        <Sidenote rows={sidenoteRows} />
        <div className={ARTICLE}>
          <p className="text-[clamp(1.15rem,1.55vw,1.45rem)] leading-[1.45] tracking-[-0.01em]">
            {leadParagraph}
          </p>
          {overviewRest.map((paragraph) => (
            <p key={paragraph} className={cn(BODY_P, "mt-[1em]")}>
              {paragraph}
            </p>
          ))}
          <ContributionList
            contributions={leadContributions}
            kickers={framing.contributionKickers}
            className="mt-[clamp(48px,6vw,88px)]"
          />
        </div>
      </div>

      <div
        className={cn(
          GRID,
          // Size and spacing
          "my-[clamp(56px,8vw,120px)]",
          // Border
          "border-t border-mono-ink",
        )}>
        {framing.metrics.map((metric) => (
          <div
            key={metric.kicker}
            className={cn(
              CELL,
              // Size and spacing
              "pt-4 pb-7 md:pr-(--mono-gap)",
              // Border
              "border-b border-mono-rule md:border-b-0 md:border-r md:last:border-r-0",
              // Layout
              framing.metrics.length === 2 ? "md:col-span-6" : "md:col-span-4",
            )}>
            <span className={cn(MONO, MONO_UP, "text-mono-mid")}>
              {metric.kicker}
            </span>
            <span
              className={cn(
                // Size and spacing
                "mt-[18px]",
                // Text
                "font-mono-sans font-stretch-125% font-bold lining-nums tabular-nums",
                "text-[clamp(3rem,16vw,6rem)] md:text-[clamp(2.6rem,5.4vw,6.4rem)] leading-[0.82] tracking-[-0.05em]",
                // Layout
                "block",
              )}>
              {metric.num}
            </span>
            <span className={cn(MONO, "max-w-[26ch] mt-3.5 block")}>
              {metric.cap}
            </span>
          </div>
        ))}
      </div>

      <figure
        className={cn(
          GRID,
          // Size and spacing
          "my-[clamp(56px,8vw,112px)]",
        )}>
        <blockquote
          className={cn(
            CELL,
            // Text
            "font-mono-sans font-stretch-125% font-bold text-[clamp(1.7rem,4.4vw,4.4rem)] leading-[1.02] tracking-[-0.035em]",
            // Layout
            "lg:col-[1/span_10]",
          )}>
          <span className="mono-mark">{framing.pull.marked}</span>
          {framing.pull.rest}
        </blockquote>
        <figcaption
          className={cn(
            CELL,
            MONO,
            // Size and spacing
            "mt-[18px]",
            // Text
            "text-mono-mid",
            // Layout
            "lg:col-[1/span_6]",
          )}>
          {framing.pull.caption}
        </figcaption>
      </figure>

      <div className={GRID}>
        <div className={SIDENOTE} aria-hidden="true" />
        <div className={ARTICLE}>
          {restContributions.length > 0 && (
            <ContributionList
              contributions={restContributions}
              kickers={framing.contributionKickers}
            />
          )}
          <div
            className={cn(
              // Size and spacing
              "gap-2.5 mt-10 sm:gap-(--mono-gap)",
              // Layout
              "grid grid-cols-1 sm:grid-cols-[9rem_1fr]",
            )}>
            <span
              className={cn(
                MONO,
                MONO_UP,
                // Size and spacing
                "sm:pt-2.5",
                // Text
                "text-mono-mid",
                // Border
                "sm:border-t sm:border-mono-rule",
              )}>
              {IMPACT_STORIES_PAGE.summaryKicker}
            </span>
            <PointList points={story.impactSummary} />
          </div>
        </div>
      </div>
    </section>
  );
}
