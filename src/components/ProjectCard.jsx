function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <h3>{props.description}</h3>
      <h3>Tech used is: {props.tech}</h3>
    </div>
  );
}

export default ProjectCard;
