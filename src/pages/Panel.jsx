import React, { useState, Fragment } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const SocialJusticePanel = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Hide navbar and footer on this page
  React.useEffect(() => {
    // Hide navbar/header elements
    const navbar = document.querySelector('nav');
    const header = document.querySelector('header');
    const navbars = document.querySelectorAll('nav, header, [class*="nav"], [class*="header"], [id*="nav"], [id*="header"]');
    
    navbars.forEach(el => {
      if (el) el.style.display = 'none';
    });

    // Hide footer elements
    const footer = document.querySelector('footer');
    const footers = document.querySelectorAll('footer, [class*="footer"], [id*="footer"]');
    
    footers.forEach(el => {
      if (el) el.style.display = 'none';
    });
    
    // Cleanup: restore elements when component unmounts
    return () => {
      navbars.forEach(el => {
        if (el) el.style.display = '';
      });
      footers.forEach(el => {
        if (el) el.style.display = '';
      });
    };
  }, []);

  const generatePDF = () => {
    // Create a new window for PDF generation
    const printWindow = window.open('', '_blank');
    
    // Generate complete HTML content for PDF
    const pdfHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Social Justice Panel - Complete Guide</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
        
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: white;
        }
        
        h1, h2, h3 {
            font-family: 'Playfair Display', serif;
            color: #961a1e;
        }
        
        h1 {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 10px;
            border-bottom: 3px solid #961a1e;
            padding-bottom: 10px;
        }
        
        h2 {
            font-size: 1.8em;
            margin-top: 30px;
            margin-bottom: 15px;
            page-break-before: auto;
        }
        
        h3 {
            font-size: 1.3em;
            margin-top: 25px;
            margin-bottom: 10px;
            color: #ad3724;
        }
        
        .subtitle {
            text-align: center;
            font-style: italic;
            color: #666;
            margin-bottom: 30px;
        }
        
        .verse {
            background: #f8f8f8;
            padding: 15px;
            margin: 20px 0;
            border-left: 4px solid #961a1e;
            font-style: italic;
        }
        
        .arabic {
            direction: rtl;
            font-size: 1.1em;
            line-height: 1.8;
            margin-bottom: 10px;
            text-align: center;
        }
        
        .english {
            text-align: center;
            margin-bottom: 5px;
        }
        
        .reference {
            text-align: center;
            font-size: 0.9em;
            color: #666;
        }
        
        .intro {
            background: #f0f0f0;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
        }
        
        .region {
            margin: 30px 0;
            page-break-inside: avoid;
        }
        
        .region-title {
            background: #961a1e;
            color: white;
            padding: 10px 20px;
            margin: 20px 0 15px 0;
            border-radius: 5px;
        }
        
        .actions {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        
        .actions ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        
        .actions li {
            margin: 8px 0;
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #961a1e;
            color: #666;
        }
        
        @media print {
            body { margin: 0; }
            .region { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <h1>Social Justice Panel</h1>
    <div class="subtitle">UNSW Muslim Students Association</div>
    
    <div class="verse">
        <div class="arabic">إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ وَيَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ وَالْبَغْيِ ۚ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ</div>
        <div class="english">"Indeed, Allah orders justice and good conduct and giving [help] to relatives and forbids immorality and bad conduct and oppression. He admonishes you that perhaps you will be reminded."</div>
        <div class="reference">— Surah An-Nahl 16:90</div>
    </div>
    
    <div class="intro">
        <p>This panel brings to light major injustices currently faced by Muslim communities across the globe, facing systematic oppression, displacement, and violence. Our first act is by the hand, and if not then by the tongue, and if not then by the heart – we must never stay silent in the face of injustice.</p>
    </div>
    
    <div class="verse">
        <div class="arabic">وَمَا لَكُمْ لَا تُقَاتِلُونَ فِي سَبِيلِ اللَّهِ وَالْمُسْتَضْعَفِينَ مِنَ الرِّجَالِ وَالنِّسَاءِ وَالْوِلْدَانِ الَّذِينَ يَقُولُونَ رَبَّنَا أَخْرِجْنَا مِنْ هَٰذِهِ الْقَرْيَةِ الظَّالِمِ أَهْلُهَا وَاجْعَل لَّنَا مِن لَّدُنكَ وَلِيًّا وَاجْعَل لَّنَا مِن لَّدُنكَ نَصِيرًا</div>
        <div class="english">"And what is [the matter] with you that you fight not in the cause of Allah and [for] the oppressed among men, women, and children who say, 'Our Lord, take us out of this city of oppressive people and appoint for us from Yourself a protector and appoint for us from Yourself a helper'?"</div>
        <div class="reference">— Surah An-Nisa 4:75</div>
    </div>

    ${regions.map(region => `
    <div class="region">
        <div class="region-title">
            <h2>${region.title}</h2>
        </div>
        
        <h3>Brief History</h3>
        <p>${region.brief}</p>
        
        <h3>Current Situation</h3>
        <p>${region.current}</p>
        
        <div class="actions">
            <h3>Actionable Steps</h3>
            <ul>
                ${region.actions.map(action => `<li>${action}</li>`).join('')}
            </ul>
        </div>
        
        <div class="verse">
            <div class="arabic">${region.verse.split('\n')[0]}</div>
            <div class="english">${region.verse.split('\n')[1]}</div>
        </div>
    </div>
    `).join('')}
    
    <div class="footer">
        <p><strong>UNSW Muslim Students Association</strong></p>
        <p>Standing for justice, unity, and community</p>
        <p>Generated on: ${new Date().toLocaleDateString()}</p>
        <p>For more information, visit: unswmsa.org</p>
    </div>
</body>
</html>
    `;
    
    // Write content to new window
    printWindow.document.open();
    printWindow.document.write(pdfHTML);
    printWindow.document.close();
    
    // Trigger print dialog after content loads
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 500);
    };
  };

  const regions = [
    {
      id: 'palestine',
      title: 'Palestine',
      image: '/assets/countries/palestine.webp',
      brief: 'Palestine was colonised under British rule and partitioned in 1948, leading to the Nakba - the mass expulsion of over 750,000 Palestinians. Israel continues to occupy and annex Palestinian land, commit genocide on the Palestinian people, countless acts of war crimes and inhumane destruction of all life.',
      current: 'Since October 2023, Israel\'s genocide on Gaza has killed about 50,000 people. Entire lineages have been eradicated. The ICJ has warned of a plausible genocide yet no proper action has been taken. The international community is weak – from the Arab nations to the USA, Israel is in everyone\'s pockets. It is a bitter and sad reality we live in at the moment.',
      actions: [
        'Support: Boycotting!!! It works! Follow the BDS Movement! Boycott Maccas, Starbucks, Coca Cola and many more companies. It works – these companies feel the heat.',
        'Advocate: Join campus campaigns to end complicity (e.g. divestment, boycott of Israeli goods/companies, push unis to divest).',
        'Educate: Tell your work mates, uni mates about the genocide that is going on. Don\'t let them believe the news. Raise your voice.'
      ],
      verse: 'وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ وَمَا لَكُم مِّن دُونِ اللَّهِ مِنْ أَوْلِيَاءَ ثُمَّ لَا تُنصَرُونَ\n"And do not incline toward those who do wrong, lest you be touched by the Fire, and you would not have other than Allah any protectors; then you would not be helped." — Surah Hud 11:113'
    },
    {
      id: 'kashmir',
      title: 'Kashmir',
      image: '/assets/countries/kashmir.webp',
      brief: 'Kashmir has been disputed since the 1947 partition of India and Pakistan. A heavily militarised zone, its Muslim-majority population has long called for self-determination, resisting occupation and state violence. The fascist Indian government has constantly oppressed the Muslim people of Kashmir, imposing blockades, lockdowns and instilling hatred between the Hindu and Muslim population.',
      current: 'In 2019, India revoked Article 370, removing Kashmir\'s semi-autonomy. This meant Muslim Kashmiris lost many rights to own land and basic rights as citizens of India. This was followed by lockdowns, internet blackouts, curfews, mass arrests, and a silencing of any form of protest. Many protesters were injured, arrested and even killed. The brutalisation of military forces spearheaded by the fascist leader, Prime Minister Narendra Modi, has only been a force of destruction and degradation of the way of life for Muslim Kashmiris. Human rights groups continue to report torture, killings, and many rapes cases, yet the biased and discriminatory Indian government fails to act. There is a multitude of racism present in India at the moment, with thousands of Muslims facing persecution and abuse. Hindu extremists such as the RSS Group (one which PM Modi is part of) continue to plague the peace of India, pressing for discrimination and divide.',
      actions: [
        'Support: Stand With Kashmir Initiative',
        'Speak Out: Challenge the silence. Hold media and politicians to account. Raise your voice in classrooms and public forums. India has a strong presence in Australia – you will face backlash from Hindu extremists but stand your ground. Raise your voice for the regularly forgotten Kashmiris.'
      ],
      verse: 'مَن نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِّنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِّنْ كُرَبِ يَوْمِ الْقِيَامَةِ\n"Whoever relieves a hardship from a believer, Allah will relieve one of his hardships on the Day of Judgment..." (Abu Huraira reported that Prophet Muhammad SAW said, Sahih Muslim)'
    },
    {
      id: 'rohingya',
      title: 'Rohingya Muslims',
      image: '/assets/countries/rohingya.webp',
      brief: 'The Rohingya are an ethnic Muslim minority in Myanmar\'s Rakhine State, denied citizenship since 1982. They have long been subjected to persecution, statelessness, and exclusion. They have often been forgotten in the world and their story has not been paid attention to. They have faced persecution in their hometowns as well as in Bangladesh, where they seek refuge.',
      current: 'In 2017, the Myanmar military launched a brutal crackdown of the Rohingya population – many villages burned, hundreds of women raped, and thousands of innocent families killed. Over 1 million Rohingya people now live in overcrowded refugee camps in Bangladesh, with no clear path to safety or return. These refugee camps are not safe either – there have been reports of abuse and discrimination in these camps as well at the behest of Bangladeshi authorities. In recent times, ex-PM Sheikh Hasina of Bangladesh was involved in multiple atrocities and persecutions of Rohingya Muslims in Bangladesh. Her exile pushed by the youth of Bangladesh was a hopeful sign, however there is still a lot of silence on this issue and a lot of persecution still exists.',
      actions: [
        'Support: Human Rights Watch Rohingya Projects',
        'Raise Awareness: Host screenings, fundraisers, and talks about the genocide occurring. Get people from both Myanmar and Bangladesh to raise awareness, within communities and outside as well.',
        'Advocate: Demand Australia support the ICJ genocide case that is already in place, hold Bangladesh and Myanmar responsible, push for accountability'
      ],
      verse: 'مِنْ أَجْلِ ذَٰلِكَ كَتَبْنَا عَلَىٰ بَنِي إِسْرَائِيلَ أَنَّهُ مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا\n"Because of that, We decreed upon the Children of Israel that whoever kills a soul unless for a soul or for corruption [done] in the land - it is as if he had slain mankind entirely. And whoever saves one - it is as if he had saved mankind entirely." (Surah Al-Ma\'idah 5:32)'
    },
    {
      id: 'uyghur',
      title: 'Uyghur Muslims',
      image: '/assets/countries/uyghur.webp',
      brief: 'Uyghur Muslims are a Turkic ethnic group in China\'s Xinjiang region. Since 2014, the Chinese government has escalated a campaign of forced assimilation, under the guise of counter-terrorism. Uyghur Muslims have faced persecution for years, yet their story has been actively silenced by the Chinese government.',
      current: 'Over 1 million Uyghurs have been detained in "re-education" camps. These camps involve the removal of Islam from within Uyghur communities to try and destroy any remnants of Islamic teachings and principles in the population. Testimonies reveal there has been torture, forced labour, sexual abuse, and mass surveillance of Uyghur Muslims. Men are forced to remove their beards, women forced to marry non Muslim men and accept the rape that ensues, children brainwashed and all Islam wiped away. Mosques, cemeteries, and the Arabic language are all being slowly erased. The Athan is changed to include praise for China\'s leadership, must be in Chinese and must not resonate to classical Islamic traditions. Mosques are converted into night clubs and graves are desecrated.',
      actions: [
        'Support: Campaign for Uyghurs, Uyghur Human Rights Project',
        'Take Action: Petition for Australia to ban goods linked to Uyghur forced labour, Australia to bring up the issue of Uyghurs when visiting China for trade talks',
        'Be Ethical: Avoid brands linked to Xinjiang supply chains, push for uni to make aware of the Chinese persecution and not fear of the power of China and its influence.'
      ],
      verse: 'إِنَّ الَّذِينَ فَتَنُوا الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ ثُمَّ لَمْ يَتُوبُوا فَلَهُمْ عَذَابُ جَهَنَّمَ وَلَهُمْ عَذَابُ الْحَرِيقِ\n"Indeed, those who have tortured the believing men and believing women and then have not repented will have the punishment of Hell, and they will have the punishment of the Burning Fire." (Surah Al-Buruj 85:10)'
    },
    {
      id: 'sudan',
      title: 'Sudan', 
      image: '/assets/countries/sudan.webp',
      brief: 'Sudan has experienced decades of conflict rooted in colonial legacies, ethnic tensions, marginalisation of Muslims, and authoritarian rule. The Darfur genocide (2003-current) and the secession of South Sudan in 2011 left the country fractured. In 2019, a popular revolution ousted longtime dictator Omar al-Bashir, raising hopes for democracy and peace to the people.',
      current: 'Since April 2023, Sudan has been plunged into a brutal civil war between the Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF). Over 20k civilians have been killed, thousands more raped or tortured, and over 10 million displaced - the largest displacement crisis in the world today. Entire cities like El Geneina have been ethnically cleansed, especially targeting the Masalit people in West Darfur. Over 25 million people need humanitarian aid. Communication and internet blackouts hide atrocities. Aid is blocked or looted. The international community remains largely silent.',
      actions: [
        'Support: Emergency Relief by Sudanese American Physicians Association (SAPA)',
        'Support: Save the Children Sudan Emergency Appeal',
        'Support: @EyesOnSudan for live updates and advocacy.',
        'Speak Out: Post, write, and challenge media silence.',
        'Speak Out: Email your local MP urging Australia to push for a humanitarian ceasefire.'
      ],
      verse: 'مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ إِذَا اشْتَكَى مِنْهُ عُضْوٌ تَدَاعَى لَهُ سَائِرُ الْجَسَدِ بِالسَّهَرِ وَالْحُمَّى\n"The example of the believers in their mutual love, mercy, and compassion is that of a body: when any limb aches, the whole body reacts..." — Prophet Muhammad ﷺ, Sahih Bukhari & Muslim'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: 'linear-gradient(to bottom, #961a1e, #ad3724)' }}>
      {/* Darkening overlay for entire background */}
      <div className="fixed inset-0 bg-black opacity-40 z-0"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-8 pb-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* PDF Download Button */}
          <button
            onClick={generatePDF}
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 mb-6"
          >
            <Download className="w-4 h-4 mr-2" />
            Download as PDF
          </button>

          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
            Social Justice Panel
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <div className="text-center mb-2">
              <p className="text-white/90 text-lg italic" style={{ fontFamily: 'serif', direction: 'rtl', lineHeight: '1.8' }}>
                إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ وَيَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ وَالْبَغْيِ ۚ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ
              </p>
            </div>
            <p className="text-white/90 text-lg italic mb-2 text-center">
              "Indeed, Allah orders justice and good conduct and giving [help] to relatives and forbids immorality and bad conduct and oppression. He admonishes you that perhaps you will be reminded."
            </p>
            <p className="text-white/80 text-sm text-center">— Surah An-Nahl 16:90</p>
          </div>
          <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed">
            This panel brings to light major injustices currently faced by Muslim communities across the globe, 
            facing systematic oppression, displacement, and violence. Our first act is by the hand, and if not then by the tongue, 
            and if not then by the heart – we must never stay silent in the face of injustice.
          </p>
        </div>

        {/* Interactive Region Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-5xl mx-auto">
          {regions.map((region, index) => (
            <React.Fragment key={region.id}>
              <div
                className={`relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 h-64 w-80 ${
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

              {/* Detailed Section - appears after each card on mobile */}
              {activeSection === region.id && (
                <div className="w-full md:hidden">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-4 border border-white/20 mx-4">
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-white">{region.title}</h2>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Brief History</h3>
                          <p className="text-white/90 leading-relaxed text-sm">
                            {region.brief}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Current Situation</h3>
                          <p className="text-white/90 leading-relaxed text-sm">
                            {region.current}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Actionable Steps</h3>
                          <ul className="space-y-2 mb-4">
                            {region.actions.map((action, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <span className="text-white/90 text-sm">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white/5 rounded-lg p-3 border-l-4 border-white/50">
                          <div className="text-center mb-2">
                            <p className="text-white/90 italic text-xs" style={{ fontFamily: 'serif', direction: 'rtl', lineHeight: '1.6' }}>
                              {region.verse.split('\n')[0]}
                            </p>
                          </div>
                          <p className="text-white/90 italic text-xs leading-relaxed text-center">
                            {region.verse.split('\n')[1]}
                          </p>
                        </div>
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
          <div className="hidden md:block bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-white/20 max-w-4xl mx-auto">
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
                      <div className="text-center mb-2">
                        <p className="text-white/90 italic text-sm" style={{ fontFamily: 'serif', direction: 'rtl', lineHeight: '1.8' }}>
                          {activeRegion.verse.split('\n')[0]}
                        </p>
                      </div>
                      <p className="text-white/90 italic text-sm leading-relaxed text-center">
                        {activeRegion.verse.split('\n')[1]}
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

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <button
            onClick={() => window.open('https://unswmsa.org', '_blank')}
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 mb-2"
          >
            UNSW Muslim Students Association
          </button>
          <p className="text-white/60 text-sm">Standing for justice, unity, and community</p>
        </div>
      </div>
    </div>
  );
};

export default SocialJusticePanel;