export const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x:
        direction === "left"
          ? 50
          : direction === "right"
          ? -50
          : 0,
      y:
        direction === "up"
          ? 50
          : direction === "down"
          ? -50
          : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay,
      },
    },
  };
};

export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.6,
        delay,
      },
    },
  };
};
