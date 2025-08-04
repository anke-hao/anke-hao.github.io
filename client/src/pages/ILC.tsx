import React, { useEffect } from "react";

const ILC: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
    <div className="w3-container w3-center w3-animate-opacity">
      <div className="column_reg">
        <h1><b>ILC:Entrepreneurship & Technology</b></h1>
        <p className="big">
          ILC:Entrepreneurship and Technology club (ILC:E&T) is the oldest UChicago student organization dedicated to entrepreneurship and technology education. Members engage in entrepreneurial projects and learn startup and tech fundamentals through hands-on learning. New members compete in the 100 Days Challenge, where they build a startup over the course of 100 days and pitch to potential investors, alumni, and startup leaders on campus. We also offer advanced tracks in startup analysis and incubation to members who have continued with us past their first year.
        </p>
        <br /><br />
        <h2>My Role</h2>
        <p className="big">
          Throughout my time at UChicago, I led entrepreneurial efforts at UChicago as co-president of ILC:E&T. When I first joined the board, I spearheaded a merging of ILC:Entrepreneurship and ILC:Technology, which were two divisions at the time, into one branch of tech-focused entrepreneurship in order to bring tech and business talent together and bolster the startup landscape at my university. I oversee the general activities of the organization and co-lead two advanced tracks. I also actively manage both the internal and external relations of the student organization, including securing a continuing relationship with Techstars, one of the premier startup accelerators in the nation, to help host Techstars Chicago Startup Week for 2021 onwards. (Learn more about my work with Techstars <b><a href="/csw">here!</a></b>)
          <br /><br />
          <img src="/images/ILC/ILC Group.jpg" alt="ILC Group" width="100%" />
        </p>
        <br /><br />
        <h2>The Challenge</h2>
        <p className="big">
          One of the challenges I sought to tackle during my time on the board was member retention, ILC:E had previously offered a yearly educational curriculum on entrepreneurship and startups. This curriculum was cyclical, and repeated the same content every year. In brainstorming how ILC:E&T could provide value to members who have completed this curriculum, I introduced the concept of advanced tracks. These tracks would constantly provide new activities and content for members who have completed the yearly curriculum or for new members who wanted a supplement to the curriculum. An example of a track is Startup Analysis, where members would discuss current startup and tech trends, as well as apply their knowledge by conducting SWOT analyses and mock due diligence on startups and tech companies.
          <br /><br />
          The tracks have ran for three years now and have successfully retained UChicago upperclassmen who would otherwise not have additional activities to do after they finished the yearly curriculum. I have also heard feedback from members who attend the tracks that they are the highlight of the club’s experience!
          <br /><br />
          <a href="https://www.ilc.rso.uchicago.edu/et/"><button className="btn">Find out more about ILC:E&T</button></a>
          <br /><br />
        </p>
      </div>
    </div>
  </main>
  );
};

export default ILC;
