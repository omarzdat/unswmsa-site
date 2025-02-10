import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Facebook, Instagram, Linkedin, MessageSquare } from 'lucide-react';

const SocialLink = ({ href, icon: Icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-black hover:text-orange-400 transition-colors"
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
    <footer className="fixed bottom-0 left-0 right-0 bg-white text-black z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Logo + Tagline + Social */}
        <div className="flex items-center gap-4">
          <img
            src="/api/placeholder/120/48"
            alt="UNSWMSA Logo"
            className="w-24"
          />
          <div>
            <p className="text-sm font-light mb-1">
              For Students, By Students
            </p>
            <div className="flex gap-3">
              <SocialLink href="https://github.com" icon={Github} />
              <SocialLink href="https://facebook.com" icon={Facebook} />
              <SocialLink href="https://instagram.com" icon={Instagram} />
              <SocialLink href="https://linkedin.com" icon={Linkedin} />
              <SocialLink href="#" icon={MessageSquare} />
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex items-center">
          <nav className="flex gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm hover:text-orange-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact Details */}
        <div className="flex items-center justify-end text-sm">
          <div className="space-x-6 flex">
            <span>(123) 456-7890</span>
            <span>hello@reallygreatsite.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;