
import React from 'react';
import { KnowledgeIcon, CompassionIcon, IntegrityIcon, ScholarshipIcon, CommunityIcon, ServiceIcon } from './icons/Icons';

const About: React.FC = () => {
  const values = [
    { icon: <KnowledgeIcon className="w-12 h-12 text-emerald-green" />, title: 'Knowledge', description: 'Pursuing authentic Islamic knowledge rooted in tradition.' },
    { icon: <CompassionIcon className="w-12 h-12 text-emerald-green" />, title: 'Compassion', description: 'Fostering a spirit of mercy and empathy in all actions.' },
    { icon: <IntegrityIcon className="w-12 h-12 text-emerald-green" />, title: 'Integrity', description: 'Upholding principles of honesty and sincerity.' },
  ];
  
  const missionCards = [
    { icon: <ScholarshipIcon className="w-16 h-16 text-gold-accent" />, title: 'Authentic Scholarship', description: 'Connecting you with qualified scholars and a rich heritage of Islamic learning.' },
    { icon: <CommunityIcon className="w-16 h-16 text-gold-accent" />, title: 'Global Community', description: 'Building bonds of faith and support among Muslims worldwide.' },
    { icon: <ServiceIcon className="w-16 h-16 text-gold-accent" />, title: 'Dedicated Service', description: 'Serving the Ummah by making sacred knowledge accessible to all.' },
  ];

  const timelineEvents = [
    { year: '2010', event: 'Foundation', description: 'Established with a vision to revive traditional Islamic learning.' },
    { year: '2015', event: 'Global Reach', description: 'Expanded online programs, reaching students in over 100 countries.' },
    { year: '2020', event: 'Curriculum Milestone', description: 'Launched the comprehensive five-step structured curriculum roadmap.' },
    { year: '2024', event: 'Community Impact', description: 'Surpassed 100,000 students and supported over 600 mosques globally.' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight-blue">Our Vision & Mission</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We are dedicated to providing accessible, authentic, and transformative Islamic education to empower individuals and strengthen communities.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {missionCards.map((card, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-midnight-blue mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="relative mt-12">
            <div className="absolute left-1/2 w-1 bg-emerald-green h-full transform -translate-x-1/2"></div>
            {timelineEvents.map((item, index) => (
                <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-5/12"></div>
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-gold-accent rounded-full shadow-lg">
                        <span className="text-white font-bold">{item.year}</span>
                    </div>
                    <div className={`w-5/12 p-6 bg-white rounded-lg shadow-xl ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <h4 className="font-bold text-xl text-midnight-blue">{item.event}</h4>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-3xl font-serif font-bold text-midnight-blue mb-8">Our Core Values</h3>
            <div className="flex flex-wrap justify-center gap-12">
                {values.map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {value.icon}
                        <span className="mt-2 text-xl font-semibold text-gray-700">{value.title}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
