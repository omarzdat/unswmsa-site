// src/pages/Events.jsx
import React from 'react';
import EventCard from '../components/EventCard';

const Events = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-[#EDE6DD]">
      {/* Featured Event Section */}
      <section className="snap-start h-screen pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16 mt-12">
            <EventCard
              isFeatured
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl mb-4">We'd love to<br />see you at<br /><span className="bg-[#CD4631] text-white px-2">insertevent</span></h1>
              <p className="text-lg mb-8">
                Event details Event details Event details Event details Event details Event details
                Event details Event details Event details Event details Event details Event details
                Event details Event details Event details
              </p>
              <button className="border-2 border-[#CD4631] text-[#CD4631] px-8 py-3 w-fit hover:bg-[#CD4631] hover:text-white transition-colors">
                SIGN UP!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="snap-start min-h-screen pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-12">Keep an eye out for...</h2>
          <div className="grid grid-cols-4 gap-8">
            {[...Array(12)].map((_, i) => (
              <EventCard key={`upcoming-${i}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="snap-start min-h-screen pt-24 px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-12">Past events</h2>
          <div className="grid grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <EventCard key={`past-${i}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;