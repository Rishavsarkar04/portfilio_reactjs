import { motion } from "framer-motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
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
      {/* <LazyLoadImage src={proj.img} effect="blur" alt="Project image" /> */}

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
          {proj.site_url && (
            <button className="project_links">
              <a href={proj.site_url}>
                Visit Site <MdArrowOutward />
              </a>
            </button>
          )}
          {proj.github_url && (
            <button className="github_link">
              <a href={proj.github_url}>
                Github <MdArrowOutward />
              </a>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
