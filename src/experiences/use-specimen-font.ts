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

// One load per family for the whole page, shared by every card and kept across toggles.
const loads = new Map<string, Promise<void>>();

function loadFont(font: SpecimenFont): Promise<void> {
  let load = loads.get(font.family);
  if (!load) {
    load = Promise.all(
      font.faces.map(({ src, weight }) =>
        new FontFace(font.family, `url(${src}) format("woff2")`, { weight: String(weight) }).load(),
      ),
    ).then((faces) => faces.forEach((face) => document.fonts.add(face)));
    // A failed load is forgotten, so the next click tries again.
    load.catch(() => loads.delete(font.family));
    loads.set(font.family, load);
  }
  return load;
}

type SpecimenState = "off" | "loading" | "on";

// Loads a typeface only when the viewer asks to see a card in it, so no page pays for it up front.
// After the first load, toggling is instant; a failed load leaves the card in its own font.
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
      await loadFont(font);
      setState("on");
    } catch {
      setState("off");
    }
  }

  return { on: state === "on", loading: state === "loading", toggle };
}
