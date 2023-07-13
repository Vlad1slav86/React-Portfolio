import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'portfolio', 'contact', 'resume'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 0;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header activeSection={activeSection} />
      <Element name="about">
        <About />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
    </div>
  );
};

export default App;
