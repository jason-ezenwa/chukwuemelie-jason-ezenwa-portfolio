import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface VideoSource {
  src: string;
  poster: string;
}

export interface ProjectVideoMedia extends VideoSource {
  label: string;
  // A narrower recording for phones, where the main one's text would be too small to read.
  phone?: VideoSource & { aspectClass: string };
}

export const SLACK_HOP_DEMO: ProjectVideoMedia = {
  src: "/videos/slack-hop-demo.mp4",
  poster: "/images/slack-hop-demo-poster.jpg",
  phone: {
    src: "/videos/slack-hop-demo-phone.mp4",
    poster: "/images/slack-hop-demo-phone-poster.jpg",
    // Its own shape (760 × 640). Scoped to max-sm, so the box is right from the first paint.
    aspectClass: "max-sm:aspect-[19/16]",
  },
  label:
    "slack-hop listing two workspaces, reading a Slack thread in which Claude answers a question, then replying in it",
};

// Matches Tailwind's max-sm, which the phone recording's aspectClass uses.
const PHONE_QUERY = "(max-width: 639px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function useMediaQuery(query: string, enabled = true): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (!enabled) return;
    const list = window.matchMedia(query);
    const update = () => setMatches(list.matches);
    update();
    list.addEventListener("change", update);
    return () => list.removeEventListener("change", update);
  }, [query, enabled]);
  return matches;
}

// A muted, looping demo that plays only while on screen, with a button to pause it. It never plays
// when the viewer prefers reduced motion: they see the poster, the recording's last frame.
// Phones get the narrower recording once the page has loaded.
export function ProjectVideo({
  video,
  className,
}: {
  video: ProjectVideoMedia;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const onPhone = useMediaQuery(PHONE_QUERY, Boolean(video.phone));
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);
  const [pausedByViewer, setPausedByViewer] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (reducedMotion || pausedByViewer) {
      element.pause();
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) element.play().catch(() => {});
      else element.pause();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [onPhone, reducedMotion, pausedByViewer]);

  const source = onPhone && video.phone ? video.phone : video;

  return (
    <div className="relative">
      <video
        key={source.src}
        ref={ref}
        src={source.src}
        poster={source.poster}
        aria-label={video.label}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={cn(className, video.phone?.aspectClass)}
      />
      <span className="sr-only">{video.label}</span>
      {!reducedMotion && (
        <button
          type="button"
          onClick={() => setPausedByViewer(playing)}
          className={cn(
            // Size and spacing
            "right-2 bottom-2 px-2 py-1",
            // Text
            "font-mono text-[11px] uppercase tracking-[0.08em] text-white",
            // Background
            "bg-black/60 hover:bg-black/80",
            // Layout
            "absolute",
            // Effects and interactive states
            "cursor-pointer",
          )}>
          {playing ? "Pause" : "Play"}
        </button>
      )}
    </div>
  );
}
