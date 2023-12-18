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
  border: " 1px solid var( --border2)",
  color: "var(--text-color)",
  backgroundColor: "var(--box-bg)",
};

export default function Experience({ setActiveTab, mode }) {
  const [state, setstate] = useState("education");
  const [ref] = useInView({
    root: null,
    threshold: 0.6,
    unobserveOnEnter: false,
    onEnter: (enter, observer) => {
      setActiveTab("experience");
    },
  });

  console.log(mode);
  return (
    <div className="experienceRef" ref={ref}>
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
          <VerticalTimeline
            lineColor={
              dict[state].length > 0
                ? mode === "light"
                  ? "black"
                  : "rgb(242, 236, 244)"
                : ""
            }
          >
            {dict[state].length > 0 ? (
              dict[state].map((obj) => {
                return <TimelineElement data={obj} key={obj.id} mode={mode} />;
              })
            ) : (
              <h1 style={{ textAlign: "center", color: "var(--text-color)" }}>
                No experience
              </h1>
            )}
          </VerticalTimeline>
        </div>
      </Element>
    </div>
  );
}
