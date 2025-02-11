import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Facebook, Instagram, Linkedin, MessageSquare, Youtube, NotepadText } from 'lucide-react';
import msaLogoColor from '/assets/msa-logo-colour.webp';

const SocialLink = ({ href, icon: Icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-black hover:text-[#CD4631] transition-colors"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Get Involved', path: '/get-involved' },
  ];

  return (
    // Added hidden for all mobile screens
    <footer className="hidden md:block fixed bottom-0 left-0 right-0 bg-white text-black z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-3 gap-8">
        {/* Column 1: Logo + Tagline + Social */}
        <div className="flex items-center gap-4">
          <img
            src={msaLogoColor}
            alt="UNSWMSA Logo"
            className="w-12"
          />
          <div>
            <p className="text-sm font-light mb-2">
              For Students, By Students
            </p>
            <div className="flex gap-3">
              <SocialLink href="https://www.facebook.com/UNSWMSA" icon={Facebook} />
              <SocialLink href="https://www.instagram.com/unswmsa/" icon={Instagram} />
              <SocialLink href="https://www.linkedin.com/company/unsw-muslim-students-association-unswmsa/?viewAsMember=true" icon={Linkedin} />
              <SocialLink href="https://www.youtube.com/@theunswmsa" icon={Youtube}/>
              <SocialLink href="https://unswmsa.substack.com/" icon={NotepadText} />
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex items-center">
          <nav className="flex gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm hover:text-[#CD4631] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact Details */}
        <div className="flex items-center justify-end text-sm">
          <div className="space-x-6 flex">
            <span>0470 100 936</span>
            <span>
              <a href="mailto:unswmsa@gmail.com"className='hover:text-[#CD4631] transition-colors'>
                unswmsa@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;