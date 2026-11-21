import { useEffect, useRef } from "react";

export interface ProjectVideoMedia {
  src: string;
  poster: string;
  label: string;
}

// A muted, looping demo that plays only while on screen, and never when the viewer prefers reduced motion:
// they see the poster, which is the recording's last frame.
export function ProjectVideo({
  video,
  className,
}: {
  video: ProjectVideoMedia;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

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
  }, []);

  return (
    <video
      ref={ref}
      src={video.src}
      poster={video.poster}
      aria-label={video.label}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}
