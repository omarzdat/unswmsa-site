// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Facebook, Instagram, Linkedin, MessageSquare } from 'lucide-react';

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
    <footer className="fixed bottom-0 left-0 right-0 bg-white text-black z-50">
      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-3 gap-8">
          {/* Column 1: Logo + Tagline + Social */}
          <div className="flex items-center gap-4">
            <img
              src="/api/placeholder/120/48"
              alt="UNSWMSA Logo"
              className="w-24"
            />
            <div>
              <p className="text-sm font-light mb-2">
                For Students, By Students
              </p>
              <div className="flex gap-3">
                <SocialLink href="#" icon={Github} />
                <SocialLink href="#" icon={Facebook} />
                <SocialLink href="#" icon={Instagram} />
                <SocialLink href="#" icon={Linkedin} />
                <SocialLink href="#" icon={MessageSquare} />
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
              <span>(123) 456-7890</span>
              <span>hello@reallygreatsite.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden px-4 py-3">
        <div className="flex flex-col space-y-3">
          {/* Top Row: Logo and Contact */}
          <div className="flex justify-between items-center">
            <img
              src="/api/placeholder/80/32"
              alt="UNSWMSA Logo"
              className="w-16"
            />
            <span className="text-xs">hello@reallygreatsite.com</span>
          </div>
          
          {/* Middle Row: Navigation */}
          <div className="flex justify-between text-xs">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-[#CD4631] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom Row: Social Icons */}
          <div className="flex justify-center gap-4">
            <SocialLink href="#" icon={Github} />
            <SocialLink href="#" icon={Facebook} />
            <SocialLink href="#" icon={Instagram} />
            <SocialLink href="#" icon={Linkedin} />
            <SocialLink href="#" icon={MessageSquare} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;