import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import "./index.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-950 text-gray-200 font-sans min-h-screen bg-none antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
