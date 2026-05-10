import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={cn(
        `${geistSans.variable} ${jetBrainsMono.variable} font-sans min-h-screen flex flex-col`,
      )}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
