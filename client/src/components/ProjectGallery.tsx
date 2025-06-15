import React from "react";
import { Link } from "react-router-dom";
import "./ProjectGallery.css";
import type { Project } from "../types/project";

const ProjectGallery: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <div className="project-gallery-grid">
    {projects.map((project, idx) => (
      <div
        key={idx}
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
            <button className="project-card-btn">{project.buttonText || "Learn More"}</button>
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectGallery;