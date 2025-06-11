import React from 'react';
import EventCard from '../components/EventCard';
import MobileFooter from '../components/MobileFooter';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanityClient';
import { PortableText } from '@portabletext/react';

const Events = () => {
  const [highlightEvent, setHighlightEvent] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      
      try {
        // First, let's test with a simple query to see if any events exist
        const allEvents = await client.fetch('*[_type == "event"]');
        console.log('All events:', allEvents);
        
        if (allEvents.length === 0) {
          console.log('No events found in the dataset');
          setIsLoading(false);
          return;
        }



        // Fetch highlight event
        const highlightQuery = `*[_type == "event" && status == "highlight"] | order(eventDate desc)[0] {
          title,
          "slug": slug.current,
          eventDate,
          location,
          description,
          "image": eventImage,
          externalLink
        }`;

        // Fetch upcoming events
        const upcomingQuery = `*[_type == "event" && status == "upcoming"] | order(eventDate asc) {
          title,
          "slug": slug.current,
          eventDate,
          location,
          description,
          "image": eventImage,
          externalLink
        }`;

        // Fetch past events
        const pastQuery = `*[_type == "event" && status == "past"] | order(eventDate desc) {
          title,
          "slug": slug.current,
          eventDate,
          "image": eventImage
        }`;

        // Execute all queries in parallel
        const [highlightData, upcomingData, pastData] = await Promise.all([
          client.fetch(highlightQuery),
          client.fetch(upcomingQuery),
          client.fetch(pastQuery)
        ]);

        setHighlightEvent(highlightData);
        setUpcomingEvents(upcomingData);
        setPastEvents(pastData);
      } catch (error) {
        console.error("Error fetching events from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // // Fallback data for highlight event only
  // const fallbackHighlight = {
  //   title: "O-Week 2025",
  //   details: "Catch us on Feb 10-13, in the corridor between Int. Square & Quadrangle anytime from 10am - 4pm",
  //   image: "/assets/o-week-hero.webp",
  //   showSignUp: true,
  //   signUpLink: "https://www.instagram.com/p/DFsGOh9yroE/?img_index=1",
  //   };

  return (
    <div className="h-screen md:snap-y md:snap-mandatory overflow-y-auto">
      {/* Featured Event Section */}
      <section className="min-h-screen md:h-screen md:snap-start bg-[#EDE6DD] pt-20 pb-16 md:py-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="order-2 md:order-1">
              {isLoading ? (
                <div className="animate-pulse bg-gray-300 rounded-lg h-80 w-full"></div>
              ) : (
                <EventCard
                  title={highlightEvent?.title || ""}
                  details={highlightEvent?.description && 
                    <PortableText value={highlightEvent.description} />}
                  image={highlightEvent?.image && urlFor(highlightEvent.image).url()}
                  isFeatured
                  showSignUp={!!highlightEvent?.externalLink}
                  signUpLink={highlightEvent?.externalLink || "#"}
                />
              )}
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h1 className="text-3xl md:text-6xl mb-4">
                We'd love to see you at
                <br />
                <span className="bg-[#e76925] text-white px-2 mt-2 inline-block">
                  {isLoading ? "Loading..." : highlightEvent?.title}
                </span>
              </h1>
              <p className="text-base md:text-sm mb-1">
                This year’s theme, “Faith Beyond the Headlines. Islam Beyond Assumptions,” dives deep into media portrayals, 
                challenges misconceptions, and reclaims the narrative. From myth-busting and personal stories to art, 
                games, and spiritual reflection, each day brings something unique. Keep an eye on our socials for more details!
              </p>
              <p className="text-base md:text-sm mb-8">
                Want to be part of the team? Message us to volunteer and get involved!
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
            {isLoading ? (
              // Loading placeholders
              Array(3).fill().map((_, i) => (
                <div key={`loading-upcoming-${i}`} className="animate-pulse bg-gray-300 rounded-lg h-64 w-full"></div>
              ))
            ) : (
              // Display upcoming events from Sanity (no fallback)
              upcomingEvents.slice(0, 4).map((event, i) => (
                <EventCard
                  key={`upcoming-${i}`}
                  title={event.title}
                  details={event.description && <PortableText value={event.description} />}
                  image={event.image ? urlFor(event.image).url() : null}
                  showSignUp={!!event.externalLink}
                  signUpLink={event.externalLink}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="min-h-screen md:h-screen md:snap-start bg-[#EDE6DD] py-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl mb-8 md:mb-12">Past events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {isLoading ? (
              // Loading placeholders
              Array(8).fill().map((_, i) => (
                <div key={`loading-past-${i}`} className="animate-pulse bg-gray-300 rounded-lg h-48 w-full"></div>
              ))
            ) : (
              // Display past events from Sanity (no fallback)
              pastEvents.map((event, i) => (
                <EventCard
                  key={`past-${i}`}
                  title={event.title}
                  image={event.image ? urlFor(event.image).url() : null}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <MobileFooter />
    </div>
  );
};

export default Events;