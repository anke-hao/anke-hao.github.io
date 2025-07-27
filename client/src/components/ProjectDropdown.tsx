import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDropdown.css";
import type { Project } from "../types/project";

interface ProjectDropdownProps {
  projects: Project[];
  isVisible: boolean;
}

const ProjectDropdown: React.FC<ProjectDropdownProps> = ({ projects, isVisible }) => {
  return (
    <div className={`project-dropdown ${isVisible ? 'visible' : ''}`}>
      <div className="project-dropdown-content">
        <div className="project-dropdown-grid">
          {projects.map((project, idx) => (
            <Link 
              key={idx} 
              to={project.link} 
              className="project-dropdown-item"
            >
              <div className="project-dropdown-card">
                <div 
                  className="project-dropdown-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="project-dropdown-overlay">
                    <h4 className="project-dropdown-title">{project.title}</h4>
                    <span className="project-dropdown-button">View Project</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDropdown;
