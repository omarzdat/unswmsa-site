import React, { useState, Fragment } from 'react';
import { ChevronDown, Globe, Instagram } from 'lucide-react';

// IMPORT THE EXTERNAL FOOTER COMPONENTS
import Footer from '../components/Footer'; 
import MobileFooter from '../components/MobileFooter'; 

const VoicesOfTheUmmahPanel = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // NOTE: The previous React.useEffect hook that hid the global navbar and footer 
  // has been REMOVED to ensure they are visible on this page.

  const regions = [
    {
      id: 'rohingya',
      title: 'The Forgotten Genocide of the Rohingya',
      image: '/assets/countries/rohingya.webp',
      current: 'Systematic persecution in Myanmar, killings, mass expulsions, and denial of citizenship, has driven more than two million Rohingya from their homeland. Today, over one million refugees remain trapped in Cox\'s Bazar, Bangladesh, while hundreds of thousands more struggle in Malaysia, Indonesia, India, and beyond.\n\nThis is not a historic tragedy. It is an ongoing genocide, now entering its fifth decade. Yet despite the scale of displacement and suffering, public support remains alarmingly absent. The Rohingya crisis is rarely in the headlines. Governments slash humanitarian aid while babies are born stateless, children grow up without schools, and women endure violence in silence.\n\nIn Cox\'s Bazar, food rations have been halved, leaving families with less than the minimum needed to survive. Over 6,500 learning centres were closed in 2025 alone, stripping children of their only safe space. Girls as young as twelve, survivors of rape, are forced to give birth in overcrowded wards. Despair has pushed many youth to attempt suicide.\n\nAnd yet, Rohingya communities continue to resist erasure through women\'s centres, youth initiatives, and cultural resilience. But without urgent solidarity, these efforts cannot withstand the scale of need.',
      actions: [
        'Amplify our voices: Speak about the Rohingya genocide in your communities, classrooms, and online. Silence kills; awareness protects.',
        'Support refugee-led organisations such as Rohingya Maìyafuìnor Collaborative Network (RMCN), and humanitarian partners like MSF.',
        'Advocate for change: Call on governments to restore funding, expand education, and open resettlement pathways for Rohingya survivors.'
      ],
      additionalInfo: 'The Rohingya genocide continues because the world allows it. Together, we can break that silence.\n\nPlease reach out to the following on instagram or on their website to find out more ways to be involved:',
      contacts: [
        {
          name: 'Rohingya Maìyafuìnor Collaborative Network',
          website: 'https://women4rohingya.org/about-us/',
          instagram: 'https://www.instagram.com/rohingyawomencollaborative/?hl=en'
        }
      ]
    },
    {
      id: 'palestine',
      title: 'Palestine',
      image: '/assets/countries/palestine.webp',
      current: 'Since October 2023, Israel\'s genocide on Gaza has killed about 50,000 people. Entire lineages have been eradicated. The ICJ has warned of a plausible genocide yet no proper action has been taken. The international community is weak – from the Arab nations to the USA, Israel is in everyone\'s pockets. It is a bitter and sad reality we live in at the moment.',
      actions: [
        'Support: Boycotting!!! It works! Follow the BDS Movement! Boycott Maccas, Starbucks, Coca Cola and many more companies. It works – these companies feel the heat.',
        'Advocate: Join campus campaigns to end complicity (e.g. divestment, boycott of Israeli goods/companies, push unis to divest).',
        'Educate: Tell your work mates, uni mates about the genocide that is going on. Don\'t let them believe the news. Raise your voice.'
      ]
    },
    {
      id: 'kashmir',
      title: 'Kashmir',
      image: '/assets/countries/kashmir.webp',
      current: 'In 2019, India revoked Article 370, removing Kashmir\'s semi-autonomy. This meant Muslim Kashmiris lost many rights to own land and basic rights as citizens of India. This was followed by lockdowns, internet blackouts, curfews, mass arrests, and a silencing of any form of protest. Many protesters were injured, arrested and even killed. The brutalisation of military forces spearheaded by the fascist leader, Prime Minister Narendra Modi, has only been a force of destruction and degradation of the way of life for Muslim Kashmiris. Human rights groups continue to report torture, killings, and many rapes cases, yet the biased and discriminatory Indian government fails to act. There is a multitude of racism present in India at the moment, with thousands of Muslims facing persecution and abuse. Hindu extremists such as the RSS Group (one which PM Modi is part of) continue to plague the peace of India, pressing for discrimination and divide.',
      actions: [
        'Support: Stand With Kashmir Initiative',
        'Speak Out: Challenge the silence. Hold media and politicians to account. Raise your voice in classrooms and public forums. India has a strong presence in Australia – you will face backlash from Hindu extremists but stand your ground. Raise your voice for the regularly forgotten Kashmiris.'
      ]
    },
    {
      id: 'uyghur',
      title: 'Uyghur Muslims',
      image: '/assets/countries/uyghur.webp',
      current: 'Over 1 million Uyghurs have been detained in "re-education" camps. These camps involve the removal of Islam from within Uyghur communities to try and destroy any remnants of Islamic teachings and principles in the population. Testimonies reveal there has been torture, forced labour, sexual abuse, and mass surveillance of Uyghur Muslims. Men are forced to remove their beards, women forced to marry non Muslim men and accept the rape that ensues, children brainwashed and all Islam wiped away. Mosques, cemeteries, and the Arabic language are all being slowly erased. The Athan is changed to include praise for China\'s leadership, must be in Chinese and must not resonate to classical Islamic traditions. Mosques are converted into night clubs and graves are desecrated.',
      actions: [
        'Support: Campaign for Uyghurs, Uyghur Human Rights Project',
        'Take Action: Petition for Australia to ban goods linked to Uyghur forced labour, Australia to bring up the issue of Uyghurs when visiting China for trade talks',
        'Be Ethical: Avoid brands linked to Xinjiang supply chains, push for uni to make aware of the Chinese persecution and not fear of the power of China and its influence.'
      ]
    },
    {
      id: 'sudan',
      title: 'Sudan', 
      image: '/assets/countries/sudan.webp',
      current: 'Since April 2023, Sudan has been plunged into a brutal civil war between the Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF). Over 20k civilians have been killed, thousands more raped or tortured, and over 10 million displaced - the largest displacement crisis in the world today. Entire cities like El Geneina have been ethnically cleansed, especially targeting the Masalit people in West Darfur. Over 25 million people need humanitarian aid. Communication and internet blackouts hide atrocities. Aid is blocked or looted. The international community remains largely silent.',
      actions: [
        'Support: Emergency Relief by Sudanese American Physicians Association (SAPA)',
        'Support: Save the Children Sudan Emergency Appeal',
        'Support: @EyesOnSudan for live updates and advocacy.',
        'Speak Out: Post, write, and challenge media silence.',
        'Speak Out: Email your local MP urging Australia to push for a humanitarian ceasefire.'
      ]
    }
  ];

  return (
    // ADJUSTMENT 1: Increased pt-24 to pt-28 to ensure content clears the fixed header on all devices.
    // Also added pb-20 to ensure content clears the fixed DESKTOP footer.
    <div className="min-h-screen relative overflow-x-hidden pt-28 pb-20 md:pb-32" style={{ background: 'linear-gradient(to bottom, #961a1e, #ad3724)' }}>
      {/* Darkening overlay for entire background */}
      <div className="fixed inset-0 bg-black opacity-40 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4"> 
        {/* Header content moved up due to Navbar removal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
            Voices of the Ummah
          </h1>
          <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed">
            Voices of the Ummah is a continuing initiative that amplifies the lived realities of Muslim communities across the globe. 
            Through stories, reflections, and testimonies, we bring to light the injustices of oppression, displacement, and violence that often go unheard. 
            By giving a platform to these voices, we affirm that our responsibility is not only to listen but to act, 
            never staying silent in the face of injustice, wherever it occurs.
          </p>
        </div>

        {/* Interactive Region Cards - All in one row */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 mb-12 overflow-x-auto">
          {regions.map((region, index) => (
            <React.Fragment key={region.id}>
              <div
                className={`relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 h-64 w-56 flex-shrink-0 ${
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
                  <h3 className="text-lg font-bold text-white mb-4">{region.title}</h3>
                  <div className="flex items-center text-white/80 text-xs">
                    <span>Click to learn more</span>
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${
                      activeSection === region.id ? 'rotate-180' : ''
                    }`} />
                  </div>
                </div>
              </div>

              {/* Detailed Section - appears after each card on mobile */}
              {activeSection === region.id && (
                <div className="w-full lg:hidden">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-4 border border-white/20 mx-4">
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-white">{region.title}</h2>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Current Situation</h3>
                          <p className="text-white/90 leading-relaxed text-sm whitespace-pre-wrap">
                            {region.current}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">What You Can Do</h3>
                          <ul className="space-y-2 mb-4">
                            {region.actions.map((action, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <span className="text-white/90 text-sm">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {region.additionalInfo && (
                          <div>
                            <p className="text-white/90 text-sm whitespace-pre-wrap">
                              {region.additionalInfo}
                            </p>
                            {region.contacts && (
                              <div className="mt-4 space-y-3">
                                {region.contacts.map((contact, idx) => (
                                  <div key={idx} className="flex items-center gap-4">
                                    <span className="text-white/90 text-sm font-medium">{contact.name}:</span>
                                    <div className="flex gap-3">
                                      <a
                                        href={contact.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/80 hover:text-white transition-colors"
                                        title={`Visit ${contact.name} website`}
                                      >
                                        <Globe className="w-5 h-5" />
                                      </a>
                                      <a
                                        href={contact.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/80 hover:text-white transition-colors"
                                        title={`Visit ${contact.name} Instagram`}
                                      >
                                        <Instagram className="w-5 h-5" />
                                      </a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Detailed Section - Desktop only */}
        {activeSection && (
          <div className="hidden lg:block bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-white/20 max-w-4xl mx-auto">
            {(() => {
              const activeRegion = regions.find(r => r.id === activeSection);
              return (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white">{activeRegion.title}</h2>
                  </div>

                  <div className="space-y-8 max-w-3xl mx-auto px-8 md:px-16">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Current Situation</h3>
                      <p className="text-white/90 leading-relaxed whitespace-pre-wrap">
                        {activeRegion.current}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">What You Can Do</h3>
                      <ul className="space-y-3 mb-6">
                        {activeRegion.actions.map((action, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-white/90">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {activeRegion.additionalInfo && (
                      <div>
                        <p className="text-white/90 whitespace-pre-wrap">
                          {activeRegion.additionalInfo}
                        </p>
                        {activeRegion.contacts && (
                          <div className="mt-4 space-y-3">
                            {activeRegion.contacts.map((contact, idx) => (
                              <div key={idx} className="flex items-center gap-4">
                                <span className="text-white/90 font-medium">{contact.name}:</span>
                                <div className="flex gap-3">
                                  <a
                                    href={contact.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-white transition-colors"
                                    title={`Visit ${contact.name} website`}
                                  >
                                    <Globe className="w-5 h-5" />
                                  </a>
                                  <a
                                    href={contact.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-white transition-colors"
                                    title={`Visit ${contact.name} Instagram`}
                                  >
                                    <Instagram className="w-5 h-5" />
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Quote Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
          <div className="text-center">
            <div className="mb-2">
              <p className="text-white/90 text-lg italic" style={{ fontFamily: 'serif', direction: 'rtl', lineHeight: '1.8' }}>
                وَمَا لَكُمْ لَا تُقَاتِلُونَ فِي سَبِيلِ اللَّهِ وَالْمُسْتَضْعَفِينَ مِنَ الرِّجَالِ وَالنِّسَاءِ وَالْوِلْدَانِ الَّذِينَ يَقُولُونَ رَبَّنَا أَخْرِجْنَا مِنْ هَٰذِهِ الْقَرْيَةِ الظَّالِمِ أَهْلُهَا وَاجْعَل لَّنَا مِن لَّدُنكَ وَلِيًّا وَاجْعَل لَّنَا مِن لَّدُنكَ نَصِيرًا
              </p>
            </div>
            <p className="text-white/90 text-lg italic mb-2">
              "And what is [the matter] with you that you fight not in the cause of Allah and [for] the oppressed among men, women, and children who say, 'Our Lord, take us out of this city of oppressive people and appoint for us from Yourself a protector and appoint for us from Yourself a helper'?"
            </p>
            <p className="text-white/80 text-sm">— Surah An-Nisa 4:75</p>
          </div>
        </div>
      </div>

      {/* ADJUSTMENT 2: INTEGRATE FOOTER COMPONENTS AT THE END OF THE PAGE */}
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default VoicesOfTheUmmahPanel;