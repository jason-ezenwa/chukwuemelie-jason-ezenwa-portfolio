export const RESUME_URL =
  "https://drive.google.com/file/d/1cAvPMzTLxB9TSi7lBPi8GTOR1iXhWak3/view";

export const LINKEDIN_URL = "https://www.linkedin.com/in/chukwuemelie-obumse/";

export const GITHUB_URL = "https://github.com/jason-ezenwa";

export const EMAIL_ADDRESS = "chukwuemelie.ezenwa@gmail.com";

export const EMAIL_URL = `mailto:${EMAIL_ADDRESS}`;

// Companies
export const SCOOLER_URL = "https://scooler.ai/";

export const PEPPERMINT_URL = "https://www.runpeppermint.com/";

export const PEPPERMINT_TESTER_URL = "https://tester.runpeppermint.com/";

export const LABORHACK_URL = "https://www.laborhack.com/";

export const LABORHACK_BUSINESSES_URL = "https://www.laborhack.com/businesses";

export const LABORHACK_HOMEOWNERS_URL = "https://www.laborhack.com/homeowners";

export const LABORHACK_PORTFOLIO_URL = "https://www.laborhack.com/portfolio";

export const LABORHACK_API_DOCS_URL = "https://www.laborhack.com/api-docs";

export const WYNK_URL = "https://wynk.ng/";

export const WYNK_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=ng.wynk.wynksupappsupapp&pli=1";

// Projects
export type ProjectId = "hunt-assistant" | "zen-finance" | "prospera-ai-dashboard";

export const PROJECT_URLS: Record<ProjectId, { live: string; repo: string }> = {
  "hunt-assistant": {
    live: "https://hunt-assistant.vercel.app/",
    repo: "https://github.com/jason-ezenwa/hunt-assistant",
  },
  "zen-finance": {
    live: "https://try-zen-finance.vercel.app/",
    repo: "https://github.com/jason-ezenwa/zen-finance",
  },
  "prospera-ai-dashboard": {
    live: "https://prospera-ai-dashboard-one.vercel.app/",
    repo: "https://github.com/jason-ezenwa/prospera-ai-dashboard",
  },
};

// Writing
export type PostId =
  | "mvps-and-the-engineering-trap"
  | "irreplaceable-software-engineer"
  | "beyond-silos"
  | "influence-of-senior-engineers"
  | "escrow-like-state-in-node-js"
  | "json-web-tokens-guide";

export const POST_URLS: Record<PostId, string> = {
  "mvps-and-the-engineering-trap":
    "https://blog.stackademic.com/mvps-and-the-engineering-trap-building-what-actually-matters-6c253bb5b3cd",
  "irreplaceable-software-engineer":
    "https://blog.stackademic.com/the-irreplaceable-software-engineer-thriving-in-the-age-of-ai-569525593922",
  "beyond-silos":
    "https://blog.stackademic.com/beyond-silos-the-cross-disciplinary-role-of-the-modern-software-engineer-23305b55389b",
  "influence-of-senior-engineers":
    "https://blog.stackademic.com/the-priceless-influence-of-senior-software-engineers-on-junior-engineers-c7c7cac89747",
  "escrow-like-state-in-node-js":
    "https://blog.stackademic.com/implementing-an-escrow-like-state-in-node-js-building-trust-and-security-in-online-transactions-a8058144c005",
  "json-web-tokens-guide":
    "https://medium.com/stackademic/the-definitive-guide-to-authentication-and-authorization-with-json-web-tokens-everything-you-need-5bc7795cb668",
};
