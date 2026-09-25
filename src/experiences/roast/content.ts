import { IMPACT_STORIES, type ContributionId, type ImpactStoryId } from "@/content/impact-stories";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
  type PostId,
  type ProjectId,
} from "@/utils/constants";
import { capitalisedCountWord } from "@/utils/count-words";

/** Lot count from the number of impact stories, e.g. Four lots */
const LOT_COUNT = `${capitalisedCountWord(IMPACT_STORIES.length)} lots`;

/** A heading split into its bold lead and the thin, lighter tail. */
export interface RoastSplitHeading {
  strong: string;
  thin: string;
}

/** Renders as `lead · <b>bold</b>` */
export interface RoastKickerCopy {
  lead: string;
  bold: string;
}

export interface RoastYieldItem {
  num: string;
  sup?: string;
  what: string;
  kicker: string;
}

export interface RoastLink {
  label: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

export const ROAST_BRAND = {
  name: "C. J. Obumse",
  subtitle: "Software Engineer",
  ariaLabel: "C. J. Obumse, home",
};

export interface RoastNavItem {
  label: string;
  note: string;
  href: string;
}

export const ROAST_NAV: RoastNavItem[] = [
  { label: "Work", note: LOT_COUNT, href: "/#impact" },
  { label: "Impact stories", note: "In full", href: "/impact-stories" },
  { label: "Projects", note: "Single origin", href: "/#projects" },
  { label: "Writing", note: "Journal", href: "/#writing" },
  { label: "Contact", note: "Orders", href: "/#contact" },
];

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const ROAST_HERO = {
  lotCode: "CJO-2309",
  since: "Roasting since Sep 2023",
  firstName: "Chukwuemelie",
  lastNames: "Jason Obumse",
  lede: {
    before: "I turn complex business problems into ",
    em: "reliable, revenue-generating products",
    after: " — with TypeScript, React and Node.js, from system design to DevOps.",
  },
  primaryCta: {
    label: "Read the Peppermint story",
    href: "/impact-stories#product-feedback",
  },
  secondaryCta: { label: "Resume", href: RESUME_URL },
  label: {
    kicker: "Current lot",
    title: "Scooler AI",
    subtitle: "Lead Software Engineer",
    fields: [
      { term: "Blend", value: "Fractional Head of Engineering, Peppermint" },
      { term: "Variety", value: "Full Stack Software Engineer" },
      { term: "Aged", value: "3+ years, B2B and B2C" },
    ],
    monoFields: [
      { term: "Notes", value: "TypeScript · React · Node.js" },
      { term: "Also", value: "System design · DevOps · Data analytics" },
    ],
    footKicker: "Available to read",
    footLink: { label: "LinkedIn", href: LINKEDIN_URL },
  },
};

export interface RoastMilestone {
  event: string;
  date: string;
  role: string;
  /** Point on the 1200×380 curve */
  x: number;
  y: number;
  /** Label anchor and alignment on the desktop chart */
  labelX: number;
  labelY: number;
  anchor: "start" | "end";
}

export const ROAST_PROFILE = {
  kicker: "Fig. 1 — Career roast profile",
  keyLine: "Scope of ownership",
  keyDot: "Milestone",
  title: "Career roast profile, September 2023 to present",
  description:
    "A rising curve with five milestones: Wynk in September 2023, LaborHack in January 2024, Peppermint in April 2024, Fractional Head of Engineering in January 2026, and Scooler AI in May 2026.",
  caption: "Roast in progress",
  milestones: [
    { event: "Charge", date: "Sep 2023", role: "Wynk — Full Stack Developer", x: 80, y: 300, labelX: 100, labelY: 296, anchor: "start" },
    { event: "Dry end", date: "Jan 2024", role: "LaborHack — Software Engineer", x: 200, y: 225, labelX: 218, labelY: 244, anchor: "start" },
    { event: "First crack", date: "Apr 2024", role: "Peppermint — Lead Software Engineer", x: 290, y: 170, labelX: 308, labelY: 188, anchor: "start" },
    { event: "Development", date: "Jan 2026", role: "Fractional Head of Engineering", x: 920, y: 80, labelX: 905, labelY: 118, anchor: "end" },
    { event: "Second crack", date: "May 2026", role: "Scooler AI — Lead Software Engineer", x: 1040, y: 71.6, labelX: 1024, labelY: 30, anchor: "end" },
  ] satisfies RoastMilestone[],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const ROAST_ABOUT = {
  kicker: { lead: "About", bold: "The producer" } satisfies RoastKickerCopy,
  heading: { strong: "Reliable products", thin: "that earn their keep." } satisfies RoastSplitHeading,
  paragraphs: [
    "I am a Full Stack Engineer with 3+ years of experience building reliable and revenue-generating products across B2B and B2C domains. I specialize in TypeScript, React, and Node.js, with experience spanning system design, DevOps, and data analytics.",
    "I've helped companies like LaborHack, Peppermint and Wynk turn complex business problems into scalable products that drive growth and efficiency — from AI-powered systems for blue collar workers, to external APIs for third party integrators and platforms that enable data-driven product development for top companies like Kuda.",
  ],
  links: [
    { label: "Resume", href: RESUME_URL },
    { label: "LinkedIn", href: LINKEDIN_URL },
    { label: "GitHub", href: GITHUB_URL },
  ] satisfies RoastLink[],
};

// ---------------------------------------------------------------------------
// Yield
// ---------------------------------------------------------------------------

export const ROAST_YIELD = {
  kicker: { lead: "Yield", bold: "Measured in production" } satisfies RoastKickerCopy,
  heading: { strong: "What came", thin: "out of the roaster." } satisfies RoastSplitHeading,
  items: [
    { num: "10,000", sup: "+", what: "testers onboarded in the first month", kicker: "Peppermint" },
    { num: "50", sup: "x", what: "faster data-intensive operations", kicker: "Peppermint" },
    { num: "₦45m", sup: "+", what: "revenue from systems built", kicker: "LaborHack" },
    { num: "99.9", sup: "%", what: "uptime across deployments", kicker: "LaborHack" },
    { num: "55", sup: "%", what: "retention increase after a React rebuild", kicker: "Wynk" },
  ] satisfies RoastYieldItem[],
};

// ---------------------------------------------------------------------------
// Stack menu board
// ---------------------------------------------------------------------------

export interface RoastMenuItem {
  name: string;
  where: string;
  /** House specialty: set in bold */
  house?: boolean;
}

export interface RoastMenuGroup {
  title: string;
  column: string;
  items: RoastMenuItem[];
}

export const ROAST_STACK = {
  kicker: { lead: "Stack", bold: "Tasting notes" } satisfies RoastKickerCopy,
  heading: { strong: "On the bar,", thin: "and where it was poured." } satisfies RoastSplitHeading,
  groups: [
    {
      title: "Languages",
      column: "Poured at",
      items: [
        { name: "TypeScript", where: "Scooler AI · Peppermint · LaborHack", house: true },
        { name: "JavaScript", where: "Wynk" },
        { name: "Python", where: "In the kit" },
      ],
    },
    {
      title: "Server",
      column: "Poured at",
      items: [
        { name: "Node.js", where: "LaborHack · Wynk", house: true },
        { name: "NestJS", where: "Scooler AI · Peppermint" },
        { name: "Vercel AI SDK", where: "Scooler AI · Peppermint" },
        { name: "Express.js", where: "Wynk" },
        { name: "GraphQL", where: "LaborHack" },
      ],
    },
    {
      title: "Interface",
      column: "Poured at",
      items: [
        { name: "React", where: "Scooler AI · LaborHack · Wynk", house: true },
        { name: "Next.js", where: "Peppermint" },
      ],
    },
    {
      title: "Data",
      column: "Poured at",
      items: [
        { name: "MongoDB", where: "Scooler AI · Peppermint · LaborHack" },
        { name: "PostgreSQL", where: "In the kit" },
        { name: "MySQL", where: "In the kit" },
      ],
    },
    {
      title: "Infrastructure",
      column: "Poured at",
      items: [
        { name: "AWS", where: "Scooler AI · Peppermint · LaborHack" },
        { name: "Docker", where: "Scooler AI · LaborHack" },
        { name: "Terraform", where: "Scooler AI" },
      ],
    },
    {
      title: "Practice",
      column: "Since",
      items: [
        { name: "System design", where: "2023" },
        { name: "DevOps", where: "2023" },
        { name: "Data analytics", where: "2023" },
      ],
    },
  ] satisfies RoastMenuGroup[],
  note: "House specialty — TypeScript, React, Node.js",
};

// ---------------------------------------------------------------------------
// Impact (home lots)
// ---------------------------------------------------------------------------

export const ROAST_IMPACT = {
  kicker: { lead: "Impact stories", bold: LOT_COUNT } satisfies RoastKickerCopy,
  heading: { strong: "Roasted in production,", thin: "labelled honestly." } satisfies RoastSplitHeading,
  lede: "Each role, read like a bag label: where it came from, how it was processed, how long it roasted, and what it yielded.",
  readStory: "Read the story",
};

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export interface RoastProject {
  id: ProjectId;
  name: string;
  kicker: string;
  figure: string;
  figureNote: string;
  image: string;
  alt: string;
  description: string;
  stack: string;
  featured?: boolean;
}

export const ROAST_PROJECTS = {
  kicker: { lead: "Projects", bold: "Single origin" } satisfies RoastKickerCopy,
  heading: { strong: "Single origin,", thin: "built end to end." } satisfies RoastSplitHeading,
  items: [
    {
      id: "hunt-assistant",
      name: "Hunt Assistant",
      kicker: "Single origin · AI",
      figure: "Fig. 2 — Hunt Assistant",
      figureNote: "Dashboard",
      image: "/images/hunt-assistant-dashboard.jpeg",
      alt: "Hunt Assistant dashboard showing tracked job applications and AI insights",
      description:
        "An AI-powered job hunting platform that analyzes your resume against job requirements, generates tailored cover letters, and tracks your applications — with auth, persistent tracking and AI insights.",
      stack: "TypeScript · Next.js · MongoDB · AI",
      featured: true,
    },
    {
      id: "zen-finance",
      name: "Zen",
      kicker: "Single origin · Fintech",
      figure: "Fig. 3 — Zen",
      figureNote: "Wallets",
      image: "/images/zen-dashboard.jpeg",
      alt: "Zen fintech dashboard with multi-currency wallets and virtual cards",
      description:
        "A fintech app with multi-currency wallets, currency exchange, and virtual cards you can create, fund and track. Integrates Maplerad and Paystack.",
      stack: "TypeScript · Next.js · Node.js · MongoDB",
    },
    {
      id: "prospera-ai-dashboard",
      name: "Prospera AI Dashboard",
      kicker: "Single origin · Dashboard",
      figure: "Fig. 4 — Prospera AI",
      figureNote: "Analytics",
      image: "/images/prospera-ai-dashboard.jpeg",
      alt: "Prospera AI dashboard with intent-signal analytics and lead magnet insights",
      description:
        "A dashboard mockup for Prospera AI — AI-personalised lead magnets and agentic follow-ups — covering intent-signal analytics, AI content generation and lead magnet insights.",
      stack: "TypeScript · Next.js · Tailwind CSS · Recharts",
    },
  ] satisfies RoastProject[],
};

// ---------------------------------------------------------------------------
// Writing
// ---------------------------------------------------------------------------

export interface RoastPost {
  id: PostId;
  title: string;
  kicker: string;
}

export const ROAST_WRITING = {
  kicker: { lead: "Writing", bold: "Brew journal" } satisfies RoastKickerCopy,
  heading: { strong: "Notes on", thin: "the craft." } satisfies RoastSplitHeading,
  lede: "Essays on product engineering, careers and implementation, published on Stackademic.",
  feature: {
    id: "mvps-and-the-engineering-trap",
    kicker: { lead: "Stackademic", bold: "Product" } satisfies RoastKickerCopy,
    title: "MVPs and the Engineering Trap: Building What Actually Matters",
    quote:
      "Many startups fail not because they can't build, but because they build the wrong things — perfectly.",
  } as const,
  posts: [
    { id: "irreplaceable-software-engineer", title: "The Irreplaceable Software Engineer in the AI era", kicker: "Stackademic · Career" },
    { id: "beyond-silos", title: "The Cross-Disciplinary Role of the Modern Software Engineer", kicker: "Stackademic · Craft" },
    { id: "influence-of-senior-engineers", title: "The Priceless Influence of Senior Software Engineers on Junior Engineers", kicker: "Stackademic · Leadership" },
    { id: "escrow-like-state-in-node-js", title: "Implementing an Escrow-like State in Node.js", kicker: "Stackademic · Node.js" },
    { id: "json-web-tokens-guide", title: "Authentication and Authorization with JSON Web Tokens", kicker: "Stackademic on Medium · Security" },
  ] satisfies RoastPost[],
};

// ---------------------------------------------------------------------------
// Contact and footer
// ---------------------------------------------------------------------------

export const ROAST_CONTACT = {
  kicker: { lead: "Contact", bold: "Orders open" } satisfies RoastKickerCopy,
  heading: { strong: "Let's build", thin: "something worth pouring." } satisfies RoastSplitHeading,
  links: [
    { label: "Resume", note: "Drive ↗", href: RESUME_URL },
    { label: "LinkedIn", note: "chukwuemelie-obumse ↗", href: LINKEDIN_URL },
    { label: "GitHub", note: "jason-ezenwa ↗", href: GITHUB_URL },
  ],
  footerLeft: "Roasted by Chukwuemelie Jason Obumse",
  footerLot: "Lot CJO-2309",
};

// ---------------------------------------------------------------------------
// Impact stories page
// ---------------------------------------------------------------------------

export const ROAST_STORIES_PAGE = {
  back: "Back to all lots",
  backHref: "/#impact",
  kicker: { lead: "Impact stories", bold: LOT_COUNT } satisfies RoastKickerCopy,
  indexKicker: "The lots",
  overviewKicker: { lead: "Overview", bold: "Origin story" } satisfies RoastKickerCopy,
  brewKicker: { lead: "Brewing notes", bold: "Key contributions" } satisfies RoastKickerCopy,
  brewHeading: "How it was brewed",
  nextKicker: "Next lot",
  viewLot: "View lot",
  backToTop: "Back to all lots",
};

// ---------------------------------------------------------------------------
// Story framing (per ImpactStoryId). Detailed content lives in @/content/impact-stories.
// ---------------------------------------------------------------------------

export interface RoastContributionFraming {
  kicker: string;
  metric?: string;
  metricCap?: string;
}

export interface RoastStoryFraming<StoryId extends ImpactStoryId = ImpactStoryId> {
  /** Start `YYMM` */
  lot: string;
  title: RoastSplitHeading;
  /** Home lot card copy */
  lotCard: {
    process: string;
    notes: string;
    yieldLine: string;
    bullets: string[];
    /** The featured lot gets the copper foil */
    featured?: boolean;
  };
  yield: RoastYieldItem[];
  /** One roast-phase name per role; the phase bar only shows with more than one role */
  phaseNames?: string[];
  pullQuote: { text: string; bold: string };
  /** One entry per contribution in the shared story; a missing one fails the type check */
  contributions: Record<ContributionId<StoryId>, RoastContributionFraming>;
}

export const ROAST_STORY_FRAMING: { [StoryId in ImpactStoryId]: RoastStoryFraming<StoryId> } = {
  "agentic-college-applications": {
    lot: "2605",
    title: { strong: "Agentic AI", thin: "for College Applications" },
    lotCard: {
      process: "Lead Software Engineer",
      notes: "TypeScript · React · NestJS · Vercel AI SDK · AWS · Terraform · MongoDB · Docker · PostHog",
      yieldLine: "85+ PRs in 6 weeks",
      bullets: [
        "Led engineering for an agentic AI platform for college applications, from build to production launch, landing 85+ PRs in 6 weeks",
        "Built Skye, an in-app AI agent that guides each student's application journey and auto-fills their Common App and university application forms",
        "Built SAT test prep with an adaptive diagnostic, AI-generated study plans, practice drills and full-length mock exams over a 1,000+ question bank",
      ],
    },
    yield: [
      { num: "85", sup: "+", what: "PRs landed in 6 weeks, build to launch", kicker: "Launch" },
      { num: "5–10", sup: "x", what: "fewer LLM inference round-trips", kicker: "Skye" },
      { num: "1,000", sup: "+", what: "questions behind adaptive SAT prep", kicker: "Test prep" },
    ],
    pullQuote: {
      text: "An AI agent that guides each student and fills in the Common App —",
      bold: "batched and held to an eval harness.",
    },
    contributions: {
      "skye-ai-agent": { kicker: "Agent", metric: "Skye", metricCap: "guides students and fills their forms" },
      "sat-test-prep": { kicker: "Test prep", metric: "1,000+", metricCap: "question bank" },
      "inference-and-reliability": { kicker: "Inference", metric: "5–10x", metricCap: "fewer inference round-trips" },
      "infrastructure-and-analytics": { kicker: "Infrastructure", metric: "End to end", metricCap: "AWS · Terraform · PostHog" },
      "engineering-process": { kicker: "Process" },
    },
  },
  "product-feedback": {
    lot: "2404",
    title: { strong: "Product Feedback", thin: "& Scaling Operations" },
    lotCard: {
      process: "Lead Software Engineer → Fractional Head of Engineering",
      notes: "Next.js · NestJS · TypeScript · Vercel AI SDK · MongoDB · AWS",
      yieldLine: "$1,000+ in 3 months",
      bullets: [
        "Launched an AI-powered product feedback application used by companies like Kuda",
        "Built AI-powered pipelines with LLMs to generate usability study reports",
        "Architected in-app usability tests and surveys which generated over $1,000 within 3 months",
      ],
      featured: true,
    },
    yield: [
      { num: "10,000", sup: "+", what: "testers onboarded within the first month", kicker: "Testers' app" },
      { num: "50", sup: "x", what: "faster data-intensive operations", kicker: "Query + caching" },
      { num: "$1,000", sup: "+", what: "organic revenue within 3 months", kicker: "Usability tests" },
      { num: "V1", what: "released after the MVP", kicker: "Team" },
      { num: "Kuda", what: "among the clients gathering feedback", kicker: "Adoption" },
    ],
    phaseNames: ["Maillard", "Development"],
    pullQuote: {
      text: "The AI-powered product feedback application became",
      bold: "the core of Peppermint's offering.",
    },
    contributions: {
      "product-feedback-application": { kicker: "Core product", metric: "$1,000+", metricCap: "organic revenue in 3 months" },
      "testers-application-development": { kicker: "Adoption", metric: "10,000+", metricCap: "testers in the first month" },
      "performance-optimization-and-scaling": { kicker: "Performance", metric: "50x", metricCap: "faster data-intensive operations" },
      "wallet-system-implementation": { kicker: "Payments", metric: "Mints", metricCap: "wallet, integrated with Stripe" },
      "technical-leadership": { kicker: "Team", metric: "V1", metricCap: "released after the MVP" },
      "fractional-head-of-engineering": { kicker: "Leadership", metric: "2026", metricCap: "from January" },
    },
  },
  "blue-collar-empowerment": {
    lot: "2401",
    title: { strong: "Blue-Collar", thin: "Empowerment Infrastructure" },
    lotCard: {
      process: "Software Engineer",
      notes: "TypeScript · React · Node.js · GraphQL · MongoDB · AWS · Docker",
      yieldLine: "₦45m+ revenue",
      bullets: [
        "Built systems for artisan recruitment, home maintenance, and AI-driven portfolios, generating over ₦45m in revenue",
        "Provided data-driven insights that guided product improvements and optimized funnels",
        "Improved the flexibility and reliability of software deployments ensuring 99.9% uptime",
      ],
    },
    yield: [
      { num: "₦45m", sup: "+", what: "revenue from three product lines", kicker: "Product lines" },
      { num: "99.9", sup: "%", what: "uptime across deployments", kicker: "Releases" },
      { num: "5,000", sup: "+", what: "artisans presenting their work with AI", kicker: "Portfolios" },
      { num: "1,000", sup: "+", what: "homeowners connected with skilled labor", kicker: "Home maintenance" },
      { num: "40", sup: "%", what: "fewer rollback incidents", kicker: "Unit tests" },
    ],
    pullQuote: {
      text: "Artisan recruitment, home maintenance and AI portfolios —",
      bold: "over ₦45m in revenue.",
    },
    contributions: {
      "artisan-recruitment-and-home-maintenance-tools": { kicker: "Product lines", metric: "₦45m+", metricCap: "revenue across three products" },
      "ai-driven-artisan-portfolio-system": { kicker: "Portfolios", metric: "5,000+", metricCap: "artisans" },
      "facility-maintenance-rest-api": { kicker: "Integrations", metric: "B2B", metricCap: "REST API for third parties" },
      "semi-automated-payout-system": { kicker: "Payouts" },
      "analytics-and-funnel-optimization": { kicker: "Analytics", metric: "3", metricCap: "product dashboards" },
      "deployment-and-release-engineering": { kicker: "Releases", metric: "40%", metricCap: "fewer rollback incidents" },
      "seo-and-visibility": { kicker: "Visibility", metric: "28%", metricCap: "more organic traffic" },
    },
  },
  "wynk-limited": {
    lot: "2309",
    title: { strong: "Building a Lifestyle Super App", thin: "and Web Platform" },
    lotCard: {
      process: "Full Stack Developer",
      notes: "JavaScript · Node.js · Express · React",
      yieldLine: "+55% retention",
      bullets: [
        "Contributed to a lifestyle super app, focusing on financial services",
        "Rebuilt the company web application in React, increasing retention by 55%",
        "Led technical and culture-fit assessment of new hires",
      ],
    },
    yield: [
      { num: "55", sup: "%", what: "retention increase after a React rebuild", kicker: "Web app" },
      { num: "4", what: "hires: 3 software developers and 1 product designer", kicker: "Hiring" },
      { num: "Node.js", what: "server side for the super app's financial services", kicker: "Financial services" },
    ],
    pullQuote: {
      text: "Rebuilding the web application in React",
      bold: "lifted retention by 55%.",
    },
    contributions: {
      "wynk-super-app-financial-services": { kicker: "Financial services", metric: "Node.js", metricCap: "and Express, server side" },
      "web-application-rebuild": { kicker: "Web app", metric: "+55%", metricCap: "retention" },
      "hiring-and-team-scaling": { kicker: "Team", metric: "4", metricCap: "hires who accelerated delivery" },
      documentation: { kicker: "Docs" },
    },
  },
};

/** Framing for one contribution of a story; `undefined` if the id isn't one of that story's contributions */
export function getRoastContributionFraming(
  storyId: ImpactStoryId,
  contributionId: string,
): RoastContributionFraming | undefined {
  const contributions: Record<string, RoastContributionFraming> = ROAST_STORY_FRAMING[storyId].contributions;

  return contributions[contributionId];
}
