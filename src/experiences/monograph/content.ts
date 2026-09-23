import { IMPACT_STORIES, type ContributionId, type ImpactStoryId } from "@/content/impact-stories";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  PEPPERMINT_TESTER_URL,
  POST_URLS,
  PROJECT_URLS,
  RESUME_URL,
  type PostId,
  type ProjectId,
} from "@/utils/constants";
import { capitalisedCountWord } from "@/utils/count-words";

/* Monograph framing and home copy. Detailed story content lives in @/content/impact-stories. */

// ---------- hero ----------

export const HERO_META = [
  { term: "Discipline", details: ["Full Stack Software Engineer"] },
  {
    term: "Currently",
    details: [
      "Lead Software Engineer, Scooler AI",
      "Fractional Head of Engineering, Peppermint",
    ],
  },
] as const;

export const HERO_STATUS = { term: "Status", detail: "Available for select work" };

export const HERO_NAME_LINES = ["Chukwuemelie", "Jason", "Obumse"] as const;

export const HERO_LEDE =
  "I build reliable, revenue-generating products across B2B and B2C — in TypeScript, React and Node.js, from system design through DevOps to data.";

export const PROFILE_LINKS = [
  { label: "Resume", href: RESUME_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "GitHub", href: GITHUB_URL },
];

// ---------- about ----------

export const ABOUT = {
  sub: "Full Stack Software Engineer, 3+ years",
  count: "B2B / B2C",
  statementBefore:
    "I am a Full Stack Engineer with 3+ years of experience building reliable and ",
  statementMark: "revenue-generating",
  statementAfter:
    " products across B2B and B2C domains. I specialize in TypeScript, React and Node.js, with experience spanning system design, DevOps and data analytics.",
  body: "I’ve helped companies like LaborHack, Peppermint and Wynk turn complex business problems into scalable products that drive growth and efficiency — from AI-powered systems for blue-collar workers, to external APIs for third-party integrators, and platforms that enable data-driven product development for companies like Kuda.",
};

// ---------- stack ----------

const STACK_GROUPS = [
  { name: "Languages", tools: ["TypeScript", "JavaScript", "Python"] },
  { name: "Frontend", tools: ["React", "Next.js"] },
  {
    name: "Backend & AI",
    tools: ["Node.js", "NestJS", "Express.js", "GraphQL", "Vercel AI SDK"],
  },
  {
    name: "Data & Cloud",
    tools: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker", "Terraform"],
  },
];

const STACK_TOOL_COUNT = STACK_GROUPS.reduce((total, group) => total + group.tools.length, 0);

export const STACK = {
  sub: "Tools used in production",
  count: `${STACK_TOOL_COUNT} tools / ${STACK_GROUPS.length} layers`,
  groups: STACK_GROUPS,
};

// ---------- impact ----------

export interface MonographFigure {
  num: string;
  cap: string;
}

export const IMPACT = {
  sub: "Selected outcomes, 2023–present",
  count: `${new Set(IMPACT_STORIES.map((story) => story.company)).size} companies`,
  lead: {
    num: "50×",
    cap: "Faster data-intensive operations at Peppermint, through query optimisation and caching.",
  } satisfies MonographFigure,
  figures: [
    {
      num: "10,000+",
      cap: "Testers onboarded in the first month of Peppermint’s testers’ app.",
    },
    { num: "₦45m", cap: "Revenue from systems built at LaborHack." },
    {
      num: "55%",
      cap: "Retention increase after rebuilding Wynk’s web app in React.",
    },
    {
      num: "85+",
      cap: "PRs landed in 6 weeks at Scooler AI, from build to production launch.",
    },
    {
      num: "5–10×",
      cap: "Fewer LLM round-trips from batched tool calls in Skye, Scooler’s AI agent.",
    },
  ] satisfies MonographFigure[],
};

/** Home story rows. Company, title, period and stack come from the shared story. */
export interface MonographHomeStory {
  /** Home-page anchor, as in the prototype */
  anchor: string;
  role: string;
  points: string[];
}

export const HOME_STORIES: Record<ImpactStoryId, MonographHomeStory> = {
  "agentic-college-applications": {
    anchor: "scooler",
    role: "Lead Software Engineer · United States, remote",
    points: [
      "Led engineering for an agentic AI platform for college applications, from build to production launch, landing 85+ PRs in 6 weeks.",
      "Built Skye, an in-app AI agent that guides each student’s application journey and auto-fills their Common App and university application forms.",
      "Built SAT test prep with an adaptive diagnostic, AI-generated study plans, practice drills and full-length mock exams over a 1,000+ question bank.",
    ],
  },
  "product-feedback": {
    anchor: "peppermint",
    role: "Lead Software Engineer → Fractional Head of Engineering",
    points: [
      "Launched an AI-powered product feedback application used by companies like Kuda.",
      "Built AI-powered pipelines with LLMs to generate usability study reports.",
      "Architected in-app usability tests and surveys which generated over $1,000 within 3 months.",
    ],
  },
  "blue-collar-empowerment": {
    anchor: "laborhack",
    role: "Software Engineer",
    points: [
      "Built systems for artisan recruitment, home maintenance and AI-driven portfolios, generating over ₦45m in revenue.",
      "Provided data-driven insights that guided product improvements and optimised funnels.",
      "Improved the flexibility and reliability of software deployments, ensuring 99.9% uptime.",
    ],
  },
  "wynk-limited": {
    anchor: "wynk",
    role: "Full Stack Developer",
    points: [
      "Contributed to a lifestyle super app, focusing on financial services.",
      "Rebuilt the company web application in React, increasing retention by 55%.",
      "Led technical and culture-fit assessment of new hires.",
    ],
  },
};

// ---------- projects ----------

export interface MonographProject {
  id: ProjectId;
  plate: string;
  name: string;
  blurb: string;
  tags: string;
  image: { src: string; alt: string; width: number; height: number };
}

const PROJECT_ITEMS = [
  {
    id: "hunt-assistant",
    plate: "Pl. A — AI / Careers",
    name: "Hunt Assistant",
    blurb:
      "An AI-powered job-hunting platform: analyses your resume against job requirements, writes tailored cover letters and tracks every application, with auth and persistent tracking.",
    tags: "TypeScript / Next.js / MongoDB / AI",
    image: {
      src: "/images/hunt-assistant-dashboard.jpeg",
      alt: "Hunt Assistant dashboard showing tracked job applications and AI resume insights",
      width: 2939,
      height: 1665,
    },
  },
  {
    id: "zen-finance",
    plate: "Pl. B — Fintech",
    name: "Zen",
    blurb:
      "Multi-currency wallets, currency exchange and virtual cards you can create, fund and track. Integrates Maplerad and Paystack.",
    tags: "TypeScript / Next.js / Node.js / MongoDB",
    image: {
      src: "/images/zen-dashboard.jpeg",
      alt: "Zen fintech dashboard with multi-currency wallets and virtual cards",
      width: 2939,
      height: 1673,
    },
  },
  {
    id: "prospera-ai-dashboard",
    plate: "Pl. C — Analytics",
    name: "Prospera AI",
    blurb:
      "Dashboard for AI-personalised lead magnets and agentic follow-ups: intent-signal analytics, AI content generation and lead-magnet insights.",
    tags: "TypeScript / Next.js / Tailwind CSS / Recharts",
    image: {
      src: "/images/prospera-ai-dashboard.jpeg",
      alt: "Prospera AI dashboard with intent-signal analytics and lead magnet insights",
      width: 2938,
      height: 1656,
    },
  },
] satisfies MonographProject[];

export const PROJECTS = {
  sub: "Independent builds, shipped and live",
  count: `${PROJECT_ITEMS.length} plates`,
  items: PROJECT_ITEMS,
  urls: PROJECT_URLS,
};

// ---------- writing ----------

export interface MonographPost {
  id: PostId;
  topic: string;
  title: string;
  excerpt?: string;
  publication: string;
}

const WRITING_POSTS = [
  {
    id: "mvps-and-the-engineering-trap",
    topic: "Product",
    title: "MVPs and the Engineering Trap: Building What Actually Matters",
    excerpt:
      "Many startups fail not because they can’t build, but because they build the wrong things — perfectly.",
    publication: "Stackademic",
  },
  {
    id: "irreplaceable-software-engineer",
    topic: "Career",
    title: "The Irreplaceable Software Engineer in the AI Era",
    publication: "Stackademic",
  },
  {
    id: "beyond-silos",
    topic: "Career",
    title: "The Cross-Disciplinary Role of the Modern Software Engineer",
    publication: "Stackademic",
  },
  {
    id: "influence-of-senior-engineers",
    topic: "Leadership",
    title: "The Priceless Influence of Senior Engineers on Junior Engineers",
    publication: "Stackademic",
  },
  {
    id: "escrow-like-state-in-node-js",
    topic: "Node.js",
    title: "Implementing an Escrow-like State in Node.js",
    publication: "Stackademic",
  },
  {
    id: "json-web-tokens-guide",
    topic: "Security",
    title: "Authentication and Authorization with JSON Web Tokens",
    publication: "Medium",
  },
] satisfies MonographPost[];

const ESSAY_COUNT = `${WRITING_POSTS.length} essays`;

export const WRITING = {
  sub: "Essays on engineering, product and craft",
  count: ESSAY_COUNT,
  posts: WRITING_POSTS,
  urls: POST_URLS,
};

// ---------- navigation ----------

export const NAV_LINKS = [
  { label: "Work", href: "/#work", note: "Impact, projects" },
  { label: "Impact stories", href: "/impact-stories", note: `${IMPACT_STORIES.length} stories` },
  { label: "Writing", href: "/#writing", note: ESSAY_COUNT },
  { label: "Contact", href: "#contact", note: "Email" },
] as const;

// ---------- contact ----------

export const CONTACT = {
  kicker: "Contact",
  /** Locked delta: "Let's build something that matters." */
  headingLines: ["Let’s build something", "that matters."],
  colophon: "Set in Archivo Expanded and IBM Plex Mono, on a 12-column grid.",
  gridHint: "Press G for the grid",
};

// ---------- impact stories (story framing) ----------

export interface MonographMetric {
  kicker: string;
  num: string;
  cap: string;
}

export interface MonographStoryFraming<StoryId extends ImpactStoryId = ImpactStoryId> {
  titleLines: string[];
  deck: string;
  /** Extra sidenote rows after Company, Role, Period and Stack */
  sidenoteExtras?: { term: string; detail: string; href?: string }[];
  metrics: MonographMetric[];
  pull: { marked: string; rest: string; caption: string };
  /** One kicker per contribution id in the shared story; a missing one fails the type check */
  contributionKickers: Record<ContributionId<StoryId>, string>;
  /** Contributions shown before the metrics and pull quote (default 2) */
  splitIndex?: number;
}

export const IMPACT_STORIES_PAGE = {
  back: "Back to index",
  crumb: `Impact stories / ${IMPACT_STORIES.length}`,
  titleLines: ["Impact", "Stories"],
  indexKicker: `${capitalisedCountWord(IMPACT_STORIES.length)} stories`,
  nextKicker: "Next story",
  summaryKicker: "Summary",
};

export const STORY_FRAMING: { [StoryId in ImpactStoryId]: MonographStoryFraming<StoryId> } = {
  "agentic-college-applications": {
    titleLines: ["Agentic AI", "for College", "Applications"],
    deck: "Leading engineering on an agentic AI platform for college applications, from build to production launch: Skye, an in-app AI agent, SAT test prep and the infrastructure underneath.",
    metrics: [
      {
        kicker: "Velocity",
        num: "85+",
        cap: "PRs landed in 6 weeks, from build to production launch.",
      },
      {
        kicker: "Efficiency",
        num: "5–10×",
        cap: "Fewer LLM inference round-trips from batched tool calls.",
      },
      {
        kicker: "Practice",
        num: "1,000+",
        cap: "Questions in the bank behind adaptive SAT prep.",
      },
    ],
    pull: {
      marked: "An in-app AI agent",
      rest: " that guides each student’s application journey and auto-fills their forms.",
      caption: "On Skye, kept reliable by an eval harness",
    },
    contributionKickers: {
      "skye-ai-agent": "Agents",
      "sat-test-prep": "Learning",
      "inference-and-reliability": "Efficiency",
      "infrastructure-and-analytics": "Infrastructure",
      "engineering-process": "Process",
    },
  },
  "product-feedback": {
    titleLines: ["Product", "Feedback &", "Scaling", "Operations"],
    deck: "From Lead Software Engineer to Fractional Head of Engineering: building the AI-powered feedback product at the core of Peppermint, and the team that ships it.",
    sidenoteExtras: [
      { term: "Clients", detail: "Kuda, among others" },
      {
        term: "Also shipped",
        detail: "Testers’ app",
        href: PEPPERMINT_TESTER_URL,
      },
    ],
    metrics: [
      {
        kicker: "Adoption",
        num: "10,000+",
        cap: "Testers onboarded within the first month.",
      },
      {
        kicker: "Performance",
        num: "50×",
        cap: "Faster data-intensive operations via query optimisation and caching.",
      },
      {
        kicker: "Revenue",
        num: "$1,000+",
        cap: "Organic revenue within 3 months of in-app tests and surveys.",
      },
    ],
    pull: {
      marked: "An AI-powered feedback application",
      rest: " that became the core of Peppermint’s offering.",
      caption:
        "On the product feedback application, used by clients including Kuda",
    },
    contributionKickers: {
      "product-feedback-application": "Product",
      "testers-application-development": "Adoption",
      "performance-optimization-and-scaling": "Performance",
      "wallet-system-implementation": "Payments",
      "technical-leadership": "Leadership",
      "fractional-head-of-engineering": "Direction",
    },
  },
  "blue-collar-empowerment": {
    titleLines: ["Blue-Collar", "Empowerment", "Infrastructure"],
    deck: "Building the systems that connect skilled blue-collar artisans to jobs, training and income: recruitment, home maintenance, AI portfolios and the payouts behind them.",
    metrics: [
      {
        kicker: "Revenue",
        num: "₦45m+",
        cap: "Revenue from three product lines.",
      },
      {
        kicker: "Reliability",
        num: "99.9%",
        cap: "Uptime from more flexible, reliable deployments.",
      },
      {
        kicker: "Reach",
        num: "5,000+",
        cap: "Artisans presenting their work with the AI portfolio builder.",
      },
    ],
    pull: {
      marked: "Three product lines",
      rest: " that generated over ₦45m in revenue.",
      caption: "On artisan recruitment, community management and home maintenance",
    },
    contributionKickers: {
      "artisan-recruitment-and-home-maintenance-tools": "Revenue",
      "ai-driven-artisan-portfolio-system": "AI",
      "facility-maintenance-rest-api": "Integrations",
      "semi-automated-payout-system": "Payments",
      "analytics-and-funnel-optimization": "Analytics",
      "deployment-and-release-engineering": "Reliability",
      "seo-and-visibility": "Growth",
    },
  },
  "wynk-limited": {
    titleLines: ["Building a", "Lifestyle", "Super App and", "Web Platform"],
    deck: "Building the server side of a lifestyle super app’s financial services, and rebuilding the company’s web application in React, which lifted retention by 55%.",
    metrics: [
      {
        kicker: "Retention",
        num: "55%",
        cap: "Increase in retention after rebuilding the web application in React.",
      },
      {
        kicker: "Hiring",
        num: "4",
        cap: "Hires from candidate assessments: 3 software developers and 1 product designer.",
      },
    ],
    pull: {
      marked: "A 55% increase in retention",
      rest: " from rebuilding the company’s web application in React.",
      caption: "On the web application rebuild",
    },
    contributionKickers: {
      "wynk-super-app-financial-services": "Fintech",
      "web-application-rebuild": "Retention",
      "hiring-and-team-scaling": "Hiring",
      documentation: "Documentation",
    },
  },
};
