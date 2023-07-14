import React from 'react';
import './About.css';
import './style.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-content">
        <div className="about-image">
          <img src="./images/Profile.jpg" alt="Developer" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Vlad! I'm a passionate web developer with a strong interest in front-end development. I have experience working with HTML, CSS, JavaScript, and various front-end frameworks like React.
          </p>
          <p>
            I enjoy creating user-friendly and visually appealing websites that provide a great user experience. I'm constantly learning and exploring new technologies to enhance my skills and stay up-to-date with the latest trends in web development.
          </p>
          <p>
            I believe in the power of teamwork and collaboration. I have experience working in agile development environments, where I have collaborated with designers, developers, and other stakeholders to deliver successful projects.
          </p>
          <p>
            I'm excited about the opportunity to work on innovative projects and contribute my skills to create meaningful and impactful web experiences. Let's connect and discuss how we can work together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
