import React from "react";
import Navbar from "../src/components/NavBar/navbar";
import Home from "../src/components/Home/home";
import About from '../src/components/About/about'
import Skills from "./components/SKILLS/Skills";
import Project from "./components/PROJECT/Project";
import Contact from "./components/CONTACT/Contact";
import Footer from "./components/FOOTER/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
