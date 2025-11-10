import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

// --- Project Card Component ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgba(6, 182, 212, 0.1), 0 10px 10px -5px rgba(6, 182, 212, 0.04)",
      }}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-100 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

        <div className="mb-4">
          <p className="text-sm font-semibold text-cyan-400 mb-2">
            Technologies Used:
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-800 text-cyan-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center text-center bg-cyan-500 text-white font-medium px-4 py-2 rounded-md text-sm transition-all duration-300 hover:bg-cyan-600"
          >
            Live Demo <ArrowUpRight size={16} className="ml-1" />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center text-center bg-gray-700 text-gray-200 font-medium px-4 py-2 rounded-md text-sm transition-all duration-300 hover:bg-gray-600"
          >
            GitHub <Github size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
