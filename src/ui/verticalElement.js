import { VerticalTimelineElement } from "react-vertical-timeline-component";

export default function TimelineElement({ data, mode }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(246, 242, 242, 0.91)",
        color: "black",
        textAlign: "left",
        padding: "2rem",
        border: "1px solid black",
        borderRadius: "5px",
      }}
      contentArrowStyle={{
        borderRight:
          mode === "dark" ? "7px solid  var(--text-color)" : "7px solid black",
      }}
      date={data.year}
      iconStyle={{
        background: mode === "light" ? "rgba(246, 242, 242,1)" : "#270442",
        color: mode === "light" ? "black" : "var(--text-color)",
        height: "45%",
        width: "6%",
        borderColor: "black",
        // marginLeft: "-16px",
        boxShadow:
          mode === "light" ? "0 0 0 4px black" : "0 0 0 4px  var(--text-color)",
      }}
      icon={data.icon}
    >
      <h2 style={{ color: "black" }}>
        {data.institute} , {data.location}
      </h2>
      <h4>{data.level} </h4>
      <p>{data?.description}</p>
    </VerticalTimelineElement>
  );
}
