import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <>
      <nav className="navbar-backdrop text-white px-6 py-5 fixed top-0 left-0 right-0 z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold tracking-wide text-blue-400 glow-text">
            PORTFOLIO.DEV
          </div>

          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="relative text-lg font-medium hover:text-blue-400 transition-all duration-300 group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-6 pb-4 space-y-4">
            {navItems.map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block text-lg font-medium hover:text-blue-400 transition-all duration-300 hover:translate-x-2 py-2"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: menuOpen ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
