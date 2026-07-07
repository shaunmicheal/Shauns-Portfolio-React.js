function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "Python"];

  return (
    <div className="page-container">
      <h1>My Skills</h1>

      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
