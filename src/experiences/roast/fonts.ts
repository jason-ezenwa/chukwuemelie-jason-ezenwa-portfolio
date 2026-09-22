import { Bricolage_Grotesque, JetBrains_Mono, Newsreader } from "next/font/google";

export const roastDisplayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const roastBodyFont = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  fallback: ["Iowan Old Style", "Georgia", "serif"],
  // next/font has no fallback metrics for Newsreader
  adjustFontFallback: false,
});

export const roastMonoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

/** Exposes the self-hosted families as the `--roast-font-*` tokens on the root. */
export const ROAST_FONT_VARIABLES = `:root[data-experience="roast"]{--roast-font-display:${roastDisplayFont.style.fontFamily};--roast-font-body:${roastBodyFont.style.fontFamily};--roast-font-mono:${roastMonoFont.style.fontFamily};}`;
