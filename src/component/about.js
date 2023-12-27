import { motion } from "framer-motion";
import { boxAnimate } from "../animtionVariants/aboutAnimation";
import { headerAnimate } from "../animtionVariants/aboutAnimation";
import { Element } from "react-scroll";
import aboutAnimation from "../animationloffiees/aboutAnimation.json";
import { frontendlist, backendlist, langlist } from "../data/data";
import Lottie from "lottie-react";
import SkillContainer from "../ui/skillContainer";
import { useInView } from "react-hook-inview";
import { useMediaQuery } from "@react-hook/media-query";

export default function About({ setActiveTab }) {
  const matches = useMediaQuery("only screen and (max-width: 450px)");
  const [ref] = useInView({
    root: null,
    threshold: matches ? 0.2 : 0.6,
    unobserveOnEnter: false,
    onEnter: (enter, observer) => {
      setActiveTab("about");
      console.log("about enter");
    },
  });

  return (
    <div className="aboutRef" ref={ref}>
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
            <div>
              <Lottie
                animationData={aboutAnimation}
                style={{
                  height: "20rem",
                  width: "40rem",
                }}
                loop={true}
              />
            </div>
            <p>
              Hello, I'm a Passionate <b>Full Stack Developer </b>based in
              Kolkata. with expertise in <b>front-end</b> and{" "}
              <b>back-end technologies</b>. Proficient in creating robust,
              scalable web applications. Experienced in working with diverse
              tech stacks, including{" "}
              <b>JavaScript, React, Node.js, Python, Django, Flask </b>
              and more. Committed to delivering innovative solutions and staying
              updated with the latest industry trends. with the knowledge. I'm
              open to Job opportunities where I can contribute, learn and grow.
              <b>Let's build the future together!.</b>
            </p>
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
                return <SkillContainer obj={obj} ind={ind} key={obj.id} />;
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
                return <SkillContainer obj={obj} ind={ind} key={obj.id} />;
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
                return <SkillContainer obj={obj} ind={ind} key={obj.id} />;
              })}
            </div>
          </motion.div>
        </div>
      </Element>
    </div>
  );
}
