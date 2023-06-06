import React from "react";
// import logo from "./logo.png";
//  <img src={logo} alt="logo" />
import { Routes, Route } from "react-router-dom";
import {
  MainSection,
  AboutSection,
  SkilsSection,
  ProjectSection,
  ContactSection,
} from "./sections";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex gradient__bg flex-row lg:flex-col h-screen">
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/skils" element={<SkilsSection />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// vo chat gpt imam za fade i da namestam na strancite i da gi dodam proektite.
