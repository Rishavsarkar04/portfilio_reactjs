export const headerAnimate = {
  initial: {
    y: "-5rem",
    opacity: 0,
  },
  animate: (t) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1 * t,
      },
    };
  },
};

export const boxAnimate = {
  initialRight: {
    x: "-5rem",
  },
  initialLeft: {
    x: "5rem",
  },
  initialDown: {
    y: "4rem",
  },
  animateRightLeft: {
    x: 0,
    transition: {
      duration: 2,
    },
  },
  animateDown: {
    y: 0,
    transition: {
      duration: 2,
    },
  },
};
