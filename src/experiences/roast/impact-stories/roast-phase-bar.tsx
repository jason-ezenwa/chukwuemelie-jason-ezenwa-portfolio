import { cn } from "@/lib/utils";
import type { ImpactStory } from "@/content/impact-stories";
import {
  formatMonth,
  formatTenure,
  monthsBetween,
} from "@/experiences/roast/roast-dates";
import { RoastKicker } from "@/experiences/roast/roast-kicker";

interface RoastPhaseBarProps {
  story: ImpactStory;
  phaseNames: string[];
  asOf: string;
}

/**
 * Role phases drawn to scale; only used for stories with more than one role.
 * A `<meter>` fills the current phase in copper from the right over the hatched earlier phases.
 */
export default function RoastPhaseBar({
  story,
  phaseNames,
  asOf,
}: RoastPhaseBarProps) {
  const phases = story.roles.map((role, index) => ({
    ...role,
    name: phaseNames[index] ?? role.title,
    months: Math.max(1, monthsBetween(role.start, role.end, asOf)),
    isLast: index === story.roles.length - 1,
  }));

  const totalMonths = phases.reduce((sum, phase) => sum + phase.months, 0);
  const currentMonths = phases[phases.length - 1].months;
  const first = story.roles[0];
  const last = story.roles[story.roles.length - 1];
  const rangeEnd = last.end ? formatMonth(last.end) : "Present";

  const ariaLabel = phases
    .map((phase) => {
      const tenure = formatTenure(phase.months, phase.end === null);

      return `${tenure} as ${phase.title}`;
    })
    .join(", then ");

  return (
    <div className="mt-12">
      <RoastKicker>
        Roast phases · {formatMonth(first.start)} → {rangeEnd}, to scale
      </RoastKicker>
      <meter
        aria-label={ariaLabel}
        min={0}
        max={totalMonths}
        value={currentMonths}
        className={cn(
          "roast-phase-meter",
          // Size and spacing
          "mt-3 h-9 w-full",
          // Border
          "border border-roast-line-strong",
          // Layout
          "block",
        )}
      />
      <ul
        className={cn(
          // Size and spacing
          "mt-3.5 gap-3 sm:gap-6",
          // Layout
          "grid sm:flex sm:justify-between",
        )}>
        {phases.map((phase) => (
          <li
            key={phase.start}
            className={cn(
              // Size and spacing
              "gap-3",
              // Layout
              "grid grid-cols-[14px_minmax(0,1fr)] items-start",
            )}>
            <span
              aria-hidden="true"
              className={cn(
                phase.isLast ? "roast-phase-copper-sm" : "roast-phase-hatch-sm",
                // Size and spacing
                "mt-1 size-3.5",
                // Border
                "border border-roast-line-strong",
              )}
            />
            <div>
              <RoastKicker>
                {phase.end ? (
                  <>
                    {phase.name} · {formatMonth(phase.start)} –{" "}
                    {formatMonth(phase.end)} · {phase.months} mo
                  </>
                ) : (
                  <>
                    <b>{phase.name}</b> · {formatMonth(phase.start)} – now
                  </>
                )}
              </RoastKicker>
              <p className="leading-[1.35]">{phase.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
