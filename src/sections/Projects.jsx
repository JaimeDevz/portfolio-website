import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import webPage from "../assets/raquel-web.jpg";
import ProjectCardNoRepo from "../components/ProjectCardNoRepo";

const projectsNoRepo = [
  {
    title: "Raquel Tax Services",
    description:
      "Client-facing tax services website with appointment booking, client document collection, and admin dashboard. Live production site for a small business.",
    imageUrl: webPage,
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://raqueltaxservices.org/",
    repoUrl: null, // Private repo
    highlights: [
      "Built and deployed a production site for a local tax business",
      "Integrated Google Workspace for secure document workflows",
      "Responsive design and performance optimizations with Vite/Tailwind",
    ],
    contactForCode: true,
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <SectionHeading>My Work</SectionHeading>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 translate-z-1"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsNoRepo.map((project, index) =>
          project.repoUrl ? (
            <ProjectCard key={index} project={project} />
          ) : (
            <ProjectCardNoRepo key={index} project={project} />
          )
        )}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
