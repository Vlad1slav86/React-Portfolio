import React from 'react';
import './Footer.css';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/Vlad1slav86" target="_blank" rel="noopener noreferrer">GitHub
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/vladislav-mladenov-037217284/" target="_blank" rel="noopener noreferrer">LinkedIn
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/mladenov.vladislav/" target="_blank" rel="noopener noreferrer">Instagram
          <i className="fab fa-instagram"></i>
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
