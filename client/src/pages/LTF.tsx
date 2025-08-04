import React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";

const LTF: React.FC = () => {
  useScrollToTop();
  
  return (
  <main>
    <div className="w3-container w3-center w3-animate-opacity">
      <div className="column_reg">
        <h1><b>Learning to Fly Ventures</b></h1>
        <p className="big">
          Learning To Fly (LTF) Ventures is the UChicago student-run venture capital fund on campus. Our mission is to elevate student founders, promote innovation, and cultivate a collaborative and inclusive culture of entrepreneurship at the University of Chicago. To that end, we distribute thousands in funding annually to student run startups on campus and provide advice and mentorship through coffee chats and network-building.
        </p>
        <br /><br />
        <h2>My Role</h2>
        <p className="big">
          Throughout my time as Managing Partner of LTF, I oversaw the overall funding process for the organization, including organizing deal flow, assigning members of the board to process funding requests, and inviting promising student entrepreneurs to pitch their funding requests to the board.
          <br /><br />
          <img src="/images/LTF/LTF Investment Activity.png" alt="LTF Stats" width="100%" />
          <br /><br />
        </p>
        <br /><br />
        <h2>The Challenge</h2>
        <p className="big">
          I joined LTF in order to further my interests in analyzing startups and supporting entrepreneurial activities on campus. A problem I set out to tackle once promoted to Managing Partner was LTF’s visibility within the startup ecosystem, as we have heard many of our portfolio startups mention that they did not hear about us until much later in their college career. Linked to this problem was another issue, in that many of the entrepreneurship “hubs” on campus like student clubs, are isolated from one another.
          <br /><br />
          As such, I brought together LTF and the other entrepreneurship organization I lead, ILC:Entrepreneurship and Technology (ILC:E&T), in jointly planning and hosting two startup pitch competitions. The first was an internal ILC:E&T pitch competition, and the second was open to the UChicago community, upon which we received nearly 300 submissions from UChicago students. Ultimately, we distributed $5 thousand across these two competitions in addition to our regular funding process for startups who apply to our fund. These events not only provided additional support and excitement in UChicago’s startup community, but also helped boost LTF’s visibility both within the entrepreneurship-focused club ILC:E&T, and more broadly across the UChicago student population.
          <br /><br />
        </p>
      </div>
    </div>
  </main>
  );
};

export default LTF;
