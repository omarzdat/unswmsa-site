// src/pages/Events.jsx
import React from 'react';
import EventCard from '../components/EventCard';

const Events = () => {
  const upcomingEvents = [
    {
      title: "O-Week 2025",
      details: "Catch us on Feb 10-13, in the corridor between Int. Square & Quadrangle anytime from 10am - 4pm",
      image: "src/assets/o-week-hero.JPG",
      showSignUp: true,
      signUpLink: "#",
    },
    {
      title: "Meat and Greet BBQ",
      details: "Kick off Term 1 with a free BBQ and some good (maybe lifelong) company",
      image: "src/assets/meat-greet.JPG",
      showSignUp: true,
      signUpLink: "#",
    },
    {
      title: "Brothers' Games Night",
      details: "Join us for an epic night of FIFA & Mario competitions, good vibes, and FREE pizza!",
      image: "src/assets/bros-game-night.JPG",
      showSignUp: true,
      signUpLink: "#",
    },
    {
      title: "Sisters' High Tea",
      details: "A cozy afternoon filled with sisterhood, games, and endless laughter",
      image: "src/assets/swm.jpeg",
      showSignUp: true,
      signUpLink: "#",
    }
  ];

  const pastEvents = [
    {
      title: "Meat and Great '24",
      image: "src/assets/past-events/past-bbq.jpg"
    },
    {
      title: "Starting Dawah: A Workshop",
      image: "src/assets/past-events/dawah-workshop.jpg"
    },
    {
      title: "Road To Ramadan",
      image: "src/assets/past-events/rtr.jpg"
    },
    {
      title: "The Grand Iftar",
      image: "src/assets/past-events/grand-iftar.jpg"
    },
    {
      title: "Weekly Halaqa",
      image: "src/assets/past-events/halaqa.jpg"
    },
    {
      title: "Brothers Basketball Tournament",
      image: "src/assets/past-events/basketball.png"
    },
    {
      title: "Sisters Craft and Coffee",
      image: "src/assets/past-events/craft-coffee.jpg"
    },
    {
      title: "Islamic Awareness Week",
      image: "src/assets/past-events/iaw.jpg"
    }
  ];

  return (
    <div className="h-screen md:snap-y md:snap-mandatory overflow-y-auto">
      {/* Featured Event Section */}
      <section className="min-h-screen md:h-screen md:snap-start bg-[#EDE6DD] pt-20 pb-16 md:py-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="order-2 md:order-1">
              <EventCard
                {...upcomingEvents[0]}
                isFeatured
              />
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h1 className="text-3xl md:text-6xl mb-4">
                We'd love to see you at
                <br />
                <span className="bg-[#CD4631] text-white px-2 mt-2 inline-block">O-Week 2025</span>
              </h1>
              <p className="text-base md:text-lg mb-8">
                Come join the brotherhood & sisterhood, join amazing volunteering teams, and walk away with some awesome freebies! 
                We’re beyond excited to kick off this year with you, so don’t miss out on the fun!
                Let’s make memories and build a community that’s strong in faith and action! 
              </p>
              {/* <button className="border-2 border-[#CD4631] text-[#CD4631] px-6 py-2 md:px-8 md:py-3 w-full md:w-fit 
                              hover:bg-[#CD4631] hover:text-white transition-colors">
                SIGN UP!
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="min-h-screen md:h-screen md:snap-start bg-[#EDE6DD] py-16 md:py-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl mb-8 md:mb-12">Keep an eye out for...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {upcomingEvents.slice(1).map((event, i) => (
              <EventCard
                key={`upcoming-${i}`}
                {...event}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="min-h-screen md:h-screen md:snap-start bg-[#EDE6DD] py-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl mb-8 md:mb-12">Past events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pastEvents.map((event, i) => (
              <EventCard
                key={`past-${i}`}
                {...event}
                // className="opacity-75 grayscale"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;