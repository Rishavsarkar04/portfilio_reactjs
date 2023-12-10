import { Element } from "react-scroll";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "../ui/vertical_element";
import { SiMicrosoftacademic } from "react-icons/si";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { useState } from "react";

const dict = {
  education: [
    {
      id: 12,
      year: "2015-2017",
      location: "Kolkata, West Bengal",
      level: "Higher Secondary",
      institute: "Laban Hrad Vidyapith",
      description:
        "I completed my class 12 high school education at Laban Hrad Vidyapith, Kolkata. where I studied Math, Computer Application, Economics.",
      icon: <SiMicrosoftacademic />,
    },
    {
      id: 15,
      year: "2017-2020",
      location: "Kolkata, West Bengal",
      level: "Bachelor of Science (B.sc)",
      institute: "Gurudas college",
      description:
        "I have done my graduation degree in Economics(honours) from Gurudas College Which is under Calcutta University.",
      icon: <SiMicrosoftacademic />,
    },
    {
      id: 17,
      year: "2021-2023",
      location: "Kolkata, West Bengal",
      level: "Master Of Computer Application (MCA)",
      description:
        "I have completed my master degree in computer application from Guru Nanak Institute Of Technology,kolkata.",
      institute: "Guru Nanak Institute Of Technology",
      icon: <SiMicrosoftacademic />,
    },
  ],
  job: [],
};

const highlight = { scale: "1.1", border: " 1px solid black" };

export default function Experience() {
  const [state, setstate] = useState("education");
  return (
    <Element className="experience" name="experience">
      <div className="experience_header">My Experience</div>
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
              return <TimelineElement data={obj} />;
            })
          ) : (
            <h1 style={{ textAlign: "center" }}>No experience</h1>
          )}
        </VerticalTimeline>
      </div>
    </Element>
  );
}
