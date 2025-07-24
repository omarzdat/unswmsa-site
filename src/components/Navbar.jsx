import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Facebook, Instagram, Linkedin, Youtube, MessageSquare, Menu, X, NotepadText, ChevronDown } from 'lucide-react';
import msaLogoColor from '/assets/msa-logo-colour.webp';
import msaLogoWhite from '/assets/msa-logo-white.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const location = useLocation();
  const resourcesRef = useRef(null);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
    setIsMobileResourcesOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get text color based on route
  const getNavColors = () => {
    // First check for publication routes
    if (location.pathname.startsWith('/publications/')) {
      return 'text-black';
    }
    
    // Then handle all explicit routes
    switch (location.pathname) {
      case '/':
        return 'text-white';
      case '/about':
        return 'text-white';
      case '/events':
        return 'text-black';
      case '/get-involved':
        return 'text-white';
      case '/publications':
        return 'text-white';
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

  const dawahLink = "https://lovely-catmint-be1.notion.site/Dawah-Resource-Hub-18f980a12cbf8031a811d7cdebd99f17"; 

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <Link to="/" className={textColorClass}>
          <img
            src={location.pathname === '/events' || 
                (location.pathname.startsWith('/publications/') && location.pathname !== '/publications') 
                ? msaLogoColor : msaLogoWhite}
            alt="UNSWMSA Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
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
            <Link to="/publications" className={`${hoverColorClass} transition-colors`}>
              Publications
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className={`${hoverColorClass} transition-colors flex items-center space-x-1`}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-md shadow-lg border border-gray-200 min-w-[150px] py-2 z-50">
                  <a
                    href={dawahLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Dawah
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className="flex items-center space-x-4">
            <SocialLink href="https://www.facebook.com/UNSWMSA" icon={Facebook} />
            <SocialLink href="https://www.instagram.com/unswmsa/" icon={Instagram} />
            <SocialLink href="https://www.linkedin.com/company/unsw-muslim-students-association-unswmsa/?viewAsMember=true" icon={Linkedin} />
            <SocialLink href="https://www.youtube.com/@theunswmsa" icon={Youtube}/>
            <SocialLink href="https://unswmsa.substack.com/" icon={NotepadText} />
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
            <Link 
              to="/publications" 
              className="text-white text-2xl hover:text-gray-300 transition-colors"
            >
              Publications
            </Link>
            
            {/* Mobile Resources Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                className="text-white text-2xl hover:text-gray-300 transition-colors flex items-center justify-between w-full"
              >
                <span>Resources</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mobile Dropdown Items */}
              {isMobileResourcesOpen && (
                <div className="ml-4 mt-3">
                  <a
                    href={dawahLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 text-xl hover:text-white transition-colors"
                  >
                    Dawah
                  </a>
                </div>
              )}
            </div>
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