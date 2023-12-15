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
import { useInView } from "react-hook-inview";

const highlight = {
  scale: "1.1",
  border: " 1px solid black",
  background: "white",
};

export default function Experience({ setActiveTab }) {
  const [state, setstate] = useState("education");
  const [ref, isVisible] = useInView({
    root: null,
    threshold: 1,
    unobserveOnEnter: false,
    onEnter: (enter, observer) => {
      setActiveTab("experience");
      console.log("enter", enter, observer);
    },
  });
  return (
    <div className="experience" name="experience">
      <motion.Element
        variants={headerAnimate}
        initial="initial"
        whileInView="animate"
        custom={0}
        viewport={{ once: true }}
        className="experience_header"
      >
        My Experience
      </motion.Element>
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
    </div>
  );
}
