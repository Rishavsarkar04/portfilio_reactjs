export const mailimageAnimation = {
  initial: {
    scale: 0,
    opacity: 0,
    rotate: 360,
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      opacity: {
        duration: 2,
      },
      rotate: {
        duration: 4,
      },
      scale: {
        duration: 3,
      },
    },
  },
};

export const formAnimation = {
  initialContainer: {
    x: -30,
    opacity: 0,
  },
  initialForm: {
    x: 20,
    opacity: 0,
  },
  animate: (t) => {
    return {
      x: 0,
      opacity: 1,
      transition: {
        duration: 3,
        delay: 1 * t,
      },
    };
  },
};
