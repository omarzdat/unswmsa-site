import React, { useState, useEffect } from 'react';
import { 
  House, 
  BookOpen, 
  Heart, 
  Users, 
  GraduationCap,
  MessageCircle
} from 'lucide-react';
import EventCard from '../components/EventCard';
import MobileFooter from '../components/MobileFooter';
import { useNavigate } from 'react-router-dom';
import { client, urlFor } from '../lib/sanityClient';

// Import all images
import heroImage from '/assets/hero3.webp';
import msaLogoWhite from '/assets/msa-logo-white.webp';
import archImage from '/assets/arch.webp';

const ServiceCard = ({ title, children, icon: Icon }) => (
  <div className="bg-white/10 rounded-lg p-3 md:p-6">
    <div className="flex items-center gap-3 mb-2">
      {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6 shrink-0" />}
      <h3 className="text-base md:text-2xl font-light">{title}</h3>
    </div>
    {children}
  </div>
);

const HomePage = () => {
  const navigate = useNavigate();
  const [highlightEvent, setHighlightEvent] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Query highlight event
        const highlightQuery = `*[_type == "event" && status == "highlight"] | order(eventDate desc)[0] {
          title,
          slug,
          description,
          eventDate,
          location,
          eventImage,
          externalLink
        }`;

        // Query upcoming events
        const upcomingQuery = `*[_type == "event" && status == "upcoming"] | order(eventDate asc)[0...3] {
          title,
          slug,
          description,
          eventDate,
          location,
          eventImage,
          externalLink
        }`;

        // Execute both queries in parallel
        const [highlightData, upcomingData] = await Promise.all([
          client.fetch(highlightQuery),
          client.fetch(upcomingQuery)
        ]);

        setHighlightEvent(highlightData);
        setUpcomingEvents(upcomingData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch events from Sanity:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Function to format event data for EventCard component
  const formatEventForCard = (event) => {
    if (!event) return null;
    
    return {
      title: event.title,
      details: event.description ? event.description[0]?.children[0]?.text : "",
      image: event.eventImage ? urlFor(event.eventImage).url() : null,
      showSignUp: !!event.externalLink,
      signUpLink: event.externalLink || '#'
    };
  };

  return (
    <div className="h-screen md:snap-y md:snap-mandatory overflow-y-auto">
      {/* Hero Section */}
      <section className="min-h-screen md:h-screen md:snap-start relative bg-black">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Soccer players"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-16 md:py-0">
          <img 
            src={msaLogoWhite}
            alt="logo"
            className="w-48 md:w-128 mb-6" 
          />
          <h1 className="text-4xl md:text-7xl mb-4 text-white font-light">UNSWMSA</h1>
          <p className="text-lg md:text-xl mb-8 text-white">FOR STUDENTS, BY STUDENTS</p>
        </div>
      </section>

      {/* Who are UNSWMSA? Section */}
      <section className="min-h-screen md:h-screen md:snap-start bg-[#e76925] text-white py-16 md:py-0">
        <div className="max-w-7xl mx-auto h-full px-4 md:px-16 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
            <div className="relative order-2 md:order-1">
              <div className="relative w-full aspect-[4/5] rounded-t-[200px] md:rounded-t-[400px] overflow-hidden">
                <img
                  src={archImage}
                  alt="Middle Eastern food spread"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4 md:space-y-8 order-1 md:order-2">
              <h2 className="text-4xl md:text-7xl font-light">Who are UNSWMSA?</h2>
              <p className="text-base md:text-xl font-light leading-relaxed">
                UNSWMSA is the premiere Muslim student society on campus, where we cater for 
                Muslims on campus by offering them amenities, a righteous environment, and many social, 
                educational, and spiritual events throughout the year.
              </p>
              <p className="text-base md:text-xl font-light leading-relaxed">
                As part of UNSWMSA, enrich your campus life with new like-minded friends, vibrant social and sports events,
                excellent educational initiatives and spirital circles - and even enjoy student offers with our partners!
              </p>
              <button 
                onClick={() => window.open('https://campus.hellorubric.com/?tab=memberships&s=6361', '_blank')}
                className="border-2 border-white text-white px-6 py-2 md:px-8 md:py-3 text-base md:text-lg hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                JOIN TODAY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen md:h-screen md:snap-start bg-[#ad3724] text-white py-16 md:py-0">
        <div className="max-w-6xl mx-auto h-full px-4 md:px-16 flex flex-col justify-center">
          <h2 className="text-2xl md:text-5xl font-light mb-2">UNSWMSA Services</h2>
          <p className="text-base md:text-xl font-light leading-relaxed mb-8">
            We offer a variety of services open to all muslims on campus
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <ServiceCard 
              title="Prayer" 
              icon={House}
            >
              <p className="text-xs md:text-base">Daily prayers at our musallah in the Biosciences building</p>
            </ServiceCard>
            
            <ServiceCard 
              title="Halaqa" 
              icon={BookOpen}
            >
              <p className="text-xs md:text-base">Weekly separate religious discussions for brothers and sisters</p>
            </ServiceCard>
            
            <ServiceCard 
              title="Development" 
              icon={Heart}
            >
              <p className="text-xs md:text-base">Community service opportunities designed to extend and elevate</p>
            </ServiceCard>
            
            <ServiceCard 
              title="Socials" 
              icon={Users}
            >
              <p className="text-xs md:text-base">Engaging events to connect with friends and have some fun</p>
            </ServiceCard>
            
            <ServiceCard 
              title="Education" 
              icon={GraduationCap}
            >
              <p className="text-xs md:text-base">Lectures and debates to enrich your understanding of Islam</p>
            </ServiceCard>
            
            <ServiceCard 
              title="Dawah" 
              icon={MessageCircle}
            >
              <p className="text-xs md:text-base">Every Wednesday on Library Walkway, spreading the message</p>
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="min-h-screen md:h-screen md:snap-start bg-[#961a1e] text-white py-16 md:py-0">
        <div className="max-w-6xl mx-auto h-full px-4 md:px-16 flex flex-col justify-center">
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-8">We'd love to see you at our events!</h2>
            
            {loading ? (
              <div className="text-center py-8">
                <p>Loading events...</p>
              </div>
            ) : (
              <>
                {/* Mobile Layout */}
                <div className="flex flex-col gap-6 md:hidden">
                  {/* Featured Event */}
                  {highlightEvent && (
                    <EventCard
                      isFeatured
                      title={highlightEvent.title}
                      details={highlightEvent.description ? highlightEvent.description[0]?.children[0]?.text : ""}
                      showSignUp={!!highlightEvent.externalLink}
                      signUpLink={highlightEvent.externalLink}
                      imageClassName="aspect-[16/9]"
                      image={highlightEvent.eventImage ? urlFor(highlightEvent.eventImage).url() : null}
                    />
                  )}
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Upcoming</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {upcomingEvents.map((event, index) => (
                        <EventCard 
                          key={`mobile-event-${index}`}
                          title={event.title}
                          details={event.description ? event.description[0]?.children[0]?.text : ""}
                          image={event.eventImage ? urlFor(event.eventImage).url() : null}
                          showSignUp={!!event.externalLink}
                          signUpLink={event.externalLink}
                          imageClassName="aspect-[3/2]"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => navigate('/events')}
                    className="w-full border-2 border-white px-6 py-2 text-base hover:bg-white hover:text-[#961a1e] transition-colors mt-4"
                  >
                    FIND OUT MORE
                  </button>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 gap-8">
                  {highlightEvent && (
                    <EventCard
                      image={highlightEvent.eventImage ? urlFor(highlightEvent.eventImage).url() : null}
                      title={highlightEvent.title}
                      details={highlightEvent.description ? highlightEvent.description[0]?.children[0]?.text : ""}
                      showSignUp={!!highlightEvent.externalLink}
                      signUpLink={highlightEvent.externalLink}
                    />
                  )}
                  
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-light mb-5">Upcoming</h3>
                    <div className="grid grid-cols-2 gap-4 flex-grow">
                      {upcomingEvents.map((event, index) => (
                        <EventCard 
                          key={`desktop-event-${index}`}
                          title={event.title}
                          image={event.eventImage ? urlFor(event.eventImage).url() : null}
                          showSignUp={!!event.externalLink}
                          signUpLink={event.externalLink}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => navigate('/events')}
                      className="w-full border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-[#961a1e] transition-colors mt-6"
                    >
                      FIND OUT MORE
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <MobileFooter />
    </div>
  );
};

export default HomePage;