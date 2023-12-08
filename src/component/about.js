import { motion } from "framer-motion";
import { SiDjango } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactquery } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiFlask } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { boxAnimate } from "../animtionVariants/aboutAnimation";
import { headerAnimate } from "../animtionVariants/aboutAnimation";
import { Element } from "react-scroll";

const frontendlist = [
  { id: "react", label: "React", icon: <FaReact /> },
  { id: "redux", label: "Redux", icon: <TbBrandRedux /> },
  { id: "reactquery", label: "React qurey", icon: <SiReactquery /> },
  { id: "html", label: "Html", icon: <FaHtml5 /> },
  { id: "css", label: "Css", icon: <FaCss3Alt /> },
];
const backendlist = [
  { id: "django", label: "Django", icon: <SiDjango /> },
  { id: "nodejs", label: "Node js", icon: <FaNodeJs /> },
  { id: "express", label: "Express js", icon: <SiExpress /> },
  { id: "flask", label: "Flask", icon: <SiFlask /> },
  { id: "mysql", label: "Mysql", icon: <TbBrandMysql /> },
  { id: "mongoDb", label: "MongoDb", icon: <SiMongodb /> },
];
const langlist = [
  { id: "python", label: "Python", icon: <FaPython /> },
  { id: "javascript", label: "Javascript", icon: <IoLogoJavascript /> },
];

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
          className="container_header"
        >
          About
        </motion.div>
        <motion.div
          variants={headerAnimate}
          initial="initial"
          whileInView="animate"
          custom={0.2}
          className="container_content"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum debitis
          voluptatem ipsum explicabo? In animi enim nisi veniam sint quaerat
          distinctio harum corporis accusamus delectus obcaecati natus, quae
          velit magnam quisquam eos officia consequuntur deleniti eaque laborum
          temporibus fuga! Dolore aliquid facilis aut laudantium id veniam
          reprehenderit ipsum similique. Sequi soluta deleniti est fugiat, unde
          quia voluptatum quaerat porro minus! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Eum debitis voluptatem ipsum explicabo?
          In animi enim nisi veniam sint quaerat distinctio harum corporis
          accusamus delectus obcaecati natus, quae velit magnam quisquam eos
        </motion.div>
      </div>
      <div className="skill">
        <motion.div
          variants={headerAnimate}
          initial="initial"
          whileInView="animate"
          className="skill_header"
          custom={0.4}
        >
          My Skills
        </motion.div>
        <motion.div
          className="skill_lang"
          variants={boxAnimate}
          initial="initialRight"
          whileInView="animateRightLeft"
        >
          <div className="skill_lang_header">Languages</div>
          <div className="skill_lang_lists">
            {langlist.map((obj, ind) => {
              return (
                <div
                  className={`skill_lang_lists_${ind}`}
                  style={div_container}
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
          className="skill_front"
        >
          <div className="skill_front_header">Frontend Skills</div>
          <div className="skill_front_lists">
            {frontendlist.map((obj, ind) => {
              return (
                <div
                  className={`skill_front_lists_${ind}`}
                  style={div_container}
                >
                  <span style={icon_span}>{obj.icon}</span>
                  <span style={label_span}>{obj.label}</span>
                </div>
              );
            })}
            <div className="skill_front_lists....."></div>
          </div>
        </motion.div>
        <motion.iv
          variants={boxAnimate}
          initial="initialLeft"
          whileInView="animateRightLeft"
          className="skill_back"
        >
          <div className="skill_back_header">Backend Skills</div>
          <div className="skill_back_lists">
            {backendlist.map((obj, ind) => {
              return (
                <div
                  className={`skill_back_lists_${ind}`}
                  style={div_container}
                >
                  <span style={icon_span}>{obj.icon}</span>
                  <span style={label_span}>{obj.label}</span>
                </div>
              );
            })}
          </div>
        </motion.iv>
      </div>
    </Element>
  );
}
