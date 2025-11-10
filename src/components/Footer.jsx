import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 translate-z-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/jaime-torres-2a03a836a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/JaimeDevz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} jaimedevz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
