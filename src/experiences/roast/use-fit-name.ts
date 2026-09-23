import { useEffect, useLayoutEffect, useRef } from "react";

const PROBE_FONT_SIZE = 100;
const MAX_FONT_SIZE = 240;
const FIT_RATIO = 0.985;
const RESIZE_DEBOUNCE_MS = 80;

// Fit before paint so in-page hash scrolls land on the final layout.
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Fits an element's single line to its parent's width at its final (800) weight.
 * Runs after `document.fonts.ready` and on a debounced resize.
 */
export function useFitName<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    let isActive = true;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;

    const fit = () => {
      const parent = element.parentElement;

      if (!isActive || !parent) return;

      const box = parent.getBoundingClientRect().width;

      if (!box) return;

      const probe = element.cloneNode(true) as T;

      probe.removeAttribute("id");
      probe.setAttribute("aria-hidden", "true");
      probe.style.cssText = `position:absolute;visibility:hidden;white-space:nowrap;animation:none;font-weight:800;font-size:${PROBE_FONT_SIZE}px;display:inline-block`;
      parent.appendChild(probe);

      const width = probe.getBoundingClientRect().width;

      probe.remove();

      if (width) {
        const size = Math.min(
          ((PROBE_FONT_SIZE * box) / width) * FIT_RATIO,
          MAX_FONT_SIZE,
        );

        element.style.fontSize = `${size.toFixed(2)}px`;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(fit, RESIZE_DEBOUNCE_MS);
    };

    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", handleResize);

    return () => {
      isActive = false;
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return ref;
}
