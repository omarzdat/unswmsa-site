// src/pages/GetInvolved.jsx
import React from 'react';
import AccordionItem from '../components/Accordion';

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-[#561C24]">
      <section className="min-h-screen px-8 flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center pt-16">
          {/* Left side content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl text-white mb-8">
              Keen to get involved?
            </h1>
            <p className="text-white text-xl mb-12">
              We at UNSWMSA are beyond elated to meet you!
            </p>
            
            <div className="space-y-2">
              <AccordionItem title="I want to join your chats">
                Join our Discord community and WhatsApp groups.
              </AccordionItem>

              <AccordionItem title="I want to volunteer">
                Sign up for our volunteer programs and events.
              </AccordionItem>

              <AccordionItem title="I want to etc">
                Additional opportunities and ways to get involved.
              </AccordionItem>

              <AccordionItem title="I want to etc">
                More ways to participate in our community.
              </AccordionItem>
            </div>
          </div>

          {/* Right side - Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/api/placeholder/600/600"
              alt="UNSWMSA 3D Logo"
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;