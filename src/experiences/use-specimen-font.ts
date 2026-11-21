import { useState } from "react";

export interface SpecimenFont {
  family: string;
  faces: { src: string; weight: number }[];
}

// Self-hosted from the ezenwa-grotesk v1.001 release (OFL, public/fonts/OFL.txt).
// The family name must match the [data-specimen="on"] rule in globals.css.
export const EZENWA_GROTESK: SpecimenFont = {
  family: "Ezenwa Grotesk",
  faces: [
    { src: "/fonts/EzenwaGrotesk-Regular.woff2", weight: 400 },
    { src: "/fonts/EzenwaGrotesk-Bold.woff2", weight: 700 },
  ],
};

type SpecimenState = "off" | "loading" | "on";

// Loads a typeface only when the viewer asks to see a card in it, so no page pays for it up front.
// Once loaded, toggling is instant; a failed load leaves the card in its own font.
export function useSpecimenFont(font: SpecimenFont | undefined) {
  const [state, setState] = useState<SpecimenState>("off");

  async function toggle() {
    if (!font || state === "loading") return;
    if (state === "on") {
      setState("off");
      return;
    }
    setState("loading");
    try {
      const faces = font.faces.map(
        ({ src, weight }) => new FontFace(font.family, `url(${src}) format("woff2")`, { weight: String(weight) }),
      );
      for (const face of await Promise.all(faces.map((face) => face.load()))) document.fonts.add(face);
      setState("on");
    } catch {
      setState("off");
    }
  }

  return { on: state === "on", loading: state === "loading", toggle };
}
