import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectGallery.css";
import type { ProjectCard } from "../types/project";


const ProjectGallery: React.FC<{ projects: ProjectCard[] }> = ({ projects }) => {
  const [hoveredButtonId, setHoveredButtonId] = useState<string | null>(null);

  return (
    <div className="project-gallery-grid">
      {projects.map((project) => (
        <div
          key={project.link}
          className="project-card"
        >
          <div
            className="project-card-overlay"
            style={{ backgroundImage: `url(${project.image})` }}
          >
             <div className="project-card-text">
              <h3>{project.title}</h3>
              <p>{project.description}</p> 
             </div>
            <Link to={project.link} className="project-card-btn-link">
              <button
                className="project-card-btn"
                onMouseEnter={() => setHoveredButtonId(project.link)}
                onMouseLeave={() => setHoveredButtonId(null)}
              >
                {hoveredButtonId === project.link ? "View Project" : (project.buttonText || "Learn More")}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
