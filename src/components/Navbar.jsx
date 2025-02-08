// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { Github, Facebook, Instagram, Linkedin, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  // Define colors for each route
  const getNavColors = () => {
    switch (location.pathname) {
      case '/':
        return 'text-white'; // Home page
      case '/about':
        return 'text-black'; // About page
      case '/events':
        return 'text-black'; // Events page
      case '/get-involved':
        return 'text-white'; // Get Involved page
      default:
        return 'text-white';
    }
  };

  const textColorClass = getNavColors();
  const hoverColorClass = 'hover:opacity-80';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <Link to="/" className={textColorClass}>
            <svg viewBox="0 0 100 100" className="w-12 h-12">
              <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor"/>
            </svg>
          </Link>
          
          {/* Navigation Links */}
          <div className={`flex space-x-8 text-lg ${textColorClass}`}>
            <Link to="/about" className={`${hoverColorClass} transition-colors`}>
              About
            </Link>
            <Link to="/events" className={`${hoverColorClass} transition-colors`}>
              Events
            </Link>
            <Link to="/get-involved" className={`${hoverColorClass} transition-colors`}>
              Get Involved
            </Link>
          </div>
        </div>

        {/* Right side - Social Icons */}
        <div className={`flex items-center space-x-6 ${textColorClass}`}>
          <a href="#" className={`${hoverColorClass} transition-colors`}>
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className={`${hoverColorClass} transition-colors`}>
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className={`${hoverColorClass} transition-colors`}>
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className={`${hoverColorClass} transition-colors`}>
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className={`${hoverColorClass} transition-colors`}>
            <MessageSquare className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;