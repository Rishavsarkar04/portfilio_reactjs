import { projects } from "../data/data";
import { Element } from "react-scroll";

import { motion, useScroll, useTransform } from "framer-motion";
import { headerAnimate } from "../animtionVariants/aboutAnimation";
import { useRef, useState } from "react";
import { buttonsAnimation } from "../animtionVariants/headerAnimation";
import Projectcard from "../ui/projectCard";
import { useInView } from "react-hook-inview";

export default function Project({ setActiveTab }) {
  const ref = useRef(null);

  const [Limit, setLimit] = useState(8);

  const len = projects.length;
  const project = projects.slice(0, Limit);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"],
  });
  const scale = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    [0.9, 1]
  );

  const [container] = useInView({
    root: null,
    threshold: 0.6,
    unobserveOnEnter: false,
    onEnter: (enter, observer) => {
      setActiveTab("project");
    },
  });
  return (
    <div className="projectRef" ref={container}>
      <Element className="project">
        <motion.div
          variants={headerAnimate}
          initial="initial"
          whileInView="animate"
          custom={0}
          viewport={{ once: true }}
          className="project_header"
        >
          My Projects
        </motion.div>
        <div
          className="project_container"
          ref={ref}
          style={{ marginBottom: len < Limit ? "4rem" : "" }}
        >
          {project.map((proj) => {
            return <Projectcard proj={proj} scale={scale} key={proj.id} />;
          })}
        </div>
        {len > Limit && (
          <motion.div
            variants={buttonsAnimation}
            whileHover="hover"
            className="project_loadmore"
            onClick={() => {
              setLimit((prev) => {
                return prev + 4;
              });
            }}
          >
            Load More
          </motion.div>
        )}
      </Element>
    </div>
  );
}
