import React, { useState } from 'react';
import { Element, } from 'react-scroll';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <Header activeSection={activeSection} setActiveSection={handleSetActiveSection} />
      <Element name="about">
        {activeSection === 'about' && <About />}
      </Element>
      <Element name="portfolio">
        {activeSection === 'portfolio' && <Portfolio />}
      </Element>
      <Element name="contact">
        {activeSection === 'contact' && <Contact />}
      </Element>
      <Element name="resume">
        {activeSection === 'resume' && <Resume />}
      </Element>
      <Footer />
    </div>
  );
};

export default App;

