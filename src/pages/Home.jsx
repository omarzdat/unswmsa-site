import React from 'react';
import { Github, Facebook, Instagram, Linkedin, MessageSquare } from 'lucide-react';

const ServiceCard = ({ title, children }) => (
  <div className="bg-white/10 rounded-lg p-6 aspect-[2/1] flex flex-col items-center justify-center">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const EventCard = ({ imageSrc }) => (
  <div className="bg-white rounded shadow-lg overflow-hidden">
    <img src={imageSrc} alt="Event" className="w-full h-48 object-cover" />
  </div>
);

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Hero Section */}
      <section className="snap-start h-screen pt-24 relative bg-black">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Soccer players"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center -mt-12">
          <h1 className="text-6xl font-bold mb-4">UNSWMSA</h1>
          <p className="text-xl mb-8">FOR STUDENTS, BY STUDENTS</p>
          <button className="border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition-colors">
            JOIN TODAY
          </button>
        </div>
      </section>

      {/* Who are UNSWMSA? Section */}
      <section className="snap-start h-screen pt-24 bg-[#C84C29] text-white p-16 flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/600/600"
              alt="Middle Eastern food spread"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-8">Who are UNSWMSA?</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget suscipit nunc. Ut
              maximus nulla lacus, vel suscipit elit sodales vitae. Fusce nisl mauris, feugiat in mi in, mollis
              suscipit ligula. Nullam tristique tristique massa, eget ultricies nunc aliquam sit amet.
            </p>
          </div>
        </div>
      </section>

      {/* On Campus We Offer Section */}
      <section className="snap-start h-screen pt-24 bg-[#C84C29] text-white p-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">On campus we offer...</h2>
          <div className="grid grid-cols-3 gap-8">
            <ServiceCard title="Prayer">
              <p className="text-center">Prayer spaces and facilities</p>
            </ServiceCard>
            <ServiceCard title="Halaqa">
              <p className="text-center">Weekly religious discussions</p>
            </ServiceCard>
            <ServiceCard title="Service">
              <p className="text-center">Community service opportunities</p>
            </ServiceCard>
            <ServiceCard title="Service">
              <p className="text-center">Student support services</p>
            </ServiceCard>
            <ServiceCard title="Service">
              <p className="text-center">Educational programs</p>
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="snap-start h-screen pt-24 bg-[#F4A261] text-white p-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">...and events aplenty</h2>
          <div className="grid grid-cols-4 gap-8 mt-16">
            {/* Featured Event */}
            <div className="col-span-2 row-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <img
                  src="/api/placeholder/800/600"
                  alt="Featured event"
                  className="w-full h-3/4 object-cover"
                />
                <div className="p-6 text-black">
                  <h3 className="text-2xl font-bold">event info</h3>
                </div>
              </div>
            </div>
            
            {/* Upcoming Events */}
            <div className="col-span-2 space-y-8">
              <h3 className="text-3xl font-semibold">Upcoming</h3>
              <div className="grid grid-cols-2 gap-4">
                <EventCard imageSrc="/api/placeholder/400/300" />
                <EventCard imageSrc="/api/placeholder/400/300" />
                <EventCard imageSrc="/api/placeholder/400/300" />
              </div>
              <button className="w-full border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-[#F4A261] transition-colors mt-4">
                JOIN TODAY
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;