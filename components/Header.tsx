
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Programs', 'Community', 'Support'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-midnight-blue shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-white">
          Nur al-Hikmah
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-white hover:text-gold-accent transition duration-300 font-medium tracking-wider">{link}</a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#support" className="bg-gold-accent text-midnight-blue font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition duration-300 transform hover:scale-105">
            Donate
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-midnight-blue bg-opacity-95 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gold-accent transition duration-300 font-medium text-lg">{link}</a>
            ))}
            <a href="#support" onClick={() => setIsMenuOpen(false)} className="bg-gold-accent text-midnight-blue font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition duration-300">
              Donate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
