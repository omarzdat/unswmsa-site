// src/pages/About.jsx
import React from 'react';

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

const About = () => {
  const teamMembers = [
    { name: "Umar Khan", title: "President", image: "src/assets/profiles/umar.jpeg" },
    { name: "Afra Kamal", title: "Vice President", image: "src/assets/profiles/afra.jpg" },
    { name: "Eeman R Shah", title: "Secretary", image: "src/assets/profiles/eeman.jpg" },
    { name: "Ayman Chowdhury", title: "Treasurer", image: "src/assets/profiles/ayman.jpg" },
    { name: "Zakariya Ali Yoga", title: "Arc Delegate", image: "src/assets/profiles/zak.jpg" },
    { name: "Ryan Khan", title: "Media and Content Lead", image: "src/assets/profiles/ryan.jpg" },
    { name: "Nuzhat Anjum", title: "Media and Content Lead", image: "src/assets/profiles/nuzhat.jpg" },
    { name: "Ayishah Ahmad", title: "Media and Content Lead", image: "src/assets/profiles/ayishah.jpg" },
    { name: "AbdulRahman Tijani", title: "Brothers Dawah Lead", image: "src/assets/profiles/tijani.jpg" },
    { name: "Hawra Al Shami", title: "Sisters Dawah Lead", image: "src/assets/profiles/hawra.jpg" },
    { name: "Souad Khan", title: "Activism Lead (Accountability)", image: "src/assets/profiles/souad.jpg" },
    { name: "Rama Emad", title: "Activism Lead (Education)", image: "src/assets/profiles/rama.jpg" },
    { name: "Zaynab Alam", title: "Sisters Events Lead", image: "src/assets/profiles/zaynab.jpg" },
    { name: "Saarang Ali", title: "Brothers Events Lead", image: "src/assets/profiles/saarang.png" },
  ];

  return (
    <div className="h-screen md:snap-y md:snap-mandatory overflow-y-auto">
      {/* Who is UNSWMSA Section */}
      <section className="min-h-screen md:h-screen md:snap-start relative pt-20 pb-16 md:py-0">
        <div className="absolute inset-0">
          <img
            src="src/assets/about-hero.JPG"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#561C24] opacity-80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
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
      <section className="min-h-screen md:h-screen md:snap-start relative py-16 md:py-0 bg-gradient-to-b from-[#561C24] to-[#CD4631]">
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
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <img
                src="src/assets/about-hero.JPG"
                alt="Vision illustration"
                className="relative z-10 w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen md:h-screen md:snap-start py-16 md:py-0 bg-[#CD4631]">
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
    </div>
  );
};

export default About;