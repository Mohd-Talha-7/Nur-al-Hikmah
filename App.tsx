
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Multimedia from './components/Multimedia';
import Community from './components/Community';
import Impact from './components/Impact';
import Support from './components/Support';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Multimedia />
        <Community />
        <Impact />
        <Support />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
