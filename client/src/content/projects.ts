import type { Project, ProjectCard } from "../types/project";

export const projects = [
  {
    slug: "prospex",
    route: "/prospex",
    title: "Prospex",
    description: "Won Most Impactful at Tech Community Challenge.",
    image: "/images/prospex/prospexCover.png",
    link: "/prospex",
    buttonText: "Learn More",
    sections: [
      {
        blocks: [
          {
            type: "html",
            html: "Prospex is a gamified user experience aimed towards introducing potential tech career paths and resources to UChicago students. I built this platform collaboratively with three other UChicago students over the course of a month during the UChicago Tech Community Challenge, which was a competition for students to build tech solutions to help fellow UChicago tech students.",
          },
          {
            type: "image",
            src: "/images/prospex/P1088033.jpg",
            alt: "ProspexGroup",
            width: "100%",
          },
          {
            type: "html",
            html: "On the Prospex platform, students can navigate as a character around a 2D platform game environment to answer questions about their interests and personality. We had surveyed over 80 career professionals in five career fields using these same questions, and after students have answered all questions, we use the K-Nearest-Neighbors algorithm to predict their career interests. Students would then receive a profile of their suggested career interests based on their answers and a brochure packed with resources about suggested readings, career preparation, and additional learning resources specific to that field.",
          },
          {
            type: "image",
            src: "/images/prospex/prospexGame.png",
            alt: "ProspexPlatform",
            width: "100%",
          },
        ],
      },
      {
        title: "My Role",
        blocks: [
          {
            type: "html",
            html: "I served as team lead for Prospex, and oversaw all aspects of the project, including coding the platform on Unity, conducting research by reaching out to career professionals, and creating pixel art assets for the platform's visuals.",
          },
        ],
      },
      {
        title: "The Challenge",
        blocks: [
          {
            type: "html",
            html: "Going through college at UChicago, I've noticed that most of the tech community around me are grinding Leetcode to get an internship in software engineering. I rarely hear anyone going into roles like product management or UI/UX.",
          },
          {
            type: "image",
            src: "/images/prospex/P1088172.jpg",
            alt: "Prospex1",
            width: "100%",
          },
          {
            type: "html",
            html: "As a leader and mentor in several tech and startup clubs on campus, when I introduce these roles to students, almost all of them are not aware of what they are. After running career awareness workshops or mentorship sessions, I'll get people reaching out to learn more about these different career paths. It's not that people are not interested in these other career prospects, it's that we have a fundamental lack of exposure to them. As more people reached out to me, I created brochures for both entrepreneurship resources on campus and product management career preparation resources so that I could distribute them to the people who were interested. However, I felt like there were even more opportunities, like UI/UX and computer science research, and even more UChicago students beyond my personal scope, who would benefit from learning more about diversified paths in tech.",
          },
          {
            type: "image",
            src: "/images/prospex/P1088222.jpg",
            alt: "Prospex2",
            width: "100%",
          },
          {
            type: "html",
            html: "That was the problem I proposed to our team of four. Each of us has also experienced being interested in these types of fields, but having sparse resources and guidance to dive deeper into them. We aimed to introduce more paths in tech that UChicago tech students can take beyond software engineering, including product management, UI/UX, computer science research, quantitative finance, and tech startups. To that end, we built Prospex over the course of a month and won the Most Impactful award from UChicago's Tech Community Challenge.",
          },
          {
            type: "image",
            src: "/images/prospex/P1099536.jpg",
            alt: "ProspexAward",
            width: "100%",
          },
        ],
      },
      {
        title: "Play the game",
        blocks: [
          {
            type: "embed",
            src: "https://itch.io/embed/1545681?border_width=5&dark=true",
            title: "Prospex Game",
            width: 560,
            height: 175,
            frameBorder: 0,
          },
        ],
      },
      {
        title: "View the demo below!",
        blocks: [
          {
            type: "embed",
            src: "https://www.youtube.com/embed/KWNAbltazfc",
            title: "Prospex Demo",
            width: 600,
            height: 420,
            allowFullScreen: true,
          },
        ],
      },
      {
        title: "View the resources:",
        blocks: [
          {
            type: "buttons",
            links: [
              { label: "Product Management", href: "https://bit.ly/3GgZV4I", external: true },
              { label: "Entrepreneurship", href: "https://bit.ly/3sUiE0o", external: true },
              { label: "UI/UX", href: "https://bit.ly/3wPZytw", external: true },
              { label: "Computer Science Research", href: "https://bit.ly/38GUYGh", external: true },
              { label: "Quantitative Finance", href: "https://bit.ly/3MKJekP", external: true },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "csw",
    route: "/csw",
    title: "Techstars Chicago Startup Week",
    description: "Organized a major startup event in Chicago.",
    image: "/images/CSW/sponsors.webp",
    link: "/csw",
    buttonText: "See Event",
    sections: [
      {
        blocks: [
          {
            type: "html",
            html: "Techstars is one of the premier startup accelerators in the nation, and in celebration of entrepreneurship, Techstars Chicago has annually hosted a week-long event, Chicago Startup Week. Within these past two years, Techstars Chicago has redirected their efforts to make Chicago Startup Week a student-run event, for students.",
          },
          {
            type: "image",
            src: "/images/CSW/CSW.jfif",
            alt: "CSW Stats",
            width: "80%",
          },
        ],
      },
      {
        title: "My Role",
        blocks: [
          {
            type: "html",
            html: "I have taken on the UChicago Techstars representative role for Chicago Startup Week last year and for this upcoming fall to further my goal in raising awareness of entrepreneurship resources that UChicago students can tap into. In 2021, I partnered with university representatives from four other Chicago colleges (Northwestern, UIUC, IIT, and Loyola) in planning and hosting the event. Through my involvement in planning the event, including inviting in founders and venture capitalists as guest speakers and designing workshops on topics like customer discovery and idea generation, I helped bring this week-long event to life with 1,175 registrants from universities across Chicago, 120 speakers and 66 events.<br /><br />Building on our efforts from last year, Chicago Startup Week 2022 will be scaled up to include even more schools and topics!",
          },
        ],
      },
    ],
  },
  {
    slug: "iat",
    route: "/iat",
    title: "Gender-Likability IAT",
    description: "Published on the Open Science Framework and won my class's Big Data competition.",
    image: "/images/IAT/IATCover.png",
    link: "/iat",
    buttonText: "Learn More",
    sections: [
      {
        blocks: [
          {
            type: "html",
            html: 'The <b><a href="https://implicit.harvard.edu/implicit/iatdetails.html">Implicit Association Test (IAT)</a></b> is a generalized methodology used for testing implicit bias in general, and the most famous instance of it is the Race IAT. I created my own version, Gender-Likability (IAT), as a reaction-time experiment to test for implicit gender bias in professional settings.<br /><br />I set out to discover whether implicit bias was involved in how women are described differently (and often more negatively) than men in professional settings. I surveyed over 300 participants through Amazon Mechanical Turk, using the standard IAT methodology for measuring participant reaction times. I used the <b><a href="https://www.psytoolkit.org/">Psytoolkit platform</a></b> to code an interactive experiment that recorded reaction times of the participants, and I learned the custom scripting language for the platform and built the experiment from scratch within a week.<br /><br />The participants were presented with stimuli like the ones displayed below, and were asked to press keys in accordance with which side had the correct gender- or characteristic-associated word.',
          },
        ],
      },
      {
        style: { marginLeft: "7%", marginRight: "7%" },
        blocks: [
          {
            type: "gallery",
            images: [
              { src: "/images/IAT/blocknmpf6.png", alt: "IAT1", width: "100%" },
              { src: "/images/IAT/confidentpmnf.png", alt: "IAT3", width: "100%" },
              { src: "/images/IAT/henmpf.png", alt: "IAT4", width: "100%" },
            ],
          },
        ],
      },
      {
        blocks: [
          {
            type: "html",
            html: "The experiment results showed that the average reaction times of the participants do not conclusively favor one condition over the other (linking positive characteristics with male-associated words and female-associated words with negative characteristics, or vice versa). There are several factors that may contribute to this, including a high proportion of female participants (60% over the 50.8% in the population) and over half of the participants belonging to the Millenial or Gen Z populations, which are known for more liberal and progressive viewpoints (Parker et al., 2020) (The Generation Gap in American Politics, 2019).<br /><br />I won my class's Big Data competition for the topic I chose, the methodologies I implemented, and my discussion of the results' implications and future steps.",
          },
          {
            type: "buttons",
            style: { marginBottom: "7%" },
            links: [
              {
                label: "Full Report",
                href: "https://docs.google.com/document/d/16UPl_a7LYOWkvAc3WKXe8BMywl5wnvs6/edit?usp=sharing&ouid=108600573893035646339&rtpof=true&sd=true",
                external: true,
              },
              {
                label: "Class Winner Page",
                href: "https://osf.io/hz843/wiki/Spring%202021/?view_only=d557f504cf364e5b928d6b64b2931c1e",
                external: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "aem",
    route: "/dfg",
    title: "An Easier Mile",
    description: "Volunteering as a Product Manager.",
    image: "/images/AEM/BlueLogo_TransparentCircle.svg",
    link: "/dfg",
    buttonText: "Learn More",
    sections: [
      {
        blocks: [
          {
            type: "html",
            html: "An Easier Mile (AEM) is a nonprofit that provides financial and well-being assistance for immigrant and minority working-class families.",
          },
          {
            type: "image",
            src: "/images/AEM/AEMHome.webp",
            alt: "AEM Homepage",
            width: "100%",
          },
        ],
      },
      {
        title: "My Role",
        blocks: [
          {
            type: "html",
            html: "As I wanted to give back to the community while also applying and honing the product management skills I have learned, I volunteered as one of two Develop for Good product managers to co-lead a UI/UX team to research and design a fully functional and responsive Wix website for AEM. To aid AEM with establishing their branding, we also designed their logo from scratch.",
          },
        ],
      },
      {
        title: "The Challenge",
        blocks: [
          {
            type: "html",
            html: "AEM was a recently established nonprofit, and the website we built for them was their first digital presence. As such, our main challenge was to find a way to help AEM gain exposure and establish credibility online for interested families and volunteers to learn more about the nonprofit's mission, services provided, and application processes.",
          },
          {
            type: "image",
            src: "/images/AEM/AEMAbout.webp",
            alt: "AEM About",
            width: "100%",
          },
          {
            type: "html",
            html: "In order to do so, their website needed to be clear and impactful, even when they did not have substantial content or resources as a new organization. In addition, they needed to streamline their organizational processes by shifting from manual cold-calling to an automated way to collect applications and information from the families and volunteers.",
          },
          {
            type: "embed",
            src: "https://www.youtube.com/embed/3wfkvgT6OSI",
            title: "AEM Video",
            width: 600,
            height: 420,
            allowFullScreen: true,
          },
          {
            type: "html",
            html: "To tackle the challenge of lack of content, we created original illustrations in place of photos and wrote out most of the content on the website based on the client's brainstorming. Throughout the project, the team needed to make sure information about AEM and its processes were communicated clearly and concisely throughout the website. I accomplished this through creating detailed product requirements documents (PRDs), user stories and service blueprints in Miro during brainstorming sessions with my fellow PM, and communicating them to the UX designers through sprint planning sessions. Similarly, we established clear communication channels with the client, including giving timely updates and showcases of new features and results after each sprint, and asking them for their feedback and content updates. In addition, we kept in mind the constraints on the nonprofit founders' level of technical skill in order to instruct them on how to manage the site, and ensured a smooth handoff at the end of the cycle.",
          },
        ],
      },
    ],
  },
  {
    slug: "ilc",
    route: "/ilc",
    title: "ILC:Entrepreneurship & Technology",
    description: "Leading a premier business student organization on campus.",
    image: "/images/ILC/ILC_Dark_Logo.png",
    link: "/ilc",
    buttonText: "Learn More",
    sections: [
      {
        blocks: [
          {
            type: "html",
            html: "ILC:Entrepreneurship and Technology club (ILC:E&T) is the oldest UChicago student organization dedicated to entrepreneurship and technology education. Members engage in entrepreneurial projects and learn startup and tech fundamentals through hands-on learning. New members compete in the 100 Days Challenge, where they build a startup over the course of 100 days and pitch to potential investors, alumni, and startup leaders on campus. We also offer advanced tracks in startup analysis and incubation to members who have continued with us past their first year.",
          },
        ],
      },
      {
        title: "My Role",
        blocks: [
          {
            type: "html",
            html: 'Throughout my time at UChicago, I led entrepreneurial efforts at UChicago as co-president of ILC:E&T. When I first joined the board, I spearheaded a merging of ILC:Entrepreneurship and ILC:Technology, which were two divisions at the time, into one branch of tech-focused entrepreneurship in order to bring tech and business talent together and bolster the startup landscape at my university. I oversee the general activities of the organization and co-lead two advanced tracks. I also actively manage both the internal and external relations of the student organization, including securing a continuing relationship with Techstars, one of the premier startup accelerators in the nation, to help host Techstars Chicago Startup Week for 2021 onwards. (Learn more about my work with Techstars <b><a href="/csw">here!</a></b>)',
          },
          {
            type: "image",
            src: "/images/ILC/ILC Group.jpg",
            alt: "ILC Group",
            width: "100%",
          },
        ],
      },
      {
        title: "The Challenge",
        blocks: [
          {
            type: "html",
            html: "One of the challenges I sought to tackle during my time on the board was member retention, ILC:E had previously offered a yearly educational curriculum on entrepreneurship and startups. This curriculum was cyclical, and repeated the same content every year. In brainstorming how ILC:E&T could provide value to members who have completed this curriculum, I introduced the concept of advanced tracks. These tracks would constantly provide new activities and content for members who have completed the yearly curriculum or for new members who wanted a supplement to the curriculum. An example of a track is Startup Analysis, where members would discuss current startup and tech trends, as well as apply their knowledge by conducting SWOT analyses and mock due diligence on startups and tech companies.<br /><br />The tracks have ran for three years now and have successfully retained UChicago upperclassmen who would otherwise not have additional activities to do after they finished the yearly curriculum. I have also heard feedback from members who attend the tracks that they are the highlight of the club's experience!",
          },
          {
            type: "buttons",
            links: [
              {
                label: "Find out more about ILC:E&T",
                href: "https://www.ilc.rso.uchicago.edu/et/",
                external: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ltf",
    route: "/ltf",
    title: "Learning to Fly Venture Fund",
    description: "Overseeing deal flow and visibility as Managing Partner.",
    image: "/images/LTF/LTFSquare.png",
    link: "/ltf",
    buttonText: "Learn More",
    sections: [
      {
        blocks: [
          {
            type: "html",
            html: "Learning To Fly (LTF) Ventures is the UChicago student-run venture capital fund on campus. Our mission is to elevate student founders, promote innovation, and cultivate a collaborative and inclusive culture of entrepreneurship at the University of Chicago. To that end, we distribute thousands in funding annually to student run startups on campus and provide advice and mentorship through coffee chats and network-building.",
          },
        ],
      },
      {
        title: "My Role",
        blocks: [
          {
            type: "html",
            html: "Throughout my time as Managing Partner of LTF, I oversaw the overall funding process for the organization, including organizing deal flow, assigning members of the board to process funding requests, and inviting promising student entrepreneurs to pitch their funding requests to the board.",
          },
          {
            type: "image",
            src: "/images/LTF/LTF Investment Activity.png",
            alt: "LTF Stats",
            width: "100%",
          },
        ],
      },
      {
        title: "The Challenge",
        blocks: [
          {
            type: "html",
            html: "I joined LTF in order to further my interests in analyzing startups and supporting entrepreneurial activities on campus. A problem I set out to tackle once promoted to Managing Partner was LTF's visibility within the startup ecosystem, as we have heard many of our portfolio startups mention that they did not hear about us until much later in their college career. Linked to this problem was another issue, in that many of the entrepreneurship hubs on campus like student clubs, are isolated from one another.<br /><br />As such, I brought together LTF and the other entrepreneurship organization I lead, ILC:Entrepreneurship and Technology (ILC:E&T), in jointly planning and hosting two startup pitch competitions. The first was an internal ILC:E&T pitch competition, and the second was open to the UChicago community, upon which we received nearly 300 submissions from UChicago students. Ultimately, we distributed $5 thousand across these two competitions in addition to our regular funding process for startups who apply to our fund. These events not only provided additional support and excitement in UChicago's startup community, but also helped boost LTF's visibility both within the entrepreneurship-focused club ILC:E&T, and more broadly across the UChicago student population.",
          },
        ],
      },
    ],
  },
] satisfies Project[];

export const projectCards: ProjectCard[] = projects.map((project) => ({
  title: project.title,
  description: project.description,
  image: project.image,
  link: project.link,
  buttonText: project.buttonText,
}));

export const projectRoutes = projects.map((project) => project.route);

export const projectByRoute = new Map(projects.map((project) => [project.route, project] as const));
export const projectBySlug = new Map(projects.map((project) => [project.slug, project] as const));

export const getProjectByRoute = (route: string) => projectByRoute.get(route);
export const getProjectBySlug = (slug: string) => projectBySlug.get(slug);
