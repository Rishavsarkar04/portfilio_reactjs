import { Element } from "react-scroll";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "../ui/verticalElement";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { useState } from "react";
import { motion } from "framer-motion";
import { headerAnimate } from "../animtionVariants/aboutAnimation";
import { dict } from "../data/data";

const highlight = {
  scale: "1.1",
  border: " 1px solid black",
  background: "white",
};

export default function Experience() {
  const [state, setstate] = useState("education");
  return (
    <Element className="experience" name="experience">
      <motion.div
        variants={headerAnimate}
        initial="initial"
        whileInView="animate"
        custom={0}
        viewport={{ once: true }}
        className="experience_header"
      >
        My Experience
      </motion.div>
      <div className="experience_tab">
        <div
          className="education"
          style={state === "education" ? highlight : {}}
          onClick={() => {
            setstate("education");
          }}
        >
          <HiOutlineAcademicCap />
          Education
        </div>
        <div
          className="job"
          style={state === "job" ? highlight : {}}
          onClick={() => {
            setstate("job");
          }}
        >
          <PiSuitcaseSimpleBold /> Job Experience
        </div>
      </div>
      <div className="experience_timeline">
        <VerticalTimeline lineColor={dict[state].length > 0 ? "black" : ""}>
          {dict[state].length > 0 ? (
            dict[state].map((obj) => {
              return <TimelineElement data={obj} key={obj.id} />;
            })
          ) : (
            <h1 style={{ textAlign: "center" }}>No experience</h1>
          )}
        </VerticalTimeline>
      </div>
    </Element>
  );
}
