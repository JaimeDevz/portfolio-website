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

      {/* - Changed 'text-center' to 'text-left' for readability.
        - Changed 'max-w-3xl' to 'max-w-2xl' for better line length.
      */}
      <motion.div
        className="max-w-2xl mx-auto text-left text-xl text-gray-300 leading-relaxed space-y-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p>
          I'm Jaime, a full-stack developer focused on building clean and
          efficient web applications.
        </p>
        <p>
          I enjoy the process of turning an idea into a functional product,
          focusing on readable code and scalable architecture.
        </p>
        <p>
          I am committed to continuously learning new technologies and improving
          my skillset.
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
