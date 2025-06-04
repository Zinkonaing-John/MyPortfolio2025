'use client';

import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const PortfolioShowcase: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />

      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioShowcase;
