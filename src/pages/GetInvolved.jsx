// src/pages/GetInvolved.jsx
import React from 'react';
import AccordionItem from '../components/Accordion';

const GetInvolved = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start h-screen bg-[#561C24] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left side content */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 md:mb-8">
                Keen to get involved?
              </h1>
              <p className="text-white text-base md:text-xl mb-8 md:mb-12">
                We at UNSWMSA are beyond elated to meet you!
              </p>
              
              <div className="space-y-2">
                <AccordionItem title="I want to join your chats">
                  <div className="text-sm md:text-base">
                    Join our Discord community and WhatsApp groups for regular updates, 
                    discussions, and to connect with fellow members.
                  </div>
                </AccordionItem>

                <AccordionItem title="I want to volunteer">
                  <div className="text-sm md:text-base">
                    Sign up for our volunteer programs and events. Help organize 
                    events, support community initiatives, and make a difference.
                  </div>
                </AccordionItem>

                <AccordionItem title="I want to join subcommittees">
                  <div className="text-sm md:text-base">
                    Get involved in specialized teams focusing on events, media, 
                    sports, or education. Develop skills and gain experience while 
                    contributing to the community.
                  </div>
                </AccordionItem>

                <AccordionItem title="I want to become a sponsor">
                  <div className="text-sm md:text-base">
                    Support our initiatives and connect with our vibrant community. 
                    We offer various partnership opportunities for businesses and organizations.
                  </div>
                </AccordionItem>
              </div>
            </div>

            {/* Right side - Logo */}
            <div className="flex items-center justify-center order-1 md:order-2 mb-8 md:mb-0">
              <img
                src="src/assets/msa-logo.png"
                alt="UNSWMSA 3D Logo"
                className="w-full max-w-[200px] md:max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;