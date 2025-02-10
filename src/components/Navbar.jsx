// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Facebook, Instagram, Linkedin, MessageSquare, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Get text color based on route
  const getNavColors = () => {
    switch (location.pathname) {
      case '/':
        return 'text-white'; // Home page
      case '/about':
        return 'text-white'; // About page
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

  const SocialLink = ({ href, icon: Icon }) => (
    <a 
      href={href} 
      className={`${textColorClass} ${hoverColorClass} transition-colors`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5" />
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <Link to="/" className={textColorClass}>
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12">
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor"/>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
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

          {/* Desktop Social Icons */}
          <div className="flex items-center space-x-4">
            <SocialLink href="#" icon={Github} />
            <SocialLink href="#" icon={Facebook} />
            <SocialLink href="#" icon={Instagram} />
            <SocialLink href="#" icon={Linkedin} />
            <SocialLink href="#" icon={MessageSquare} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${textColorClass} p-2`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`
            fixed top-0 right-0 bottom-0 
            bg-black/95 backdrop-blur-sm
            w-[300px] p-8
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
          `}
        >
          {/* Mobile Menu Close Button */}
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-6 mt-16">
            <Link 
              to="/" 
              className="text-white text-2xl hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white text-2xl hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/events" 
              className="text-white text-2xl hover:text-gray-300 transition-colors"
            >
              Events
            </Link>
            <Link 
              to="/get-involved" 
              className="text-white text-2xl hover:text-gray-300 transition-colors"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Social Links */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex justify-between">
              <SocialLink href="#" icon={Github} />
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href="#" icon={MessageSquare} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;