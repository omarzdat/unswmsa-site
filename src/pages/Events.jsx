import React from 'react';
import EventCard from '../components/EventCard';

// Import upcoming event images
import oWeekHeroImage from '/assets/o-week-hero.jpg';
import meatGreetImage from '/assets/meat-greet.jpg';
import brosGameNightImage from '/assets/bros-game-night.jpg';
import swmImage from '/assets/swm.jpeg';

// Import past event images
import pastBbqImage from '/assets/past-events/past-bbq.jpg';
import dawahWorkshopImage from '/assets/past-events/dawah-workshop.jpg';
import rtrImage from '/assets/past-events/rtr.jpg';
import grandIftarImage from '/assets/past-events/grand-iftar.jpg';
import halaqaImage from '/assets/past-events/halaqa.jpg';
import basketballImage from '/assets/past-events/basketball.png';
import craftCoffeeImage from '/assets/past-events/craft-coffee.jpg';
import iawImage from '/assets/past-events/iaw.jpg';

const Events = () => {
  const upcomingEvents = [
    {
      title: "O-Week 2025",
      details: "Catch us on Feb 10-13, in the corridor between Int. Square & Quadrangle anytime from 10am - 4pm",
      image: oWeekHeroImage,
      showSignUp: true,
      signUpLink: "#",
    },
    {
      title: "Meat and Greet BBQ",
      details: "Kick off Term 1 with a free BBQ and some good (maybe lifelong) company",
      image: meatGreetImage,
      showSignUp: true,
      signUpLink: "https://www.instagram.com/p/DFulwwFSXAl/",
    },
    {
      title: "Brothers' Games Night",
      details: "Join us for an epic night of FIFA & Mario competitions, good vibes, and FREE pizza!",
      image: brosGameNightImage,
      showSignUp: true,
      signUpLink: "https://lovely-catmint-be1.notion.site/192980a12cbf809c870cdb27a6ab73b5",
    },
    {
      title: "Sisters' High Tea",
      details: "A cozy afternoon filled with sisterhood, games, and endless laughter",
      image: swmImage,
      showSignUp: true,
      signUpLink: "https://lovely-catmint-be1.notion.site/192980a12cbf80a5aac1fc88189f2d05",
    }
  ];

  const pastEvents = [
    {
      title: "Meat and Great '24",
      image: pastBbqImage
    },
    {
      title: "Starting Dawah: A Workshop",
      image: dawahWorkshopImage
    },
    {
      title: "Road To Ramadan",
      image: rtrImage
    },
    {
      title: "The Grand Iftar",
      image: grandIftarImage
    },
    {
      title: "Weekly Halaqa",
      image: halaqaImage
    },
    {
      title: "Brothers Basketball Tournament",
      image: basketballImage
    },
    {
      title: "Sisters Craft and Coffee",
      image: craftCoffeeImage
    },
    {
      title: "Islamic Awareness Week",
      image: iawImage
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
                signUpLink='https://www.instagram.com/p/DFsGOh9yroE/?img_index=1'
              />
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h1 className="text-3xl md:text-6xl mb-4">
                We'd love to see you at
                <br />
                <span className="bg-[#e76925] text-white px-2 mt-2 inline-block">O-Week 2025</span>
              </h1>
              <p className="text-base md:text-lg mb-8">
                Come join the brotherhood & sisterhood, join amazing volunteering teams, and walk away with some awesome freebies! 
                We're beyond excited to kick off this year with you, so don't miss out on the fun!
                Let's make memories and build a community that's strong in faith and action! 
              </p>
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
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;