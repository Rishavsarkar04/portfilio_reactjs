import { project } from "../data/data";
import { Element } from "react-scroll";
import { MdArrowOutward } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import { headerAnimate } from "../animtionVariants/aboutAnimation";
import { useRef } from "react";

export default function Project() {
  const ref = useRef(null);
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
      <div className="project_container" ref={ref}>
        {project.map((proj) => {
          return (
            <motion.div
              style={{ scale: scale }}
              className="project_card"
              key={proj.id}
            >
              <img src="/img/img1.jpg" alt="/img/img1.jpg"></img>
              <div className="project_card_container">
                <div className="project_card_container_header">{proj.name}</div>
                <div className="project_card_container_desc">{proj.desc}</div>

                <ul className="project_card_container_techs">
                  {proj.techs.map((tech, ind) => {
                    return (
                      <li className="tect_list" key={ind}>
                        {tech}
                      </li>
                    );
                  })}
                </ul>
                <div className="buttons">
                  <button className="project_links">
                    Visit Site <MdArrowOutward />
                  </button>
                  <button className="github_link">
                    Github <MdArrowOutward />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Element>
  );
}
