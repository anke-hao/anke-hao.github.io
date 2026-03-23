import React from "react";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <a href="https://www.linkedin.com/in/anke-hao/" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <span aria-hidden="true">|</span>
      <a href="mailto:ankehao@uchicago.edu">Email</a>
      <span aria-hidden="true">|</span>
      <a href="https://github.com/anke-hao" target="_blank" rel="noreferrer">
        Github
      </a>
      <span aria-hidden="true">|</span>
      <a href="https://medium.com/@ankehao10" target="_blank" rel="noreferrer">
        Medium
      </a>
    </div>
  </footer>
);

export default Footer;
