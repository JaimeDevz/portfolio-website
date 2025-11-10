import React, { useState, useRef } from "react";
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
  "w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-200 text-gray-200 placeholder-gray-500";

const Contact = () => {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "";
  const fallbackEmail =
    import.meta.env.VITE_CONTACT_EMAIL || "JaimeTorres-1@outlook.com";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    bot: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const formRef = useRef(null);

  const handleTextareaKeyDown = (e) => {
    // Check for Ctrl+Enter or Cmd+Enter
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();

      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    }
  };

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.bot) {
      return setStatus("success");
    }

    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill out all fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("message", form.message);

      if (!endpoint) {
        setStatus("success");
        return;
      }

      const res = await fetch(endpoint, {
        method: "POST",
        body: fd,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok || res.status === 200 || res.status === 201) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", bot: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data.error ||
            "Submission failed. Please contact me directly via email."
        );
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network error. Try again or email me directly.");
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading>Contact Me</SectionHeading>

      <motion.form
        ref={formRef}
        className="max-w-2xl mx-auto bg-gray-950/70 backdrop-blur-lg p-8 rounded-lg shadow-lg space-y-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        onSubmit={handleSubmit}
        aria-labelledby="contact-heading"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="name">
              <User className="inline mr-2" aria-hidden="true" />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className={inputStyles}
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2" htmlFor="email">
              <Mail className="inline mr-2" aria-hidden="true" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@domain.com"
              className={inputStyles}
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Hi Jaime, I'm from [Company Name] and I'd like to talk about..."
              className={inputStyles + " h-36 resize-y"}
              value={form.message}
              onChange={handleChange}
              onKeyDown={handleTextareaKeyDown}
              required
            />
          </div>

          <div style={{ display: "none" }}>
            <label htmlFor="bot">Leave this empty</label>
            <input
              id="bot"
              name="bot"
              value={form.bot}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-white text-gray-900 font-medium px-4 py-2 rounded-md text-sm transition-all duration-300 hover:bg-gray-200 disabled:opacity-60"
            disabled={status === "loading"}
            aria-live="polite"
          >
            <Send size={16} />
            {status === "loading" ? "Sending..." : "Get in Touch"}
          </button>

          <a
            href={`mailto:${fallbackEmail}`}
            className="text-sm text-gray-300 underline"
          >
            Or email me directly
          </a>
        </div>

        <div className="pt-4 text-center text-gray-400 border-t border-gray-700/50">
          <p className="mb-3 text-sm">Or find me on:</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/your-profile-url"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 underline hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/JaimeDevz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 underline hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="text-sm text-green-400"
              role="status"
            >
              Thanks — message sent. I typically reply within 24–48 hours.
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="text-sm text-rose-400"
              role="alert"
            >
              {errorMsg || "Submission failed. Please try again or email me."}
              <div className="mt-2">
                <a
                  href={`mailto:${fallbackEmail}?subject=Contact%20from%20Portfolio`}
                  className="underline text-sm"
                >
                  Email me directly
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </SectionWrapper>
  );
};

export default Contact;
