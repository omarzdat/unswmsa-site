import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Heart, Users, Globe, Flag } from 'lucide-react';

const SocialJusticePanel = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const regions = [
    {
      id: 'palestine',
      title: 'Palestine',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      brief: 'Palestine was colonised under British rule and partitioned in 1948, leading to the Nakba - the mass expulsion of over 750,000 Palestinians.',
      current: 'Since October 2023, Israel\'s actions in Gaza have resulted in approximately 50,000 deaths. The ICJ has warned of plausible genocide yet insufficient international action has been taken.',
      actions: [
        'Support the BDS Movement - Boycott companies like McDonald\'s, Starbucks, Coca Cola',
        'Join campus campaigns for divestment and boycott of Israeli goods/companies',
        'Educate your colleagues and classmates about the ongoing situation'
      ],
      verse: '"And do not incline toward those who do wrong, lest you be touched by the Fire..." — Surah Hud 11:113'
    },
    {
      id: 'kashmir',
      title: 'Kashmir',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      brief: 'Kashmir has been disputed since the 1947 partition of India and Pakistan. Its Muslim-majority population has long called for self-determination.',
      current: 'In 2019, India revoked Article 370, removing Kashmir\'s semi-autonomy. This was followed by lockdowns, internet blackouts, mass arrests, and silencing of protests.',
      actions: [
        'Support the Stand With Kashmir Initiative',
        'Challenge media silence and hold politicians accountable',
        'Raise awareness in classrooms and public forums despite potential backlash'
      ],
      verse: '"Whoever relieves a hardship from a believer, Allah will relieve one of his hardships on the Day of Judgment..." — Prophet Muhammad ﷺ (Sahih Muslim)'
    },
    {
      id: 'rohingya',
      title: 'Rohingya Muslims',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      brief: 'The Rohingya are an ethnic Muslim minority in Myanmar\'s Rakhine State, denied citizenship since 1982 and subjected to persecution and statelessness.',
      current: 'Since 2017\'s military crackdown, over 1 million Rohingya live in overcrowded refugee camps in Bangladesh. Recent political changes offer hope but challenges persist.',
      actions: [
        'Support Human Rights Watch Rohingya Projects',
        'Host screenings, fundraisers, and awareness talks',
        'Advocate for Australia to support ICJ genocide cases and hold Myanmar/Bangladesh accountable'
      ],
      verse: '"Whoever saves a life, it is as if he had saved mankind entirely." — Surah Al-Ma\'idah 5:32'
    },
    {
      id: 'uyghur',
      title: 'Uyghur Muslims',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      brief: 'Uyghur Muslims are a Turkic ethnic group in China\'s Xinjiang region. Since 2014, China has escalated campaigns of forced assimilation under counter-terrorism pretexts.',
      current: 'Over 1 million Uyghurs detained in "re-education" camps. Reports include torture, forced labor, sexual abuse, mass surveillance, and systematic erasure of Islamic culture.',
      actions: [
        'Support Campaign for Uyghurs and Uyghur Human Rights Project',
        'Petition Australia to ban goods linked to Uyghur forced labor',
        'Advocate for universities to address Chinese persecution without fear of influence'
      ],
      verse: '"Indeed, those who persecute the believing men and believing women... will have the punishment of Hell..." — Surah Al-Buruj 85:10'
    },
    {
      id: 'sudan',
      title: 'Sudan',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      brief: 'Sudan has experienced decades of conflict rooted in colonial legacies and authoritarian rule. The 2019 revolution brought hope for democracy.',
      current: 'Since April 2023, brutal civil war between SAF and RSF has killed over 20,000 civilians, displaced 10+ million people - the world\'s largest displacement crisis.',
      actions: [
        'Support Emergency Relief by Sudanese American Physicians Association (SAPA)',
        'Follow @EyesOnSudan for updates and advocacy opportunities',
        'Email your local MP urging Australia to push for humanitarian ceasefire'
      ],
      verse: '"The example of the believers in their mutual love, mercy, and compassion is that of a body: when any limb aches, the whole body reacts..." — Prophet Muhammad ﷺ'
    }
  ];

  const AccordionItem = ({ title, children, isActive, onClick }) => (
    <div className="border border-white/20 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5">
      <button
        onClick={onClick}
        className="w-full px-4 py-3 text-left flex items-center justify-between text-white hover:bg-white/10 transition-colors"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isActive ? 'rotate-180' : ''}`} />
      </button>
      {isActive && (
        <div className="px-4 pb-4 text-white/90 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#961a1e] to-[#ad3724] overflow-x-hidden">


      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
            Social Justice Panel
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <p className="text-white/90 text-lg italic mb-2">
              "Indeed, Allah commands justice and good conduct..."
            </p>
            <p className="text-white/80 text-sm">— Surah An-Nahl 16:90</p>
          </div>
          <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed">
            This panel brings to light major injustices currently faced by Muslim communities across the globe, 
            facing systematic oppression, displacement, and violence. Our first act is by the hand, and if not then by the tongue, 
            and if not then by the heart – we must never stay silent in the face of injustice.
          </p>
        </div>

        {/* Interactive Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regions.map((region, index) => (
            <div
              key={region.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 h-64 ${
                hoveredCard === region.id ? 'scale-105 shadow-2xl' : 'shadow-lg hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(region.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveSection(activeSection === region.id ? null : region.id)}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${region.image})` }}
              ></div>
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
              
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{region.title}</h3>
                <p className="text-white/90 text-sm mb-4 line-clamp-3">
                  {region.brief}
                </p>
                <div className="flex items-center text-white/80 text-xs">
                  <span>Click to learn more</span>
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${
                    activeSection === region.id ? 'rotate-180' : ''
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Section */}
        {activeSection && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-white/20 max-w-4xl mx-auto">
            {(() => {
              const activeRegion = regions.find(r => r.id === activeSection);
              return (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white">{activeRegion.title}</h2>
                  </div>

                  <div className="space-y-8 max-w-3xl mx-auto px-8 md:px-16">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Brief History</h3>
                      <p className="text-white/90 leading-relaxed">
                        {activeRegion.brief}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Current Situation</h3>
                      <p className="text-white/90 leading-relaxed">
                        {activeRegion.current}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Actionable Steps</h3>
                      <ul className="space-y-3 mb-6">
                        {activeRegion.actions.map((action, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-white/90">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-white/50">
                      <p className="text-white/90 italic text-sm leading-relaxed">
                        {activeRegion.verse}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Quote Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
          <div className="text-center">
            <p className="text-white/90 text-lg italic mb-2">
              "And what is [the matter] with you that you fight not in the cause of Allah and [for] the oppressed...?"
            </p>
            <p className="text-white/80 text-sm">— Surah An-Nisa 4:75</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-white/80 mb-2">UNSW Muslim Students Association</p>
          <p className="text-white/60 text-sm">Standing for justice, unity, and community</p>
        </div>
      </div>
    </div>
  );
};

export default SocialJusticePanel;