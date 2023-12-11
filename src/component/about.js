import { motion } from "framer-motion";
import { boxAnimate } from "../animtionVariants/aboutAnimation";
import { headerAnimate } from "../animtionVariants/aboutAnimation";
import { Element } from "react-scroll";

import { frontendlist, backendlist, langlist } from "../data/data";

const div_container = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

const icon_span = {
  marginRight: "0.8rem",
  fontSize: "2rem",
};

const label_span = {
  fontSize: "1.5rem",
  fontWeight: "500",
};

export default function About() {
  return (
    <Element className="about" name="about">
      <div className="container">
        <motion.div
          variants={headerAnimate}
          initial="initial"
          whileInView="animate"
          custom={0}
          viewport={{ once: true }}
          className="container_header"
        >
          About Me
        </motion.div>
        <motion.div
          variants={headerAnimate}
          initial="initial"
          whileInView="animate"
          custom={0.2}
          viewport={{ once: true }}
          className="container_content"
        >
          Hello, I'm a Passionate <b>Full Stack Developer </b>based in Kolkata.
          with expertise in <b>front-end</b> and <b>back-end technologies</b>.
          Proficient in creating robust, scalable web applications. Experienced
          in working with diverse tech stacks, including{" "}
          <b>JavaScript, React, Node.js, Python, Django, Flask </b>
          and more. Committed to delivering innovative solutions and staying
          updated with the latest industry trends. with the knowledge. I'm open
          to Job opportunities where I can contribute, learn and grow. If you
          have a good opportunity that matches my skills and experience then
          don't hesitate to contact me. <b>Let's build the future together!.</b>
        </motion.div>
      </div>
      <div className="skill">
        <motion.div
          variants={headerAnimate}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="skill_header"
          custom={0.4}
        >
          My Skills
        </motion.div>
        <motion.div
          className="skill_lang"
          variants={boxAnimate}
          initial="initialRight"
          viewport={{ once: true }}
          whileInView="animateRightLeft"
        >
          <div className="skill_lang_header">Languages</div>
          <div className="skill_lang_lists">
            {langlist.map((obj, ind) => {
              return (
                <div
                  className={`skill_lang_lists_${ind}`}
                  style={div_container}
                  key={obj.id}
                >
                  <span
                    style={{
                      marginRight: "0.8rem",
                      fontSize: "2rem",
                    }}
                  >
                    {obj.icon}
                  </span>
                  <span style={label_span}>{obj.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          variants={boxAnimate}
          initial="initialDown"
          whileInView="animateDown"
          viewport={{ once: true }}
          className="skill_front"
        >
          <div className="skill_front_header">Frontend Skills</div>
          <div className="skill_front_lists">
            {frontendlist.map((obj, ind) => {
              return (
                <div
                  className={`skill_front_lists_${ind}`}
                  style={div_container}
                  key={obj.id}
                >
                  <span style={icon_span}>{obj.icon}</span>
                  <span style={label_span}>{obj.label}</span>
                </div>
              );
            })}
            <div className="skill_front_lists....."></div>
          </div>
        </motion.div>
        <motion.div
          variants={boxAnimate}
          initial="initialLeft"
          whileInView="animateRightLeft"
          viewport={{ once: true }}
          className="skill_back"
        >
          <div className="skill_back_header">Backend Skills</div>
          <div className="skill_back_lists">
            {backendlist.map((obj, ind) => {
              return (
                <div
                  className={`skill_back_lists_${ind}`}
                  style={div_container}
                  key={obj.id}
                >
                  <span style={icon_span}>{obj.icon}</span>
                  <span style={label_span}>{obj.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Element>
  );
}
