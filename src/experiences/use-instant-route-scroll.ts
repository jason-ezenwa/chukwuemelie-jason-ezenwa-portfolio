import { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * Both experiences set `scroll-behavior: smooth` for in-page anchor jumps.
 * Route changes should jump instantly instead of animating through the page,
 * so smooth scrolling is suspended from route start until the new page has scrolled.
 */
export function useInstantRouteScroll() {
  const router = useRouter();

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const suspend = () => {
      cancelAnimationFrame(frame);
      root.style.scrollBehavior = "auto";
    };

    const restore = () => {
      // Next scrolls after the route commits; wait two frames before restoring.
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          root.style.scrollBehavior = "";
        });
      });
    };

    router.events.on("routeChangeStart", suspend);
    router.events.on("routeChangeComplete", restore);
    router.events.on("routeChangeError", restore);

    return () => {
      cancelAnimationFrame(frame);
      router.events.off("routeChangeStart", suspend);
      router.events.off("routeChangeComplete", restore);
      router.events.off("routeChangeError", restore);
    };
  }, [router.events]);
}
