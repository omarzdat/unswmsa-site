import React from 'react';
import { Github, Facebook, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import EventCard from '../components/EventCard';

const ServiceCard = ({ title, children }) => (
  <div className="bg-white/10 rounded-lg p-3 md:p-6 flex flex-col items-center justify-center text-center">
    <h3 className="text-lg md:text-2xl font-semibold mb-1 md:mb-2">{title}</h3>
    {children}
  </div>
);

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Hero Section */}
      <section className="snap-start h-screen relative bg-black">
        <div className="absolute inset-0">
          <img
            src="src/assets/hero.JPG"
            alt="Soccer players"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-0">
          <img 
            src="src/assets/msa-logo.png" 
            alt="logo"
            className="w-48 md:w-64 mb-6" 
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">UNSWMSA</h1>
          <p className="text-lg md:text-xl mb-8">FOR STUDENTS, BY STUDENTS</p>
          <button className="border-2 border-white px-6 py-2 md:px-8 md:py-3 text-base md:text-lg hover:bg-white hover:text-black transition-colors">
            JOIN TODAY
          </button>
        </div>
      </section>

      {/* Who are UNSWMSA? Section */}
      <section className="snap-start h-screen bg-[#C84C29] text-white">
        <div className="max-w-7xl mx-auto h-full px-4 md:px-16 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative w-full aspect-[4/5] rounded-t-[200px] md:rounded-t-[400px] overflow-hidden">
                <img
                  src="src/assets/henna.jpg"
                  alt="Middle Eastern food spread"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4 md:space-y-8 order-1 md:order-2">
              <h2 className="text-4xl md:text-7xl font-light">Who are UNSWMSA?</h2>
              <p className="text-base md:text-xl font-light leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget suscipit nunc. Ut
                maximus nulla lacus, vel suscipit elit sodales vitae. Fusce nisl mauris, feugiat in mi in, mollis
                suscipit ligula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Offering Section */}
      <section className="snap-start h-screen bg-[#C84C29] text-white">
        <div className="max-w-6xl mx-auto h-full px-4 md:px-16 flex flex-col justify-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-16">On campus we offer...</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 max-h-[60vh] md:max-h-none">
            <ServiceCard title="Prayer">
              <p className="text-xs md:text-base">Prayer spaces and facilities</p>
            </ServiceCard>
            <ServiceCard title="Halaqa">
              <p className="text-xs md:text-base">Weekly religious discussions</p>
            </ServiceCard>
            <ServiceCard title="Service">
              <p className="text-xs md:text-base">Community service opportunities</p>
            </ServiceCard>
            <ServiceCard title="Support">
              <p className="text-xs md:text-base">Student support services</p>
            </ServiceCard>
            <ServiceCard title="Education">
              <p className="text-xs md:text-base">Educational programs</p>
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="snap-start h-screen bg-[#F4A261] text-white">
        <div className="max-w-6xl mx-auto h-full px-4 md:px-16 flex flex-col justify-center">
          <div className="flex flex-col max-h-[80vh]">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-12">...and events aplenty</h2>
            
            {/* Mobile Layout */}
            <div className="flex flex-col gap-4 md:hidden">
              {/* Featured Event */}
              <EventCard
                isFeatured
                title="Featured Event Title"
                details="Join us for this amazing featured event that showcases the best of UNSWMSA's community engagement and activities."
                showSignUp
              />
              
              <h3 className="text-xl font-semibold mt-2">Upcoming</h3>
              <div className="grid grid-cols-2 gap-3">
                <EventCard title="Event 1" />
                <EventCard title="Event 2" />
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              {/* Featured Event */}
              <EventCard
                isFeatured
                title="Featured Event Title"
                details="Join us for this amazing featured event that showcases the best of UNSWMSA's community engagement and activities."
                showSignUp
              />
              
              {/* Upcoming Events */}
              <div className="flex flex-col">
                <h3 className="text-3xl font-semibold mb-8">Upcoming</h3>
                <div className="grid grid-cols-2 gap-4 flex-grow">
                  <EventCard title="Event 1" />
                  <EventCard title="Event 2" />
                </div>
                <button className="w-full border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-[#F4A261] transition-colors mt-8">
                  JOIN TODAY
                </button>
              </div>
            </div>

            {/* Mobile Join Button */}
            <button className="md:hidden w-full border-2 border-white px-6 py-2 text-sm hover:bg-white hover:text-[#F4A261] transition-colors mt-6">
              JOIN TODAY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;