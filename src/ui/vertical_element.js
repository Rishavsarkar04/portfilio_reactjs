import { VerticalTimelineElement } from "react-vertical-timeline-component";

export default function TimelineElement({ data }) {
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
        borderRight: "7px solid black",
      }}
      date={data.year}
      iconStyle={{
        background: "rgba(246, 242, 242,1)",
        color: "black",
        height: "45%",
        width: "6%",
        borderColor: "black",
        // marginLeft: "-16px",
        boxShadow: "0 0 0 4px black",
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
