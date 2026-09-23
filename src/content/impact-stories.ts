import {
  LABORHACK_API_DOCS_URL,
  LABORHACK_BUSINESSES_URL,
  LABORHACK_HOMEOWNERS_URL,
  LABORHACK_PORTFOLIO_URL,
  LABORHACK_URL,
  PEPPERMINT_TESTER_URL,
  PEPPERMINT_URL,
  SCOOLER_URL,
  WYNK_PLAY_STORE_URL,
  WYNK_URL,
} from "@/utils/constants";

export type ImpactStoryId =
  | "agentic-college-applications"
  | "product-feedback"
  | "blue-collar-empowerment"
  | "wynk-limited";

export interface ImpactStoryRole {
  title: string;
  /** `YYYY-MM` */
  start: string;
  /** `YYYY-MM`, or `null` while ongoing */
  end: string | null;
}

export interface ImpactStoryLink {
  label: string;
  href: string;
}

export interface ImpactStoryContribution {
  /** kebab-case, used as the key for per-experience framing */
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
  links?: ImpactStoryLink[];
}

export interface ImpactStory {
  /** Also the DOM anchor on `/impact-stories` */
  id: ImpactStoryId;
  company: string;
  companyUrl: string;
  title: string;
  /** More than one entry drives the role phases */
  roles: ImpactStoryRole[];
  location?: string;
  stack: string[];
  /** Paragraphs */
  overview: string[];
  contributions: ImpactStoryContribution[];
  impactSummary: string[];
}

const SCOOLER_AI: ImpactStory = {
  id: "agentic-college-applications",
  company: "Scooler AI",
  companyUrl: SCOOLER_URL,
  title: "Agentic AI for College Applications",
  roles: [{ title: "Lead Software Engineer", start: "2026-05", end: null }],
  stack: [
    "TypeScript",
    "React",
    "NestJS",
    "Vercel AI SDK",
    "MongoDB",
    "AWS",
    "Terraform",
    "Docker",
    "PostHog",
  ],
  overview: [
    "Scooler AI is an agentic AI platform that helps students through college applications. As Lead Software Engineer, I led engineering from build to production launch, landing 85+ PRs in 6 weeks, and owned the platform's infrastructure, analytics and engineering process.",
  ],
  contributions: [
    {
      id: "application-browser-agent",
      title: "Application Browser Agent",
      body: [
        "Built a steerable browser agent that auto-fills Common App and university application forms. Batched tool calls cut LLM inference round-trips 5–10x, and an eval harness keeps the agent reliable.",
      ],
      links: [{ label: "Visit Scooler AI", href: SCOOLER_URL }],
    },
    {
      id: "sat-test-prep",
      title: "SAT Test Prep",
      body: [
        "Built SAT prep with an adaptive diagnostic, AI-generated study plans, practice drills and full-length mock exams over a 1,000+ question bank.",
      ],
    },
    {
      id: "agentic-ai-assistant",
      title: "Agentic AI Assistant",
      body: [
        "Made Skye, the in-app AI assistant, agentic by building live web search and secure tools over each student's profile, recommendations and essays.",
      ],
    },
    {
      id: "infrastructure-and-analytics",
      title: "Infrastructure & Analytics",
      body: [
        "Owned infrastructure and analytics end to end with AWS, Terraform, MongoDB, Docker and PostHog.",
      ],
    },
    {
      id: "engineering-process",
      title: "Engineering Process",
      body: ["Established seed-stage engineering processes:"],
      bullets: [
        "Automated weekly AI code-quality reviews",
        "Jira epics and stories, RFCs and ADRs",
        "Multi-agent workflows to parallelize delivery",
      ],
    },
  ],
  impactSummary: [
    "Led the platform from build to production launch, landing 85+ PRs in 6 weeks",
    "Cut LLM inference round-trips 5–10x in the application browser agent with batched tool calls",
    "Shipped SAT prep over a 1,000+ question bank and an agentic in-app assistant",
  ],
};

const PEPPERMINT: ImpactStory = {
  id: "product-feedback",
  company: "Peppermint",
  companyUrl: PEPPERMINT_URL,
  title: "Product Feedback & Scaling Operations",
  roles: [
    { title: "Lead Software Engineer", start: "2024-04", end: "2026-01" },
    { title: "Fractional Head of Engineering", start: "2026-01", end: null },
  ],
  stack: ["Next.js", "NestJS", "TypeScript", "Vercel AI SDK", "MongoDB", "AWS"],
  overview: [
    "Peppermint develops digital tools to help companies collect and analyze product feedback. Starting as Lead Software Engineer, I directed engineering efforts to build user-facing applications that enhanced the product feedback process. In January 2026, I transitioned to Fractional Head of Engineering — leading engineering strategy, technical direction, and cross-functional alignment.",
  ],
  contributions: [
    {
      id: "product-feedback-application",
      title: "Product Feedback Application",
      body: [
        "Directed engineering efforts to create an AI-powered product feedback application that allowed clients (e.g Kuda) to gather, organize, and analyze detailed feedback from testers. This tool is the core part of Peppermint's offerings, enabling more informed product development decisions.",
        "Built AI-powered pipelines with LLMs to generate usability study reports, improving feedback insights for clients.",
        "Enabled the company to organically generate $1,000+ in revenue within 3 months by architecting in-app usability tests and surveys, validating early product-market fit.",
      ],
      links: [{ label: "Visit Peppermint", href: PEPPERMINT_URL }],
    },
    {
      id: "testers-application-development",
      title: "Testers' Application Development",
      body: [
        "I led the development of a testers' application that helped onboard 10,000+ testers within the first month. The platform was designed for ease of use, and its intuitive interface helped drive high adoption rates among new testers.",
      ],
      links: [{ label: "Visit the testers' application", href: PEPPERMINT_TESTER_URL }],
    },
    {
      id: "performance-optimization-and-scaling",
      title: "Performance Optimization & Scaling",
      body: [
        "I led the efforts that made data intensive operations 50x faster through query optimizations and caching.",
      ],
    },
    {
      id: "wallet-system-implementation",
      title: "Wallet System Implementation",
      body: [
        "Implemented the wallet (mints) system integrated with Stripe to streamline cash flows, enabling seamless transactions for both clients and testers.",
      ],
    },
    {
      id: "technical-leadership",
      title: "Technical Leadership",
      body: [
        "I took the lead in assessing new engineering hires, ensuring the team continued to grow with skilled developers. My leadership in recruitment helped maintain the quality and velocity of the engineering team as we expanded, leading to the successful release of Peppermint V1, following the MVP.",
      ],
    },
    {
      id: "fractional-head-of-engineering",
      title: "Fractional Head of Engineering",
      body: [
        "Transitioned to Fractional Head of Engineering in January 2026, taking on broader responsibilities including engineering strategy, technical direction, and cross-functional alignment.",
      ],
    },
  ],
  impactSummary: [
    "Launched a product feedback application used by companies like Kuda",
    "Built AI-powered pipelines with LLMs to generate usability study reports",
    "Architected in-app usability tests and surveys which generated over $1,000 within 3 months",
    "Built the testers' application that onboarded 10,000+ testers in a month",
    "Implemented wallet system integrated with Stripe for streamlined cash flows",
    "Transitioned to Fractional Head of Engineering in January 2026",
  ],
};

const LABORHACK: ImpactStory = {
  id: "blue-collar-empowerment",
  company: "LaborHack",
  companyUrl: LABORHACK_URL,
  title: "Blue-Collar Empowerment Infrastructure",
  roles: [{ title: "Software Engineer", start: "2024-01", end: "2026-05" }],
  stack: [
    "TypeScript",
    "React",
    "Node.js",
    "GraphQL",
    "MongoDB",
    "AWS",
    "Docker",
  ],
  overview: [
    "LaborHack is a platform that connects skilled blue-collar artisans to jobs, training, and income opportunities. As part of a distributed engineering team, I contributed to the architecture and implementation of several core systems that powered growth, retention, and automation across the platform.",
  ],
  contributions: [
    {
      id: "artisan-recruitment-and-home-maintenance-tools",
      title: "Artisan Recruitment & Home Maintenance Tools",
      body: [
        "Collaborated cross-functionally to build and launch three product lines that generated over ₦45m in revenue:",
      ],
      bullets: [
        "Artisan recruitment products, as well as a community management tool for businesses, accelerating onboarding and increasing partner satisfaction.",
        "A home maintenance product that connects 1,000+ homeowners with skilled labor, increasing company revenue.",
      ],
      links: [
        { label: "Businesses", href: LABORHACK_BUSINESSES_URL },
        { label: "Homeowners", href: LABORHACK_HOMEOWNERS_URL },
      ],
    },
    {
      id: "ai-driven-artisan-portfolio-system",
      title: "AI-Driven Artisan Portfolio System",
      body: [
        "Contributed to the design and engineering of a portfolio builder that leverages AI to help 5,000+ artisans present their experience, skills, and past work.",
        "This tool exposes artisans to higher-value jobs.",
      ],
      links: [{ label: "View Portfolio", href: LABORHACK_PORTFOLIO_URL }],
    },
    {
      id: "facility-maintenance-rest-api",
      title: "Facility Maintenance REST API",
      body: [
        "Built a REST API that allows external third-party companies to outsource facility maintenance to LaborHack's network of vetted artisans, opening up a new B2B integration channel.",
      ],
      links: [{ label: "API Documentation", href: LABORHACK_API_DOCS_URL }],
    },
    {
      id: "semi-automated-payout-system",
      title: "Semi-Automated Payout System",
      body: [
        "Architected and implemented a payout workflow that streamlined payments to artisans and referrers.",
      ],
      bullets: [
        "Reduced processing time",
        "Improved the quality of life of the customer success team",
      ],
    },
    {
      id: "analytics-and-funnel-optimization",
      title: "Analytics & Funnel Optimization",
      body: [
        "Managed and implemented analytics dashboards for three key products using MongoDB Charts and Google Analytics.",
      ],
      bullets: [
        "Tracked usage, user behavior, and drop-offs to guide feature improvements",
        "Played a key role in reducing churn and improving activation",
      ],
    },
    {
      id: "deployment-and-release-engineering",
      title: "Deployment & Release Engineering",
      body: ["Improved the reliability and flexibility of releases by:"],
      bullets: [
        "Introducing feature toggles to control rollout",
        "Writing unit tests that boosted confidence in deployments and reduced rollback incidents by 40%",
      ],
    },
    {
      id: "seo-and-visibility",
      title: "SEO & Visibility",
      body: [
        "Enhanced the company's online visibility through collaborative SEO strategies with the marketing team.",
      ],
      bullets: [
        "Boosted organic traffic by 28% and improved the platform's visibility in search engines by 21%",
      ],
    },
  ],
  impactSummary: [
    "Built systems for artisan recruitment, home maintenance, and AI-driven portfolios, generating over ₦45m in revenue",
    "Provided data-driven insights that guided product improvements and optimized funnels",
    "Improved the flexibility and reliability of software deployments ensuring 99.9% uptime",
  ],
};

const WYNK: ImpactStory = {
  id: "wynk-limited",
  company: "Wynk",
  companyUrl: WYNK_URL,
  title: "Building a Lifestyle Super App and Web Platform",
  roles: [{ title: "Full Stack Developer", start: "2023-09", end: "2024-04" }],
  stack: ["JavaScript", "Node.js", "Express", "React"],
  overview: [
    "At Wynk, I worked within a cross-functional team on the Wynk Super App, focusing on financial services modules. I rebuilt the company's web application with React, which increased retention by 55%. I also contributed to team growth by evaluating candidates and documenting systems comprehensively.",
  ],
  contributions: [
    {
      id: "wynk-super-app-financial-services",
      title: "Wynk Super App – Financial Services",
      body: [
        "Collaborated with product, design, and QA to build a lifestyle super app and my main focus was to implement the server side for the application's financial services using Node.js and Express.",
      ],
      links: [{ label: "Wynk on Google Play", href: WYNK_PLAY_STORE_URL }],
    },
    {
      id: "web-application-rebuild",
      title: "Web Application Rebuild",
      body: [
        "I rebuilt the company's web application with React, improving visual appeal, user experience and making actionable items clearer. This resulted in a 55% increase in retention.",
      ],
      links: [{ label: "Visit Wynk", href: WYNK_URL }],
    },
    {
      id: "hiring-and-team-scaling",
      title: "Hiring & Team Scaling",
      body: [
        "Assessed technical and cultural fit of candidates, leading to the hiring of 3 software developers and 1 product designer who accelerated delivery.",
      ],
    },
    {
      id: "documentation",
      title: "Documentation",
      body: [
        "Authored thorough documentation across Wynk-related software to improve onboarding and maintenance.",
      ],
    },
  ],
  impactSummary: [
    "Contributed to a lifestyle super app, focusing on financial services",
    "Rebuilt the company web application in React, increasing retention by 55%",
    "Led technical and culture-fit assessment of new hires",
  ],
};

/** Display order */
export const IMPACT_STORIES: ImpactStory[] = [
  SCOOLER_AI,
  PEPPERMINT,
  LABORHACK,
  WYNK,
];
