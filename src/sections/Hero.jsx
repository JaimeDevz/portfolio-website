import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const Hero = () => {
  const smoothScroll = (targetId) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-4 relative bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900"
    >
      <div className="max-w-3xl">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-white">Jaime Torres</span>.
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I build modern and efficient web applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center space-x-4"
        >
          <motion.button
            onClick={() => smoothScroll("projects")}
            className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-md shadow-lg transition-all duration-300"
            whileHover={{
              scale: 1.05,
              y: -2,
              backgroundColor: "#E5E7EB", // gray-200
              boxShadow: "0 10px 20px rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.a
            href="https://www.linkedin.com/in/jaime-torres-2a03a836a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 transition-colors duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="https://github.com/JaimeDevz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 transition-colors duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="GitHub Profile"
          >
            <Github size={28} />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-10"
      >
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
