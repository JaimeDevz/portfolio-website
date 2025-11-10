import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const ProjectCardNoRepo = ({ project }) => {
  const contactEmail =
    import.meta.env.VITE_CONTACT_EMAIL || "JaimeTorres-1@outlook.com";
  const subject = encodeURIComponent(`Request to view ${project.title} repo`);
  const body = encodeURIComponent(
    `Hi Jaime,\n\nI saw your project "${project.title}" and would like to request access to the private repository for review during the hiring process.\n\nThanks,\n[Your name]`
  );

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
          "0 20px 25px -5px rgba(255, 255, 255, 0.05), 0 10px 10px -5px rgba(255, 255, 255, 0.02)",
      }}
    >
      <img
        src={project.imageUrl}
        alt={`${project.title} screenshot`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-100 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="text-gray-300 text-sm mb-4 list-disc list-inside">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-300 mb-2">
            Technologies Used:
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
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
            aria-label={`Open live demo for ${project.title}`}
            className="flex-1 inline-flex items-center justify-center text-center bg-white text-gray-900 font-medium px-4 py-2 rounded-md text-sm transition-all duration-300 hover:bg-gray-200"
          >
            Live Demo <ArrowUpRight size={16} className="ml-1" />
          </a>

          <a
            href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}
            className="flex-1 inline-flex items-center justify-center text-center bg-gray-700 text-gray-200 font-medium px-4 py-2 rounded-md text-sm transition-all duration-300 hover:bg-gray-600"
            aria-label={`Request access to private repo for ${project.title}`}
          >
            Request Code <Github size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCardNoRepo;
