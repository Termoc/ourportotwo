import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaCode } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-standar text-white py-16 px-6 border-t border-gray-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-wide text-blue-400 glow-text">
              PORTFOLIO.DEV
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting digital experiences with passion and precision.
              Let's build something amazing together.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <FaHeart className="text-red-500 w-4 h-4 animate-pulse" />
              <span>and</span>
              <FaCode className="text-blue-400 w-4 h-4" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Let's Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-blue-600/30 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-blue-600/30 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-blue-600/30 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>contact@johndoe.dev</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>&copy; {currentYear} John Doe. All rights reserved.</span>
            <span className="hidden md:block">•</span>
            <span className="text-blue-400">Built with React & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute bottom-8 right-8 w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
