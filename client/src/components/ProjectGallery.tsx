import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectGallery.css";
import type { Project } from "../types/project";


const ProjectGallery: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [hoveredButtonId, setHoveredButtonId] = useState<number | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  return (
    <div className="project-gallery-grid">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="project-card"
          onMouseEnter={() => setHoveredCardId(idx)}
          onMouseLeave={() => setHoveredCardId(null)}
        >
          {/* <div className="project-card-text">
            <h3>{hoveredCardId === idx ? project.description : (project.title || "Learn More")}</h3>
          
          </div> */}
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
                onMouseEnter={() => setHoveredButtonId(idx)}
                onMouseLeave={() => setHoveredButtonId(null)}
              >
                {hoveredButtonId === idx ? "View Project" : (project.buttonText || "Learn More")}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;