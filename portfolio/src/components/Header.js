import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [initialLoad, setInitialLoad] = useState(true);

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    if (initialLoad) {
      setActiveSection('about');
      setInitialLoad(false);
    }
  }, [initialLoad]);

  return (
    <header>
      <h1>Vlad Mladenov</h1>
      <nav>
        <ul>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              active={activeSection === 'about'}
              onSetActive={handleSetActive}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              active={activeSection === 'portfolio'}
              onSetActive={handleSetActive}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              active={activeSection === 'contact'}
              onSetActive={handleSetActive}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              active={activeSection === 'resume'}
              onSetActive={handleSetActive}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
