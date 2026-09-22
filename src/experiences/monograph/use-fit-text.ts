import type { RefObject } from "react";
import { useIsomorphicLayoutEffect } from "@/experiences/monograph/use-isomorphic-layout-effect";

const PROBE_SIZE = 100;
const FIT_RATIO = 0.995;
const RESIZE_DEBOUNCE_MS = 80;

/**
 * Sizes `ref` so its widest line (`[data-fit-line] > span`) fills the element's width,
 * capped at `maxSize` px. Runs after `document.fonts.ready` and on a debounced resize.
 * Fits before paint so in-page hash scrolls land on the final layout.
 */
export function useFitText(ref: RefObject<HTMLElement>, maxSize: number) {
  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let cancelled = false;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;

    const fit = () => {
      if (cancelled || element.offsetParent === null) {
        return;
      }

      const lines = Array.from(
        element.querySelectorAll<HTMLElement>("[data-fit-line] > span"),
      );

      element.style.fontSize = `${PROBE_SIZE}px`;

      const widest = lines.reduce((max, line) => {
        line.style.display = "inline-block";
        const width = line.getBoundingClientRect().width;
        line.style.display = "";

        return Math.max(max, width);
      }, 0);

      const available = element.clientWidth;

      if (!widest || !available) {
        element.style.fontSize = "";
        return;
      }

      const size = Math.min(
        ((PROBE_SIZE * available) / widest) * FIT_RATIO,
        maxSize,
      );
      element.style.fontSize = `${size.toFixed(2)}px`;
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(fit, RESIZE_DEBOUNCE_MS);
    };

    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, maxSize]);
}
