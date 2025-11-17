import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import BentoGridSection from './components/BentoGridSection';
import TechStackSection from './components/TechStackSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-primary-bg text-text-primary font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BentoGridSection />
        <TechStackSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;