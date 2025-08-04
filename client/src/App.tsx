import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CSW from "./pages/CSW";
import DFG from "./pages/DFG";
import IAT from "./pages/IAT";
import ILC from "./pages/ILC";
import LTF from "./pages/LTF";
import Prospex from "./pages/Prospex";
import "./assets/style.css";

const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
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
