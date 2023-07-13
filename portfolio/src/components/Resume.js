import React from 'react';
import './Resume.css';

const Resume = () => {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB'];

  return (
    <section id="resume">
      <h2>Resume</h2>
      <div>
        <h3>Download Resume</h3>
        <a href="/path/to/resume.pdf" download>Download PDF</a>
      </div>
      <div>
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
