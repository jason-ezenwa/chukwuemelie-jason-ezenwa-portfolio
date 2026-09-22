import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { ROAST_PROFILE } from "@/experiences/roast/content";
import { RoastKicker } from "@/experiences/roast/roast-kicker";

const CURVE =
  "M80,300 C130,270 160,245 200,225 S260,185 290,170 C450,120 700,95 920,80 S1100,66 1160,62";

/** Milestones fade in as the curve draws past them */
const MILESTONE_DELAYS = ["0.5s", "1s", "1.3s", "2.2s", "2.5s"];

const GRID_ROWS = [80, 163, 246];
const GRID_COLUMNS = [200, 560, 920];
const YEAR_TICKS = [
  { x: 200, label: "2024" },
  { x: 560, label: "2025" },
  { x: 920, label: "2026" },
];

/** Fig. 1: the career roast profile curve with its five milestones */
export default function RoastProfile() {
  return (
    <figure
      className={cn(
        // Size and spacing
        "mt-14 pt-3.5",
        // Border
        "border-t border-roast-line-strong",
      )}>
      <div
        className={cn(
          // Size and spacing
          "mb-2.5 gap-x-6 gap-y-2",
          // Layout
          "flex flex-wrap justify-between",
        )}>
        <RoastKicker>{ROAST_PROFILE.kicker}</RoastKicker>
        <RoastKicker
          className={cn(
            // Size and spacing
            "gap-x-[18px] gap-y-1.5",
            // Layout
            "flex flex-wrap",
          )}>
          <span className="inline-flex items-center gap-2">
            <i className="roast-swatch-line h-0.5 w-[22px]" />
            {ROAST_PROFILE.keyLine}
          </span>
          <span className="inline-flex items-center gap-2">
            <i
              className={cn(
                // Size and spacing
                "size-[9px]",
                // Border
                "border-[1.5px] border-roast-accent rounded-full",
                // Background
                "bg-roast-bg",
              )}
            />
            {ROAST_PROFILE.keyDot}
          </span>
        </RoastKicker>
      </div>

      <svg
        viewBox="0 0 1200 380"
        role="img"
        aria-labelledby="rp-t rp-d"
        className="block h-auto w-full overflow-visible">
        <title id="rp-t">{ROAST_PROFILE.title}</title>
        <desc id="rp-d">{ROAST_PROFILE.description}</desc>
        <defs>
          <linearGradient id="rp-copper" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" style={{ stopColor: "var(--roast-cu-1)" }} />
            <stop offset=".35" style={{ stopColor: "var(--roast-cu-2)" }} />
            <stop offset=".55" style={{ stopColor: "var(--roast-cu-3)" }} />
            <stop offset=".8" style={{ stopColor: "var(--roast-cu-4)" }} />
            <stop offset="1" style={{ stopColor: "var(--roast-cu-2)" }} />
          </linearGradient>
          <linearGradient id="rp-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: "var(--roast-fill-a)" }} />
            <stop offset="1" style={{ stopColor: "var(--roast-fill-b)" }} />
          </linearGradient>
        </defs>
        <g>
          {GRID_ROWS.map((y) => (
            <line key={`row-${y}`} className="rp-grid" x1="80" x2="1160" y1={y} y2={y} />
          ))}
          <line className="rp-axis" x1="80" x2="1160" y1="330" y2="330" />
          {GRID_COLUMNS.map((x) => (
            <line key={`col-${x}`} className="rp-grid" x1={x} x2={x} y1="40" y2="336" />
          ))}
          <text className="rp-tick" x="80" y="358">
            SEP 2023
          </text>
          {YEAR_TICKS.map((tick) => (
            <text key={tick.label} className="rp-tick" x={tick.x} y="358" textAnchor="middle">
              {tick.label}
            </text>
          ))}
          <text className="rp-tick" x="1160" y="358" textAnchor="end">
            NOW
          </text>
          <text className="rp-tick" transform="translate(52 186) rotate(-90)" textAnchor="middle">
            SCOPE
          </text>
        </g>
        <path className="rp-area" d={`${CURVE} L1160,330 L80,330 Z`} />
        <path className="rp-curve" pathLength={1} d={CURVE} />

        {ROAST_PROFILE.milestones.map((milestone, index) => (
          <g
            key={milestone.event}
            className="rp-ms"
            style={{ "--delay": MILESTONE_DELAYS[index] } as CSSProperties}>
            <line
              className="rp-drop"
              x1={milestone.x}
              x2={milestone.x}
              y1={milestone.y + 6}
              y2="330"
            />
            <circle className="rp-pt" cx={milestone.x} cy={milestone.y} r="6" />
            <g className="rp-labels">
              <text
                className="rp-ev"
                x={milestone.labelX}
                y={milestone.labelY}
                textAnchor={milestone.anchor}>
                {milestone.event} · {milestone.date}
              </text>
              <text
                className="rp-role"
                x={milestone.labelX}
                y={milestone.labelY + 20}
                textAnchor={milestone.anchor}>
                {milestone.role}
              </text>
            </g>
          </g>
        ))}
        <circle className="rp-pulse" cx="1160" cy="62" r="5" />
        <circle className="rp-now" cx="1160" cy="62" r="4.5" />
      </svg>

      <ol className="roast-profile-legend">
        {ROAST_PROFILE.milestones.map((milestone) => (
          <li key={milestone.event}>
            <RoastKicker>
              <b>{milestone.event}</b> · {milestone.date}
            </RoastKicker>
            <p
              className={cn(
                // Size and spacing
                "mt-0.5",
                // Text
                "text-[.98rem] leading-[1.35]",
              )}>
              {milestone.role}
            </p>
          </li>
        ))}
      </ol>

      <figcaption
        className={cn(
          // Size and spacing
          "mt-3 gap-3",
          // Layout
          "flex flex-wrap justify-between",
        )}>
        <RoastKicker as="span">{ROAST_PROFILE.captionLeft}</RoastKicker>
        <RoastKicker as="span">{ROAST_PROFILE.captionRight}</RoastKicker>
      </figcaption>
    </figure>
  );
}
