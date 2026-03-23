import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { projects } from "./content/projects";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        {projects.map((project) => (
          <Route
            key={project.route}
            path={project.route}
            element={<ProjectPage project={project} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
