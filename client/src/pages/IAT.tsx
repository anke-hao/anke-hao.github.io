import React, { useEffect } from "react";

const IAT: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
    <div className="w3-container w3-center w3-animate-opacity">
      <div className="column_reg">
        <h1><b>Gender-Likability IAT</b></h1>
        <p className="big">
          The <b><a href="https://implicit.harvard.edu/implicit/iatdetails.html">Implicit Association Test (IAT)</a></b> is a generalized methodology used for testing implicit bias in general, and the most famous instance of it is the Race IAT. I created my own version, Gender-Likability (IAT), as a reaction-time experiment to test for implicit gender bias in professional settings.
          <br /><br />
          I set out to discover whether implicit bias was involved in how women are described differently (and often more negatively) than men in professional settings. I surveyed over 300 participants through Amazon Mechanical Turk, using the standard IAT methodology for measuring participant reaction times. I used the <b><a href="https://www.psytoolkit.org/">Psytoolkit platform</a></b> to code an interactive experiment that recorded reaction times of the participants, and I learned the custom scripting language for the platform and built the experiment from scratch within a week.
          <br /><br />
          The participants were presented with stimuli like the ones displayed below, and were asked to press keys in accordance with which side had the correct gender- or characteristic-associated word.
        </p>
        <br /><br />
      </div>
      <div style={{ marginLeft: "7%", marginRight: "7%" }}>
        <div className="row">
          <div className="column">
            <img src="/images/IAT/blocknmpf6.png" alt="IAT1" width="100%" />
          </div>
          <div className="column">
            <img src="/images/IAT/confidentpmnf.png" alt="IAT3" width="100%" />
          </div>
          <div className="column">
            <img src="/images/IAT/henmpf.png" alt="IAT4" width="100%" />
          </div>
        </div>
      </div>
      <div className="column_reg">
        <br /><br />
        <p className="big">
          The experiment results showed that the average reaction times of the participants do not conclusively favor one condition over the other (linking positive characteristics with male-associated words and female-associated words with negative characteristics, or vice versa). There are several factors that may contribute to this, including a high proportion of female participants (60% over the 50.8% in the population) and over half of the participants belonging to the Millenial or Gen Z populations, which are known for more liberal and progressive viewpoints (Parker et al., 2020) (The Generation Gap in American Politics, 2019).
          <br /><br />
          I won my class’s Big Data competition for the topic I chose, the methodologies I implemented, and my discussion of the results’ implications and future steps.
          <br /><br />
          <div style={{ marginBottom: "7%" }}>
            <a href="https://docs.google.com/document/d/16UPl_a7LYOWkvAc3WKXe8BMywl5wnvs6/edit?usp=sharing&ouid=108600573893035646339&rtpof=true&sd=true"><button className="btn">Full Report</button></a>
            <a href="https://osf.io/hz843/wiki/Spring%202021/?view_only=d557f504cf364e5b928d6b64b2931c1e"><button className="btn">Class Winner Page</button></a>
          </div>
        </p>
      </div>
    </div>
  </main>
  );
};

export default IAT;
