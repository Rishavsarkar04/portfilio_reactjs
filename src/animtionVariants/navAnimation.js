// import { easeInOut } from "framer-motion";

export const navAnimation = {
  initial: {
    y: -10,
  },
  animate: (t) => {
    return {
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 * t,
        ease: "linear",
      },
    };
  },
};

export const sidenavAnimation = {
  initial: {
    // top: "2rem",
    // left: "2rem",
    top: "2.5rem",
    left: "2.5rem",
    height: 0,
    width: 0,
  },
  animate: (t) => {
    return {
      top: "1rem",
      left: "1rem",
      height: "30rem",
      width: "30rem",
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    };
  },

  exit: {
    top: "2.5rem",
    left: "2.5rem",
    height: 0,
    width: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const sidenavLinkAnimation = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: (t) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3 * t,
        ease: "linear",
      },
    };
  },

  exit: (t) => {
    return {
      y: -10,
      opacity: 0,
      transition: {
        duration: 0.3,
        // delay: 0.2 * t,
        ease: "linear",
      },
    };
  },
};
