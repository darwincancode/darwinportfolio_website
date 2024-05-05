import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import "./App.css";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
