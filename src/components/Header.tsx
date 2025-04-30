import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Correct active checking
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'; // Home only active on '/'
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full font-sans">
      {/* Top Header */}
      <div className="bg-iare-blue text-white py-3 overflow-x-auto">
        <div className="container mx-auto flex flex-row justify-between items-center px-4 gap-4">
          {/* Left Section */}
          <Link to="/" className="flex flex-row items-center space-x-3 flex-shrink-0">
            <img
              src="/ace.png"
              alt="SVUCE Logo"
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
            <div className="leading-tight">
              <div className="text-base sm:text-lg font-bold text-iare-yellow">SVUCE</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest">Department of</div>
              <div className="text-xs sm:text-sm text-iare-yellow uppercase tracking-wide">
                Computer Science & Engineering
              </div>
            </div>
          </Link>

          {/* Right Section */}
          <div className="flex flex-col items-end text-right flex-shrink-0">
            <div className="text-base sm:text-lg font-semibold text-iare-yellow">
              NAAC A+ Accredited
            </div>
            <div className="hidden md:block text-[10px] sm:text-xs text-white">
              Celebrating 39 Years of Excellence
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Menu Toggle */}
      <div className="md:hidden bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <span className="font-semibold text-iare-blue">Menu</span>
          <button onClick={toggleMobileMenu} className="p-2 focus:outline-none">
            {mobileMenuOpen ? <X size={24} className="text-iare-blue" /> : <Menu size={24} className="text-iare-blue" />}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white shadow ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row md:space-x-4 py-2">
            {[
              { path: "/", label: "Home" },
              { path: "/about-us", label: "About Us" },
              { path: "/departments", label: "Department" },
              { path: "/placements", label: "Placements" },
              { path: "/campus-life", label: "Campus Life" },
              { path: "/student-services", label: "Student Services" },
              { path: "/news", label: "News" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 text-sm font-medium rounded transition duration-300 ${isActive(item.path)
                    ? 'bg-iare-yellow text-iare-blue'
                    : 'hover:bg-gray-100 text-iare-blue'
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://svuce.edu.in/academics/regulations/B.Tech%20Modified%20Regulations%202020-21%20(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm font-medium hover:bg-gray-100 text-iare-blue rounded transition duration-300"
              >
                R20 Regulations
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Marquee Announcement */}
      <div className="bg-iare-blue w-full overflow-hidden relative flex items-center justify-center h-12 shadow-inner">
        <div className="absolute whitespace-nowrap animate-marquee flex items-center gap-8 text-sm font-medium">
          <p className="text-white flex items-center gap-2">
            🎯 <span>Many students qualified GATE with excellence!</span>
          </p>
          <a
            href="https://drive.google.com/file/d/1btnDEald5z2jug1BEHnKCU9hBQpz3aly/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-400 underline transition"
          >
            Final Year Students
          </a>
          <a
            href="https://drive.google.com/file/d/1TiKDcWNPJwroxHK1uNoetYPSwc5hJ_wG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-400 underline transition"
          >
            3rd Year Students
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
