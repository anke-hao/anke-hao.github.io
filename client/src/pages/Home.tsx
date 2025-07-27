import React from "react";
import { Link } from "react-router-dom";
import ProjectGallery from "../components/ProjectGallery";
import type { Project } from "../types/project";

interface HomeProps {
  projects: Project[];
}

const Home: React.FC<HomeProps> = ({ projects }) => (
    <main>
        <section id="home" className="w3-container w3-center w3-animate-opacity center">
            <h2>
                Hey! I'm <span className="bold">Anke Hao</span>, an AI Engineer @ PwC.<br /><br />
                Feel free to take a look around.
            </h2>
        </section>
        <section id="introduction" className="w3-center center">
            <div className="row">
                <div className="column">
                    <h2><b>WELCOME!</b></h2>
                    <p>
                        Hello! I'm Anke Hao, an AI Engineer at PwC based in Silicon Valley.<br /><br />
                        My areas of interest include AI/ML, gaming, and CS/Psychology intersections.<br /><br />
                    </p>
                </div>
                <div className="column">
                    <div className="container">
                        <img src="/images/ankehao.png" alt="ankehao" style={{ width: 300, height: 300 }} />
                    </div>
                </div>
                <div className="column">
                    <h2><b>WHAT'S HAPPENING</b></h2>
                    <p>Going to genAI events in the Bay Area, volunteering at a cat shelter, and meeting new friends!<br /><br />
                        In my free time, I'm learning game design, brushing up on RLHF, tinkering around in my <Link to="https://github.com/anke-hao"><b>GitHub</b></Link>, and making time for my cats.</p>
                </div>
            </div>
        </section>
        <section id="projects" className="w3-center center">
            <h2><b>WHAT I'VE WORKED ON</b></h2>
            <ProjectGallery projects={projects} />
        </section>
    </main>
);

export default Home;
