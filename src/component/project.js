import { projects } from "../data/data";
import { Element } from "react-scroll";

import { motion, useScroll, useTransform } from "framer-motion";
import { headerAnimate } from "../animtionVariants/aboutAnimation";
import { useRef, useState } from "react";
import { buttonsAnimation } from "../animtionVariants/headerAnimation";
import Projectcard from "../ui/projectCard";

export default function Project() {
  const ref = useRef(null);
  const [Limit, setLimit] = useState(8);
  const len = projects.length;
  // console.log(len);
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

  // console.log(scrollY);
  return (
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
  );
}
