const Skills = ({ skills }) => {
  return (
    <div className="cvb-personal-info">
      <h1>Skills</h1>
      {skills.map((skill, index) => (
        <div key={index}>
          <h2>{skill.skill_name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Skills;
