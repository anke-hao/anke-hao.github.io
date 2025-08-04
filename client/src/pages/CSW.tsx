import React, { useEffect } from "react";

const CSW: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
    <div className="w3-container w3-center w3-animate-opacity">
      <div className="column_reg">
        <h1><b>Techstars Chicago Startup Week</b></h1>
        <p className="big">
          Techstars is one of the premier startup accelerators in the nation, and in celebration of entrepreneurship, Techstars Chicago has annually hosted a week-long event, Chicago Startup Week. Within these past two years, Techstars Chicago has redirected their efforts to make Chicago Startup Week a student-run event, for students.
          <br /><br />
          <img src="/images/CSW/CSW.jfif" alt="CSW Stats" width="80%" />
        </p>
        <br /><br />
        <h2>My Role</h2>
        <p className="big">
          I have taken on the UChicago Techstars representative role for Chicago Startup Week last year and for this upcoming fall to further my goal in raising awareness of entrepreneurship resources that UChicago students can tap into. In 2021, I partnered with university representatives from four other Chicago colleges (Northwestern, UIUC, IIT, and Loyola) in planning and hosting the event. Through my involvement in planning the event, including inviting in founders and venture capitalists as guest speakers and designing workshops on topics like customer discovery and idea generation, I helped bring this week-long event to life with 1,175 registrants from universities across Chicago, 120 speakers and 66 events.
          <br /><br />
          Building on our efforts from last year, Chicago Startup Week 2022 will be scaled up to include even more schools and topics!
          <br /><br />
        </p>
      </div>
    </div>
  </main>
  );
};

export default CSW;
