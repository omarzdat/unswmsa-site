import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, NotepadText } from 'lucide-react';
import msaLogoColor from '/assets/msa-logo-colour.webp';

const SocialLink = ({ href, icon: Icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-[#CD4631] transition-colors"
  >
    <Icon className="w-4 h-4" />
  </a>
);

const MobileFooter = () => {
  return (
    <section className="md:hidden bg-white text-gray-800 px-4 py-4">
      <div className="max-w-lg mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-x-4">
          {/* Left Column: Logo, Tagline, Contact */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={msaLogoColor}
                alt="UNSWMSA Logo"
                className="w-8 h-8"
              />
              <p className="text-[10px] text-gray-500">
                For Students,<br />By Students
              </p>
            </div>
            <a 
              href="mailto:unswmsa@gmail.com" 
              className="text-xs text-gray-600 hover:text-[#CD4631] transition-colors"
            >
              unswmsa@gmail.com
            </a>
          </div>

          {/* Right Column: Navigation Links */}
          <nav className="grid grid-cols-1 gap-1 text-right">
            <Link 
              to="/" 
              className="text-xs text-gray-600 hover:text-[#CD4631] transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-xs text-gray-600 hover:text-[#CD4631] transition-colors"
            >
              About
            </Link>
            <Link 
              to="/events" 
              className="text-xs text-gray-600 hover:text-[#CD4631] transition-colors"
            >
              Events
            </Link>
            <Link 
              to="/get-involved" 
              className="text-xs text-gray-600 hover:text-[#CD4631] transition-colors"
            >
              Get Involved
            </Link>
          </nav>
        </div>

        {/* Social Links - Bottom Border Line */}
        <div className="flex justify-center gap-4 mt-3 pt-2 border-t border-gray-100">
          <SocialLink href="https://www.facebook.com/UNSWMSA" icon={Facebook} />
          <SocialLink href="https://www.instagram.com/unswmsa/" icon={Instagram} />
          <SocialLink href="https://www.linkedin.com/company/unsw-muslim-students-association-unswmsa/?viewAsMember=true" icon={Linkedin} />
          <SocialLink href="https://www.youtube.com/@theunswmsa" icon={Youtube}/>
          <SocialLink href="https://unswmsa.substack.com/" icon={NotepadText} />
        </div>
      </div>
    </section>
  );
};

export default MobileFooter;