// src/pages/About.jsx
import React from 'react';

const SpeechBubble = ({ text, className = "", large = false }) => (
  <div className={`rounded-[30px] p-8 ${large ? 'max-w-2xl' : ''} ${className}`}>
    <p className={`${large ? 'text-2xl leading-relaxed' : 'text-xl'} font-light`}>{text}</p>
  </div>
);

const TeamMember = () => (
  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
    <img
      src="/api/placeholder/96/96"
      alt="Team member"
      className="w-full h-full rounded-full object-cover"
    />
  </div>
);

const About = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Who is UNSWMSA Section */}
      <section className="snap-start h-screen relative pt-24">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Soccer background"
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16">
          <div className="flex flex-col gap-8">
            <SpeechBubble 
              text="So who is UNSWMSA?"
              className="bg-[#F4A261] text-white w-fit"
            />
            <SpeechBubble 
              text="blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
              className="bg-[#F4A261] text-white w-fit max-w-xl ml-12"
              large
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="snap-start h-screen relative">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Mosque background"
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 h-full">
          <div className="grid grid-cols-2 gap-16 h-full items-center">
            <SpeechBubble 
              text="Sure!"
              className="bg-[#CD4631] text-white w-fit"
            />
            <div className="space-y-6">
              <SpeechBubble 
                text="Would you like to hear about our vision?"
                className="bg-[#CD4631] text-white"
              />
              <SpeechBubble 
                text="blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
                className="bg-[#CD4631] text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="snap-start h-screen relative">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Islamic pattern background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
          <SpeechBubble 
            text="And who runs all this?"
            className="bg-[#CD4631] text-white w-fit mb-8"
          />
          
          <SpeechBubble 
            text="Glad you asked! Here is our executive team for the year:"
            className="bg-[#CD4631] text-white mb-8"
            large
          >
            <div className="grid grid-cols-6 gap-6 mt-8">
              {[...Array(12)].map((_, i) => (
                <TeamMember key={i} />
              ))}
            </div>
          </SpeechBubble>
        </div>
      </section>
    </div>
  );
};

export default About;