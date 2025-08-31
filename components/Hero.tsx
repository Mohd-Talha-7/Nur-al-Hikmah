
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/Icons';

const slides = [
  {
    image: 'https://picsum.photos/1920/1080?random=1',
    headline: 'Empower Your Faith: Tradition, Quranic Insight, Structured Learning.',
    subheading: 'Join a global community across 200+ countries.',
  },
  {
    image: 'https://picsum.photos/1920/1080?random=2',
    headline: 'Discover the Depths of the Quranic Message.',
    subheading: 'Linguistic analysis that brings the text to life.',
  },
  {
    image: 'https://picsum.photos/1920/1080?random=3',
    headline: 'A Path of Knowledge for Every Seeker.',
    subheading: 'From foundational essentials to advanced specialization.',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="home" className="relative h-screen bg-midnight-blue text-white overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt="Mosque Architecture" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
        </div>
      ))}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl">
           <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight mb-4 animate-[fade-in-up_1s_ease-out]">
            {slides[currentSlide].headline}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 animate-[fade-in-up_1s_ease-out_0.3s]">
            {slides[currentSlide].subheading}
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-[fade-in-up_1s_ease-out_0.6s]">
            <button className="bg-emerald-green text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-500 transition duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-gold-accent text-gold-accent font-bold py-3 px-8 rounded-full hover:bg-gold-accent hover:text-midnight-blue transition duration-300 transform hover:scale-105">
              Explore Curriculum
            </button>
          </div>
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
      
      {/* Quran Recitation Placeholder */}
      <div className="absolute bottom-4 left-4 z-20">
        <audio controls className="w-64 h-10" style={{'filter': 'invert(1)'}}>
            {/* The browser will display its own controls */}
            <source src="#" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
};

export default Hero;
