import ProjectCard from "../components/ProjectCard.jsx";
import { useState } from "react";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Temperature Converter",
      description:
        "A web app that converts temperatures between Celsius and Fahrenheit.",
      tech: "HTML, CSS, JavaScript",
      category: "JavaScript",
    },

    {
      id: 2,
      title: "To-Do List",
      description:
        "A task manager app where users can add, complete, and remove tasks.",
      tech: "HTML, CSS, JavaScript",
      category: "JavaScript",
    },

    {
      id: 3,
      title: "To-Do List",
      description:
        "A task manager app where users can add, complete, and remove tasks.",
      tech: "HTML, CSS",
      category: "HTML/CSS",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="page-container">
      <h1>Projects Page</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setSelectedCategory("All")}>All</button>
        <button onClick={() => setSelectedCategory("JavaScript")}>
          JavaScript
        </button>
      </div>

      {filteredProjects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))
      )}
    </div>
  );
}

export default Projects;
