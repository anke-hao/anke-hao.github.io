import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CSW from "./pages/CSW";
import DFG from "./pages/DFG";
import IAT from "./pages/IAT";
import ILC from "./pages/ILC";
import LTF from "./pages/LTF";
import Prospex from "./pages/Prospex";
import type { Project } from "./types/project";
import "./assets/style.css";

const projects: Project[] = [
  {
    title: "Prospex",
    description: "Won Most Impactful at Tech Community Challenge.",
    image: "/images/prospex/prospexCover.png",
    link: "/prospex",
    buttonText: "Learn More",
  },
  {
    title: "Techstars Chicago Startup Week",
    description: "Organized a major startup event in Chicago.",
    image: "/images/CSW/sponsors.png",
    link: "/csw",
    buttonText: "See Event",
  },
  {
    title: "Psychology Experiment",
    description: "Published on the Open Science Framework and won my class's Big Data competition.",
    image: "/images/IAT/IATCover.png",
    link: "/iat",
    buttonText: "Learn More",
  },
  {
    title: "An Easier Mile",
    description: "Volunteering as a Product Manager.",
    image: "/images/AEM/BlueLogo_TransparentCircle.svg",
    link: "/dfg",
    buttonText: "Learn More",
  },
  {
    title: "ILC:Entrepreneurship & Technology",
    description: "Leading a premier business student organization on campus.",
    image: "/images/ILC/ILC_Dark_Logo.png",
    link: "/ilc",
    buttonText: "Learn More",
  },
  {
    title: "Learning to Fly Venture Fund",
    description: "Overseeing deal flow and visibility as Managing Partner.",
    image: "/images/LTF/LTFSquare.png",
    link: "/ltf",
    buttonText: "Learn More",
  },
];

const App: React.FC = () => (
  <Router>
    <Navbar projects={projects} />
    <Routes>
      <Route path="/" element={<Home projects={projects} />} />
      <Route path="/csw" element={<CSW />} />
      <Route path="/dfg" element={<DFG />} />
      <Route path="/iat" element={<IAT />} />
      <Route path="/ilc" element={<ILC />} />
      <Route path="/ltf" element={<LTF />} />
      <Route path="/prospex" element={<Prospex />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
