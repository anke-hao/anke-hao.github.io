import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => (
  <nav className="site-nav" aria-label="Primary">
    <div className="site-nav__inner">
      <a className="site-nav__brand" href="/#home">
        Anke Hao
      </a>
      <ul className="site-nav__links">
        <li>
          <a className="site-nav__link" href="/#home">
            Home
          </a>
        </li>
        <li>
          <a className="site-nav__link" href="/#introduction">
            Introduction
          </a>
        </li>
        <li>
          <a className="site-nav__link" href="/#projects">
            What I&apos;ve Worked On
          </a>
        </li>
        <li>
          <a
            className="site-nav__link site-nav__link--external"
            href="https://medium.com/@ankehao10"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
