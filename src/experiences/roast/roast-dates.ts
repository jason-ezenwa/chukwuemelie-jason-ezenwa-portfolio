import type { ImpactStory } from "@/content/impact-stories";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function toMonthIndex(yearMonth: string): number {
  const [year, month] = yearMonth.split("-").map(Number);

  return year * 12 + (month - 1);
}

/** `2024-04` → `Apr 2024` */
export function formatMonth(yearMonth: string): string {
  const [year, month] = yearMonth.split("-").map(Number);

  return `${MONTHS[month - 1]} ${year}`;
}

/** Whole months between two `YYYY-MM` values; an open end counts up to `asOf` (`YYYY-MM-DD`). */
export function monthsBetween(
  start: string,
  end: string | null,
  asOf: string,
): number {
  return Math.max(
    0,
    toMonthIndex(end ?? asOf.slice(0, 7)) - toMonthIndex(start),
  );
}

export function getStoryStart(story: ImpactStory): string {
  return story.roles[0].start;
}

export function getStoryEnd(story: ImpactStory): string | null {
  return story.roles[story.roles.length - 1].end;
}

/** `Apr 2024 – Present` */
export function formatStoryRange(story: ImpactStory): string {
  const end = getStoryEnd(story);

  return `${formatMonth(getStoryStart(story))} – ${end ? formatMonth(end) : "Present"}`;
}

/** `29 months and counting` or `7 months` */
export function formatTenure(months: number, ongoing: boolean): string {
  const unit = months === 1 ? "month" : "months";

  return ongoing ? `${months} ${unit} and counting` : `${months} ${unit}`;
}

export function getYear(asOf: string): string {
  return asOf.slice(0, 4);
}
