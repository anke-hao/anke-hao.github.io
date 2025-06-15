import React from "react";
import "../assets/style.css";

const Navbar: React.FC = () => (
  <nav className="stroke">
    <div className="nav-background">
      <ul>
        <li><a href="/#home">Home</a></li>
        <li><a href="/#introduction">Introduction</a></li>
        {/* <li><a href="/#work">What I'm Working On</a></li> */}
        <li><a href="/#projects">What I've Worked On</a></li>
        {/* <li><a href="/#following">What I'm Following</a></li> */}
        <li><a href="https://medium.com/@ankehao10">Blog</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;