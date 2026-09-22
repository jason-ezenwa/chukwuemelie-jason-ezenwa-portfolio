export const EXPERIENCES = ["roast", "monograph"] as const;

export type Experience = (typeof EXPERIENCES)[number];

export const DEFAULT_EXPERIENCE: Experience = "roast";

export const EXPERIENCE_COOKIE = "portfolio-experience";

export const EXPERIENCE_PARAM = "experience";

export const EXPERIENCE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const EXPERIENCE_LABELS: Record<Experience, string> = {
  roast: "Roast",
  monograph: "Monograph",
};

export const PUBLIC_PATHS = ["/", "/impact-stories"] as const;

export type PublicPath = (typeof PUBLIC_PATHS)[number];

export const SITE_URL = "https://jason-ezenwa.vercel.app";

export function isExperience(value: unknown): value is Experience {
  return (
    typeof value === "string" &&
    (EXPERIENCES as readonly string[]).includes(value)
  );
}

export function isPublicPath(value: string): value is PublicPath {
  return (PUBLIC_PATHS as readonly string[]).includes(value);
}

/** Internal page path that a public path is rewritten to, e.g. `/experiences/roast/impact-stories`. */
export function toInternalPath(
  publicPath: PublicPath,
  experience: Experience,
): string {
  return publicPath === "/"
    ? `/experiences/${experience}`
    : `/experiences/${experience}${publicPath}`;
}

/**
 * Maps `router.asPath` (public or internal, with or without query and hash)
 * to the visible public path, e.g. `/experiences/roast/impact-stories?x=1#a` → `/impact-stories`.
 */
export function toPublicPath(asPath: string): string {
  const path = asPath.split(/[?#]/)[0] || "/";
  const match = path.match(/^\/experiences\/([^/]+)(\/.*)?$/);

  if (match && isExperience(match[1])) {
    return match[2] && match[2] !== "/" ? match[2] : "/";
  }

  return path;
}

/** Home anchors that differ between experiences, as `[roast, monograph]` pairs */
const HOME_ANCHOR_PAIRS: ReadonlyArray<Record<Experience, string>> = [
  { roast: "impact", monograph: "work" },
  { roast: "lot-agentic-college-applications", monograph: "scooler" },
  { roast: "lot-product-feedback", monograph: "peppermint" },
  { roast: "lot-blue-collar-empowerment", monograph: "laborhack" },
  { roast: "lot-wynk-limited", monograph: "wynk" },
];

/** Maps a home-page hash to its equivalent anchor in another experience, so switching keeps the reader's place */
export function translateHash(
  publicPath: string,
  hash: string,
  to: Experience,
): string {
  const id = hash.replace(/^#/, "");

  if (publicPath !== "/" || !id) return hash;

  const pair = HOME_ANCHOR_PAIRS.find((candidate) =>
    EXPERIENCES.some((experience) => candidate[experience] === id),
  );

  return pair ? `#${pair[to]}` : hash;
}

/** Shareable link to a public path in a given experience, e.g. `/impact-stories?experience=monograph#wynk-limited`. */
export function buildExperienceHref(
  publicPath: string,
  experience: Experience,
  hash = "",
): string {
  const normalisedHash = hash && !hash.startsWith("#") ? `#${hash}` : hash;

  return `${publicPath}?${EXPERIENCE_PARAM}=${experience}${normalisedHash}`;
}
