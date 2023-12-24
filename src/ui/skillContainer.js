const div_container = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

export default function SkillContainer({ obj, ind }) {
  return (
    <div className={`skill_lang_lists_${ind}`} style={div_container}>
      <span className="skill_icon">{obj.icon}</span>
      <span className="skill_name">{obj.label}</span>
    </div>
  );
}
