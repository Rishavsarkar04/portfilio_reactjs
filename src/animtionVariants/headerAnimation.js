import { easeInOut } from "framer-motion";

export const picAnimation = {
  initial: {
    translateX: 60,
    opacity: 0.2,
  },
  animate: {
    translateX: 0,
    opacity: 1,
    transition: {
      ease: easeInOut,
      duration: 2,
    },
  },
};

export const socialMediaAnimation = {
  initial: {
    translateX: -20,
    opacity: 0.2,
  },
  animate: {
    translateX: 0,
    opacity: 1,
    transition: {
      ease: easeInOut,
      duration: 1,
    },
  },
};

export const buttonsAnimation = {
  contactInitial: {
    translateX: -15,
    opacity: 0,
  },
  contactAnimate: {
    translateX: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easeInOut,
      delay: 4,
    },
  },
  cvInitial: {
    translateX: 15,
    opacity: 0,
  },
  cvAnimate: {
    translateX: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easeInOut,
      delay: 4,
    },
  },

  hover: {
    scale: 1.1,
    boxShadow: "5px 5px 0 var(--shadow2)",
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 1,
    boxShadow: "5px 5px 0 var(--shadow2)",
    transition: { duration: 0.2 },
  },
};

export const contentAnimation = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: (t) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1 * t,
      },
    };
  },
};

// export const container = {
//   initial: { y: -20 },
//   animate: {
//     y: 0,
//     transition: {
//       duration: 2,
//       staggerChildren: 2,
//       delayChildren: 2,
//     },
//   },
// };
