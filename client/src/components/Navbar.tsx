import React, { useState } from "react";
import ProjectDropdown from "./ProjectDropdown";
import "../assets/style.css";
import type { Project } from "../types/project";

interface NavbarProps {
  projects?: Project[];
}

const Navbar: React.FC<NavbarProps> = ({ projects = [] }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
    setHoverTimeout(timeout);
  };

  return (
    <nav className="stroke">
      <div className="nav-background">
        <ul>
          <li><a href="/#home">Home</a></li>
          <li><a href="/#introduction">Introduction</a></li>
          {/* <li><a href="/#work">What I'm Working On</a></li> */}
          <li 
            className="nav-dropdown-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/#projects">What I've Worked On</a>
            <ProjectDropdown 
              projects={projects} 
              isVisible={showDropdown}
            />
          </li>
          {/* <li><a href="/#following">What I'm Following</a></li> */}
          <li><a href="https://medium.com/@ankehao10">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
