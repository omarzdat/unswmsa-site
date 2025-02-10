import React from 'react';
import AccordionItem from '../components/Accordion';
import msaLogo from '/assets/msa-logo-white.png';

const GetInvolved = () => {
  return (
    <div className="h-screen md:snap-y md:snap-mandatory overflow-y-auto">
      <section className="min-h-screen md:h-screen md:snap-start relative pt-20 pb-16 md:py-0">
        {/* Gradient background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ad3724] via-[#8c2c1d] to-[#561C24]">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full">
            {/* Left side content */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h1 className="text-3xl md:text-6xl text-white mb-4 md:mb-8">
                Keen to get involved?
              </h1>
              <p className="text-white text-base md:text-xl mb-8 md:mb-12">
                We at UNSWMSA are beyond elated to meet you!
              </p>
              
              <div className="space-y-2">
                <AccordionItem title="I want to join your chats">
                  <div className="text-sm md:text-base">
                    Join our <a href="#" className="text-white underline hover:opacity-80">UNSWMSA community chat</a> to stay updated and connected with fellow members.
                  </div>
                </AccordionItem>

                <AccordionItem title="I want to volunteer">
                  <div className="text-sm md:text-base">
                    First, join our UNSWMSA community chat. From there, you'll be able to join our dedicated volunteers chat 
                    where all volunteering opportunities are posted.
                  </div>
                </AccordionItem>

                <AccordionItem title="I want to join subcommittees">
                  <div className="text-sm md:text-base">
                    Get involved in specialized teams focusing on events, media, dawah, or activism. 
                    Keep an eye on our social media channels for upcoming opportunities and openings,
                    and apply when they open!
                  </div>
                </AccordionItem>

                <AccordionItem title="I want to become a sponsor">
                  <div className="text-sm md:text-base">
                    Please reach out to us via our 
                    <a href="mailto:unswmsa@gmail.com" className="text-white underline hover:opacity-80"> email</a>, 
                    or drop us an 
                    <a href="https://www.instagram.com/unswmsa/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-80"> Instagram</a> message! 
                    We're always eager to strengthen our bonds with the wider Muslim community.
                  </div>
                </AccordionItem>

              </div>
            </div>

            {/* Right side - Logo */}
            <div className="flex items-center justify-center order-1 md:order-2 mb-8 md:mb-0">
              <img
                src={msaLogo}
                alt="UNSWMSA 3D Logo"
                className="w-48 md:w-full md:max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;