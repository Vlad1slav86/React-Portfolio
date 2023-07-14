import React from 'react';
import { Link, scroller } from 'react-scroll';
import './Header.css';
import './style.css';

const Header = ({ activeSection, setActiveSection }) => {
  const handleLinkClick = (section) => {
    setActiveSection(section);
    scroller.scrollTo(section, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -70,
    });
  };

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
              onClick={() => handleLinkClick('about')}
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
              onClick={() => handleLinkClick('portfolio')}
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
              onClick={() => handleLinkClick('contact')}
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
              onClick={() => handleLinkClick('resume')}
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
