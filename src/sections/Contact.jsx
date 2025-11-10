import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { Send, User, Mail } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const inputStyles =
  "w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 text-gray-200 placeholder-gray-500";

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <SectionHeading>Contact Me</SectionHeading>
      <motion.form
        className="max-w-2xl mx-auto bg-gray-950/70 backdrop-blur-lg p-8 rounded-lg shadow-lg space-y-6 "
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission logic here
        }}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="name">
              <User className="inline mr-2" />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className={inputStyles}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="email">
              <Mail className="inline mr-2" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="     Your Email"
              className={inputStyles}
              required
            />
          </div>
        </div>
      </motion.form>
    </SectionWrapper>
  );
};

export default Contact;
