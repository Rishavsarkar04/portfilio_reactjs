import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

export default function Projectcard({ proj, scale }) {
  return (
    <motion.div
      style={{ scale: scale }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
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
}
