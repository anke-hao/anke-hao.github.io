import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "./ProjectGallery.css";
import type { Project } from "../types/project";

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-arrow`}
      style={style}
      onClick={onClick}
      aria-label="Next"
      type="button"
    >
      <span className="arrow-symbol">{'〉'}</span>
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-arrow`}
      style={style}
      onClick={onClick}
      aria-label="Previous"
      type="button"
    >
      <span className="arrow-symbol">{'〈'}</span>
    </button>
  );
};

const ProjectGallery: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "400px",
  };

  return (
    <div className="project-carousel">
      <Slider {...settings}>
        {projects.map((project, idx) => {
          console.log("project.image", project.image);
          return (
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
          );
        })}
      </Slider>
    </div>
  );
};

export default ProjectGallery;