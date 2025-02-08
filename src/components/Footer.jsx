// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="h-1/3 bg-black text-white p-16 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-16">
        {/* Logo Side */}
        <div className="relative">
          <div className="w-96 h-96 bg-gradient-to-br from-orange-600 to-orange-400 rounded-full opacity-20 absolute -top-20 -left-20"></div>
          <img
            src="/api/placeholder/500/500"
            alt="UNSWMSA 3D Logo"
            className="relative z-10"
          />
        </div>
        
        {/* Contact Information Side */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-3xl font-light underline mb-2">Phone Number</h3>
            <p className="text-xl">(123) 456-7890</p>
          </div>
          
          <div>
            <h3 className="text-3xl font-light underline mb-2">Mailing Address</h3>
            <p className="text-xl">123 Anywhere St. Any City, ST 12345</p>
          </div>
          
          <div>
            <h3 className="text-3xl font-light underline mb-2">Email Address</h3>
            <p className="text-xl">hello@reallygreatsite.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;