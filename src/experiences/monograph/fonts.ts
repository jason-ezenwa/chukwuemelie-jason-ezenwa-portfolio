import { Archivo, IBM_Plex_Mono } from "next/font/google";

/** Display and text face. The `wdth` axis drives the expanded (125%) and semi-expanded (112%) cuts. */
export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  display: "swap",
});

/** Labels, captions and metadata */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
