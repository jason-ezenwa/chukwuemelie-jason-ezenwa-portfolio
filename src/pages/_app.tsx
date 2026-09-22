import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
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
