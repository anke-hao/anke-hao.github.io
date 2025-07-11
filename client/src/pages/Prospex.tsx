import React from "react";

const Prospex: React.FC = () => (
  <main>
    <div className="w3-container w3-center w3-animate-opacity">
      <div className="column_reg">
        <h1><b>Prospex</b></h1>
        <p className="big">
          Prospex is a gamified user experience aimed towards introducing potential tech career paths and resources to UChicago students. I built this platform collaboratively with three other UChicago students over the course of a month during the UChicago Tech Community Challenge, which was a competition for students to build tech solutions to help fellow UChicago tech students.
          <br /><br />
          <img src="/images/prospex/P1088033.jpg" alt="ProspexGroup" width="100%" />
          <br /><br />
          On the Prospex platform, students can navigate as a character around a 2D platform game environment to answer questions about their interests and personality. We had surveyed over 80 career professionals in five career fields using these same questions, and after students have answered all questions, we use the K-Nearest-Neighbors algorithm to predict their career interests. Students would then receive a profile of their suggested career interests based on their answers and a brochure packed with resources about suggested readings, career preparation, and additional learning resources specific to that field.
          <br /><br />
          <img src="/images/prospex/prospexGame.png" alt="ProspexPlatform" width="100%" />
        </p>
        <br /><br />
        <h2>My Role</h2>
        <p className="big">
          I served as team lead for Prospex, and oversaw all aspects of the project, including coding the platform on Unity, conducting research by reaching out to career professionals, and creating pixel art assets for the platform’s visuals.
        </p>
        <br /><br />
        <h2>The Challenge</h2>
        <p className="big">
          Going through college at UChicago, I’ve noticed that most of the tech community around me are grinding Leetcode to get an internship in software engineering. I rarely hear anyone going into roles like product management or UI/UX.
          <br /><br />
          <img src="/images/prospex/P1088172.jpg" alt="Prospex1" width="100%" />
          <br /><br />
          As a leader and mentor in several tech and startup clubs on campus, when I introduce these roles to students, almost all of them are not aware of what they are. After running career awareness workshops or mentorship sessions, I’ll get people reaching out to learn more about these different career paths. It’s not that people are not interested in these other career prospects, it's that we have a fundamental lack of exposure to them. As more people reached out to me, I created brochures for both entrepreneurship resources on campus and product management career preparation resources so that I could distribute them to the people who were interested. However, I felt like there were even more opportunities, like UI/UX and computer science research, and even more UChicago students beyond my personal scope, who would benefit from learning more about diversified paths in tech.
          <br /><br />
          <img src="/images/prospex/P1088222.jpg" alt="Prospex2" width="100%" />
          <br /><br />
          That was the problem I proposed to our team of four. Each of us has also experienced being interested in these types of fields, but having sparse resources and guidance to dive deeper into them. We aimed to introduce more paths in tech that UChicago tech students can take beyond software engineering, including product management, UI/UX, computer science research, quantitative finance, and tech startups. To that end, we built Prospex over the course of a month and won the Most Impactful award from UChicago’s Tech Community Challenge.
          <br /><br />
          <img src="/images/prospex/P1099536.jpg" alt="ProspexAward" width="100%" />
        </p>
        <br /><br />
        <h2>Play the game</h2>
        <br />
        <iframe frameBorder={0} src="https://itch.io/embed/1545681?border_width=5&dark=true" width="560" height="175" title="Prospex Game"><a href="https://prospex-tech.itch.io/prospex">Prospex by prospex_tech</a></iframe>
        <br /><br />
        <h2>View the demo below!</h2>
        <br />
        <iframe width="600" height="420" src="https://www.youtube.com/embed/KWNAbltazfc" title="Prospex Demo" />
        <br />
        <h2>View the resources:</h2>
        <a href="https://bit.ly/3GgZV4I"><button className="btn">Product Management</button></a>
        <a href="https://bit.ly/3sUiE0o"><button className="btn">Entrepreneurship</button></a>
        <a href="https://bit.ly/3wPZytw"><button className="btn">UI/UX</button></a>
        <a href="https://bit.ly/38GUYGh"><button className="btn">Computer Science Research</button></a>
        <a href="https://bit.ly/3MKJekP"><button className="btn">Quantitative Finance</button></a>
        <br /><br />
      </div>
    </div>
  </main>
);

export default Prospex;
