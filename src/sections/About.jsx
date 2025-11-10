import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";

const About = () => {
  // --- Reusable Animation Variants ---
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <SectionWrapper id="about">
      <SectionHeading>About Me</SectionHeading>
      <motion.div
        className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6 text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p>
          Hello! I'm Jaime, a passionate full-stack developer with a love for
          creating clean, performant, and user-friendly web applications. My
          journey in tech started with a curiosity for how things work, and it
          has evolved into a full-fledged passion for building digital
          solutions.
        </p>
        <p>
          I specialize in the MERN stack (MongoDB, Express, React, Node.js) and
          have strong experience with SQL databases like PostgreSQL. From
          crafting responsive UIs with React and Tailwind to building robust
          APIs with Node.js and Express, I enjoy tackling challenges across the
          entire stack.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or enjoying a good cup of
          coffee.
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
