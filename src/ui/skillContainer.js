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

export default function SkillContainer({ obj, ind }) {
  return (
    <div className={`skill_lang_lists_${ind}`} style={div_container}>
      <span style={icon_span}>{obj.icon}</span>
      <span style={label_span}>{obj.label}</span>
    </div>
  );
}
