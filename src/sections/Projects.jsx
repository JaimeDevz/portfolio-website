import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import webPage from "../assets/raquel-web.jpg";
import { Github, ArrowUpRight } from "lucide-react";
import ProjectCardNoRepo from "../components/ProjectCardNoRepo";

const projectsNoRepo = [
  {
    title: "Raquel Tax Services",
    description:
      "A full-stack web application developed for Raquel Tax Services to streamline their appointment booking process. Clients can register, view available times, and book appointments online. Administrators have a dedicated dashboard to manage bookings, set availability, and view client details, with automatic Google Calendar synchronization for confirmed appointments.",
    imageUrl: webPage,
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "etc.",
    ],
    liveUrl: "https://raqueltaxservices.org/",
    repoUrl: "https://github.com/JaimeDevz",
  },
];

// const projects = [
//   {
//     title: "Raquel Tax Services",
//     description:
//       "A full-stack web application developed for Raquel Tax Services to streamline their appointment booking process. Clients can register, view available times, and book appointments online. Administrators have a dedicated dashboard to manage bookings, set availability, and view client details, with automatic Google Calendar synchronization for confirmed appointments.",
//     imageUrl: webPage,
//     tech: [
//       "React",
//       "Node.js",
//       "Express",
//       "PostgreSQL",
//       "React Router",
//       "Tailwind CSS",
//       "Framer Motion",
//       "etc.",
//     ],
//     liveUrl: "https://raqueltaxservices.org/",
//     repoUrl: "https://github.com/JaimeDevz",
//   },
// ];

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
        {projectsNoRepo.map((project, index) => (
          <ProjectCardNoRepo key={index} project={project} />
        ))}
        {/* {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))} */}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
