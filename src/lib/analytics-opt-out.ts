import type { BeforeSend } from "@vercel/analytics/next";

const OPT_OUT_KEY = "portfolio-analytics-optout";
const OPT_OUT_PARAM = "analytics";

/**
 * Drops Vercel Web Analytics events from browsers that opted out.
 * Visit any page with `?analytics=off` to opt this browser out, `?analytics=on` to opt back in.
 */
export const skipOptedOutVisits: BeforeSend = (event) => {
  try {
    const toggle = new URL(event.url).searchParams.get(OPT_OUT_PARAM);

    if (toggle === "off") localStorage.setItem(OPT_OUT_KEY, "true");
    if (toggle === "on") localStorage.removeItem(OPT_OUT_KEY);

    return localStorage.getItem(OPT_OUT_KEY) ? null : event;
  } catch {
    // Storage blocked (e.g. private mode): send as normal
    return event;
  }
};
