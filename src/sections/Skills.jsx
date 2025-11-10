import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { ReactIcon, Html5Icon, Css3Icon } from "../components/SkillIcon";
import { Code, Server, Database, Wind, Move, Zap } from "lucide-react";

const skills = [
  { name: "JavaScript (ES6+)", icon: <Code className="w-10 h-10" /> },
  { name: "React", icon: <ReactIcon className="w-10 h-10" /> },
  { name: "HTML5", icon: <Html5Icon className="w-10 h-10" /> },
  { name: "CSS3", icon: <Css3Icon className="w-10 h-10" /> },
  { name: "Node.js / Express", icon: <Server className="w-10 h-10" /> },
  { name: "SQL / PostgreSQL", icon: <Database className="w-10 h-10" /> },
  { name: "Tailwind CSS", icon: <Wind className="w-10 h-10" /> },
  { name: "Framer Motion", icon: <Move className="w-10 h-10" /> },
  { name: "Vite", icon: <Zap className="w-10 h-10" /> },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <SectionHeading>Skills & Toolkit</SectionHeading>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto focus:outline-none focus-visible:outline-none translate-z-1"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 translate-z-0"
            variants={fadeIn}
          >
            <div className="text-cyan-400 mb-3">{skill.icon}</div>
            <h3 className="text-md font-semibold text-gray-100">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
