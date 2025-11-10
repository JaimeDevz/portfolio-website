import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ children }) => (
  <motion.h2
    className="text-3xl md:text-4xl font-extrabold text-center text-gray-100 mb-12 md:mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h2>
);

export default SectionHeading;
