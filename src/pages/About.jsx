import React from 'react';
import MobileFooter from '../components/MobileFooter';

// Import profile images
import aboutHeroImage from '/assets/about-hero.webp';
import topStackImage from '/assets/vision-stack/top.webp';
import midStackImage from '/assets/vision-stack/mid.webp';
import bottomStackImage from '/assets/vision-stack/bottom.webp';

// Import sponsor logos
import humanAppealLogo from '/assets/sponsors/humanappeal.webp';
import icfalLogo from '/assets/sponsors/icfal.webp';
import headstartLogo from '/assets/sponsors/headstart.webp';

const TeamMember = ({ name, title, image }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 bg-white/10">
      <img
        src={image || "/api/placeholder/160/160"}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-base md:text-lg font-light text-white mb-0.5">{name}</h3>
    <p className="text-xs md:text-sm text-white/80">{title}</p>
  </div>
);

const SponsorCard = ({ name, logo, description, url }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group"
       onClick={() => url && window.open(url, '_blank')}>
    <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 bg-white rounded-lg p-4 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="text-lg md:text-xl font-medium text-white mb-3 md:mb-4 group-hover:text-white/90">{name}</h3>
    <p className="text-sm md:text-base text-white/80 leading-relaxed group-hover:text-white/70">{description}</p>
  </div>
);

const About = () => {
  const teamMembers = [
    { name: "Umar Khan", title: "President", image: "/assets/profiles/umar.webp" },
    { name: "Afra Kamal", title: "Vice President", image: "/assets/profiles/afra.webp" },
    { name: "Eeman R Shah", title: "Secretary", image: "/assets/profiles/eeman.webp" },
    { name: "Ayman Chowdhury", title: "Treasurer", image: "/assets/profiles/ayman.webp" },
    { name: "Zakariya Ali Yoga", title: "Arc Delegate", image: "/assets/profiles/zak.webp" },
    { name: "Ryan Khan", title: "Media and Content Lead", image: "/assets/profiles/ryan.webp" },
    { name: "Nuzhat Anjum", title: "Media and Content Lead", image: "/assets/profiles/nuzhat.webp" },
    { name: "Ayishah Ahmad", title: "Media and Content Lead", image: "/assets/profiles/ayishah.webp" },
    { name: "AbdulRahman Tijani", title: "Brothers Dawah Lead", image: "/assets/profiles/tijani.webp" },
    { name: "Hawra Al Shami", title: "Sisters Dawah Lead", image: "/assets/profiles/hawra.webp" },
    { name: "Souad Khan", title: "Activism Lead (Accountability)", image: "/assets/profiles/souad.webp" },
    { name: "Rama Emad", title: "Activism Lead (Education)", image: "/assets/profiles/rama.webp" },
    { name: "Zaynab Alam", title: "Sisters Events Lead", image: "/assets/profiles/zaynab.webp" },
    { name: "Saarang Ali", title: "Brothers Events Lead", image: "/assets/profiles/saarang.webp" },
  ];

  const sponsors = [
    {
      name: "Human Appeal",
      logo: humanAppealLogo,
      description: "An international humanitarian charity dedicated to providing emergency relief and sustainable development programs to communities in need around the world.",
      url: "https://www.humanappeal.org.au/"
    },
    {
      name: "ICFAL",
      logo: icfalLogo,
      description: "Islamic Co-Operative Finance Australia Limited, providing Sharia-compliant financial solutions and services to the Australian Muslim community.",
      url: "https://www.icfal.com.au/" 
    },
    {
      name: "Headstart Legal",
      logo: headstartLogo,
      description: "Australia’s first law firm established expressly with the vision of powering the growth and achievement of Australia’s burgeoning Muslim community.",
      url: "https://headstartlegal.com.au/"
    }
  ];

  return (
    <div className="h-screen md:snap-y md:snap-mandatory overflow-y-auto">
      {/* Who is UNSWMSA Section */}
      <section className="min-h-screen md:h-screen md:snap-start relative flex items-center md:block pt-20 pb-16 md:py-0">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#961a1e] opacity-80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 h-full md:flex md:items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl text-white mb-8 md:mb-12">
              Who are UNSWMSA?
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed">
              The UNSW Muslim Students' Association (UNSWMSA) is a vibrant community 
              of Muslim students dedicated to fostering spiritual growth, academic excellence, 
              and social connection. Founded on the principles of unity and support, we serve 
              as a bridge between Muslim students and the broader university community.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="min-h-screen md:h-screen md:snap-start relative py-16 md:py-0 bg-gradient-to-b from-[#961a1e] to-[#ad3724]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl text-white mb-6 md:mb-8">Our Vision</h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                We envision a university environment where Muslim students can thrive 
                academically, spiritually, and socially. Our mission is to create an 
                inclusive space that celebrates our faith while building bridges with 
                the broader community.
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Through education, community service, and social activities, we aim to 
                nurture future leaders who embody Islamic values while excelling in 
                their chosen fields.
              </p>
            </div>
            
            {/* Stacked Photos */}
            <div className="w-full flex justify-center">
              <div className="relative h-[400px] md:h-[500px] w-full max-w-[320px] md:max-w-none">
                {/* Background blur */}
                <div className="w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                
                {/* Bottom photo */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 md:w-80 h-64 md:h-96">
                  <img
                    src={bottomStackImage}
                    alt="Vision illustration 3"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                </div>
                
                {/* Middle photo */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-x-4 md:translate-x-12 w-48 md:w-80 h-64 md:h-96 rotate-6">
                  <img
                    src={midStackImage}
                    alt="Vision illustration 2"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                </div>
                
                {/* Top photo */}
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 -translate-x-4 md:-translate-x-12 w-48 md:w-80 h-64 md:h-96 -rotate-6">
                  <img
                    src={topStackImage}
                    alt="Vision illustration 1"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen md:h-screen md:snap-start py-16 md:py-0 bg-[#ad3724]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl text-white mb-8 md:mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-24 md:gap-y-10 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                image={member.image} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="min-h-screen md:h-screen md:snap-start py-16 md:py-0 bg-gradient-to-b from-[#ad3724] to-[#8b2f19]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl text-white mb-4 md:mb-6">Our Sponsors</h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              We're grateful to our generous sponsors who support our mission and help us serve the UNSW Muslim community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <SponsorCard
                key={index}
                name={sponsor.name}
                logo={sponsor.logo}
                description={sponsor.description}
                url={sponsor.url}
              />
            ))}
          </div>
        </div>
      </section>

      <MobileFooter />
    </div>
  );
};

export default About;