import React, { useEffect } from "react";

const DFG: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
    <div className="w3-container w3-center w3-animate-opacity">
      <div className="column_reg">
        <h1><b>An Easier Mile</b></h1>
        <p className="big">
          An Easier Mile (AEM) is a nonprofit that provides financial and well-being assistance for immigrant and minority working-class families.
          <br /><br />
          <img src="/images/AEM/AEMHome.gif" alt="AEM Homepage" width="100%" />
        </p>
        <br /><br />
        <h2>My Role</h2>
        <p className="big">
          As I wanted to give back to the community while also applying and honing the product management skills I have learned, I volunteered as one of two Develop for Good product managers to co-lead a UI/UX team to research and design a fully functional and responsive Wix website for AEM. To aid AEM with establishing their branding, we also designed their logo from scratch.
        </p>
        <br /><br />
        <h2>The Challenge</h2>
        <p className="big">
          AEM was a recently established nonprofit, and the website we built for them was their first digital presence. As such, our main challenge was to find a way to help AEM gain exposure and establish credibility online for interested families and volunteers to learn more about the nonprofit’s mission, services provided, and application processes.
          <br /><br />
          <img src="/images/AEM/AEMAbout.gif" alt="AEM About" width="100%" />
          <br /><br />
          In order to do so, their website needed to be clear and impactful, even when they did not have substantial content or resources as a new organization. In addition, they needed to streamline their organizational processes by shifting from manual cold-calling to an automated way to collect applications and information from the families and volunteers.
          <br /><br />
          <iframe width="600" height="420" src="https://www.youtube.com/embed/3wfkvgT6OSI" title="AEM Video" />
          <br /><br />
          To tackle the challenge of lack of content, we created original illustrations in place of photos and wrote out most of the content on the website based on the client’s brainstorming. Throughout the project, the team needed to make sure information about AEM and its processes were communicated clearly and concisely throughout the website. I accomplished this through creating detailed product requirements documents (PRDs), user stories and service blueprints in Miro during brainstorming sessions with my fellow PM, and communicating them to the UX designers through sprint planning sessions. Similarly, we established clear communication channels with the client, including giving timely updates and showcases of new features and results after each sprint, and asking them for their feedback and content updates. In addition, we kept in mind the constraints on the nonprofit founders’ level of technical skill in order to instruct them on how to manage the site, and ensured a smooth handoff at the end of the cycle.
        </p>
      </div>
    </div>
  </main>
  );
};

export default DFG;
