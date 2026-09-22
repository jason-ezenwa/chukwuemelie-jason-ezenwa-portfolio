import type { ImpactStoryRole } from "@/content/impact-stories";

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

/** `2024-04` → `Apr 2024` */
function formatMonth(yearMonth: string): string {
  const [year, month] = yearMonth.split("-");

  return `${MONTHS[Number(month) - 1]} ${year}`;
}

/** First start to last end across all roles, e.g. `Apr 2024 – Present` */
export function formatPeriod(roles: ImpactStoryRole[]): string {
  const start = roles[0].start;
  const end = roles[roles.length - 1].end;

  return `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;
}

/** e.g. `Lead Software Engineer → Fractional Head of Engineering` */
export function formatRoles(roles: ImpactStoryRole[]): string {
  return roles.map((role) => role.title).join(" → ");
}

/** Year of an ISO `YYYY-MM-DD` date */
export function yearOf(asOf: string): string {
  return asOf.slice(0, 4);
}
