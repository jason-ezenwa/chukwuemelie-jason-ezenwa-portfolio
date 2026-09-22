import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useInstantRouteScroll } from "@/experiences/use-instant-route-scroll";

export default function App({ Component, pageProps }: AppProps) {
  useInstantRouteScroll();

  return (
    <ThemeProvider
      attribute="data-theme"
      storageKey="portfolio-theme"
      defaultTheme="system"
      enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
