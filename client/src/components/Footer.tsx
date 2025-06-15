import React from "react";
import "../assets/style.css";

const Footer: React.FC = () => (
  <div className="footer">
    <p id="footer">
      <b>
        <a href="https://www.linkedin.com/in/anke-hao/">LinkedIn</a>
        {" | "}
        <a href="mailto:ankehao@uchicago.edu">Email</a>
        {" | "}
        <a href="https://github.com/anke-hao">Github</a>
        {" | "}
        <a href="https://medium.com/@ankehao10">Medium</a>
      </b>
    </p>
  </div>
);

export default Footer;
