import React from 'react';
import './Footer.css';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/Vlad1slav86" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
