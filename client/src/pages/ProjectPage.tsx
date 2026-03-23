import React from "react";
import type { Project, ProjectBlock, ProjectSection } from "../types/project";
import "./ProjectPage.css";

interface ProjectPageProps {
  project: Project;
}

const renderBlock = (block: ProjectBlock) => {
  switch (block.type) {
    case "html":
      return (
        <p
          className="project-page__paragraph"
          dangerouslySetInnerHTML={{ __html: block.html }}
          style={block.style}
        />
      );
    case "image":
      return (
        <figure className="project-page__media" style={block.style}>
          <img src={block.src} alt={block.alt} width={block.width ?? "100%"} />
        </figure>
      );
    case "gallery":
      return (
        <div className="project-page__gallery" style={block.style}>
          {block.images.map((image) => (
            <div className="project-page__gallery-item" key={image.src}>
              <img src={image.src} alt={image.alt} width={image.width ?? "100%"} />
            </div>
          ))}
        </div>
      );
    case "embed":
      return (
        <div className="project-page__embed" style={block.style}>
          <iframe
            src={block.src}
            title={block.title}
            width={block.width ?? "100%"}
            height={block.height ?? 420}
            frameBorder={block.frameBorder ?? 0}
            allowFullScreen={block.allowFullScreen}
          />
        </div>
      );
    case "buttons":
      return (
        <div className="project-page__actions" style={block.style}>
          {block.links.map((link) => (
            <a
              key={link.href}
              className="button-link"
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      );
    default:
      return null;
  }
};

const renderSection = (section: ProjectSection, index: number) => (
  <section
    className="project-page__section"
    key={`${section.title ?? "section"}-${index}`}
    style={section.style}
  >
    {section.title ? <h2>{section.title}</h2> : null}
    <div className="project-page__stack">
      {section.blocks.map((block, blockIndex) => (
        <React.Fragment key={`${section.title ?? "section"}-${index}-${blockIndex}`}>
          {renderBlock(block)}
        </React.Fragment>
      ))}
    </div>
  </section>
);

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => (
  <article className="project-page">
    <section className="project-page__hero section-shell">
      <div className="project-page__hero-copy">
        <p className="eyebrow">Project Spotlight</p>
        <h1>{project.title}</h1>
        <p className="project-page__summary">{project.description}</p>
      </div>
      <div className="project-page__hero-art">
        <img src={project.image} alt={project.title} />
      </div>
    </section>

    <div className="content-shell">
      {project.sections.map(renderSection)}
    </div>
  </article>
);

export default ProjectPage;
