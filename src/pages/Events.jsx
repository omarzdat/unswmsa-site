// src/pages/Events.jsx
import React from 'react';
import EventCard from '../components/EventCard';

const Events = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Featured Event Section */}
      <section className="snap-start h-screen bg-[#EDE6DD] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <EventCard
              isFeatured
              title="Big Iftar 2024"
              details="Join us for the biggest community iftar of the year! Connect with fellow students, 
                      enjoy amazing food, and celebrate together in this beautiful evening of unity and friendship."
              showSignUp
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl mb-4">
                We'd love to see you at
                <br />
                <span className="bg-[#CD4631] text-white px-2 mt-2 inline-block">Big Iftar 2024</span>
              </h1>
              <p className="text-base md:text-lg mb-8">
                The biggest community gathering of the year is back! Join us for an evening of 
                food, friendship, and celebration. Don't miss out on this amazing opportunity 
                to connect with your fellow students and be part of our vibrant community.
              </p>
              <button className="border-2 border-[#CD4631] text-[#CD4631] px-8 py-3 w-fit 
                               hover:bg-[#CD4631] hover:text-white transition-colors">
                SIGN UP!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="snap-start min-h-screen bg-[#EDE6DD] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-[64px]">
          <h2 className="text-3xl md:text-5xl mb-12">Keep an eye out for...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[...Array(8)].map((_, i) => (
              <EventCard
                key={`upcoming-${i}`}
                title={`Upcoming Event ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="snap-start min-h-screen bg-[#EDE6DD] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-[64px]">
          <h2 className="text-3xl md:text-5xl mb-12">Past events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[...Array(8)].map((_, i) => (
              <EventCard
                key={`past-${i}`}
                title={`Past Event ${i + 1}`}
                className="opacity-75 grayscale"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;