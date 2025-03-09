export const fadeIn = (direction: string, delay: any) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      x: direction === "left" ? 300 : direction === "right" ? -300 : 0,
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