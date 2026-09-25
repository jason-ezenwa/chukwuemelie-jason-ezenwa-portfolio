import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import { useInstantRouteScroll } from "@/experiences/use-instant-route-scroll";
import { skipOptedOutVisits } from "@/lib/analytics-opt-out";

export default function App({ Component, pageProps }: AppProps) {
  useInstantRouteScroll();

  return (
    <ThemeProvider
      attribute="data-theme"
      storageKey="portfolio-theme"
      defaultTheme="system"
      enableSystem>
      <Component {...pageProps} />
      <Analytics beforeSend={skipOptedOutVisits} />
    </ThemeProvider>
  );
}
