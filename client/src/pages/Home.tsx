import React from "react";
import { projectCards } from "../content/projects";
import ProjectGallery from "../components/ProjectGallery";

const Home: React.FC = () => (
  <div className="home-page">
    <section id="home" className="hero-section section-shell">
      <div className="hero-card">
        <p className="eyebrow">Portfolio</p>
        <h1>
          Hey! I&apos;m <span className="text-accent">Anke Hao</span>, a Deployed Engineer at Cognition. 
        </h1>
        <p className="hero-copy">
          I&apos;m based in Silicon Valley and love building at the intersection of AI,
          product, and community. Previously at Windsurf and PwC.
        </p>
      </div>
    </section>

    <section id="introduction" className="section-shell home-intro">
      <div className="panel-grid">
        <article className="content-panel">
          <p className="eyebrow">Welcome</p>
          <h2>Hello there</h2>
          <p>
            Hello! I&apos;m Anke Hao, a Deployed Engineer at Cognition based in Silicon Valley.
          </p>
          <p>My areas of interest include AI/ML, gaming, and CS/Psychology intersections.</p>
        </article>

        <div className="content-panel content-panel--photo">
          <div className="profile-frame">
            <img src="/images/ankehao.webp" alt="Portrait of Anke Hao" />
          </div>
        </div>

        <article className="content-panel">
          <p className="eyebrow">What&apos;s Happening</p>
          <h2>Right now</h2>
          <p>
            Going to genAI events in the Bay Area, volunteering at a cat shelter, and
            meeting new friends.
          </p>
          <p>
            In my free time, I&apos;m learning game design, brushing up on RLHF, tinkering
            around in my{" "}
            <a href="https://github.com/anke-hao" target="_blank" rel="noreferrer">
              GitHub
            </a>
            , and making time for my cats.
          </p>
        </article>
      </div>
    </section>

    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>What I&apos;ve Worked On</h2>
      </div>
      <ProjectGallery projects={projectCards} />
    </section>
  </div>
);

export default Home;
