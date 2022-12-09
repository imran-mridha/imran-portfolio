import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Hero from "./Hero";


const Home = () => {
  return (
    <div className="container mx-auto text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
