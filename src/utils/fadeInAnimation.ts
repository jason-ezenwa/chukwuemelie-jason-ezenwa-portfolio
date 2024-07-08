export const fadeIn = (direction: string, delay: any) => {
  return {
    hidden: {
      y: direction === "up" ? 120 : direction === "down" ? -120 : 0,
      x: direction === "left" ? 180 : direction === "right" ? -180 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.3,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.55],
      },
    },
  }
}