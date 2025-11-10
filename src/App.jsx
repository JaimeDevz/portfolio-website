import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { Linkedin, Github } from "lucide-react";
import "./index.css";

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

      {/* --- Footer --- */}
      <footer className="bg-gray-900 translate-z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://www.linkedin.com/in/jaime-torres-2a03a836a/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/JaimeDevz" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} jaimedevz. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
