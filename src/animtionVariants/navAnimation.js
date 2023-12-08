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
