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

// Matches Tailwind's max-sm, which the phone recording's aspectClass uses.
const PHONE_QUERY = "(max-width: 639px)";

// A muted, looping demo that plays only while on screen, and never when the viewer prefers reduced motion:
// they see the poster, which is the recording's last frame. Phones get the narrower recording, at its own
// aspect ratio, once the page has loaded.
export function ProjectVideo({
  video,
  className,
}: {
  video: ProjectVideoMedia;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [onPhone, setOnPhone] = useState(false);

  useEffect(() => {
    if (!video.phone) return;
    const query = window.matchMedia(PHONE_QUERY);
    const update = () => setOnPhone(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [video.phone]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) element.play().catch(() => {});
      else element.pause();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [onPhone]);

  const source = onPhone && video.phone ? video.phone : video;

  return (
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
      className={cn(className, onPhone && video.phone?.aspectClass)}
    />
  );
}
