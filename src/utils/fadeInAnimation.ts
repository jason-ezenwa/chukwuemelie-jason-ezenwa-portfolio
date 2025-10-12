export const fadeIn = (direction: string, delay: any) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      opacity: 1, // keep opacity at 1 to prevent layout shifts
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
}