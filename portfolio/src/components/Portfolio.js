import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: '/images/Pear-Music.png',
      name: 'Pear Music',
      repoUrl: 'https://vlad1slav86.github.io/Pear-Music/',
    },
    {
      id: 2,
      image: '/images/Shape-Shift.png',
      name: 'Shape Shift',
      repoUrl: 'https://github.com/Vlad1slav86/Workout-Tracker',
    },
    {
      id: 3,
      image: '/images/Note-Taker.png',
      name: 'Note Taker',
      repoUrl: 'https://github.com/Vlad1slav86/Note-Taker',
    },
    {
      id: 4,
      image: '/images/Coding-quiz.png',
      name: 'Coding Quiz',
      repoUrl: 'https://vlad1slav86.github.io/Coding-quiz/',
    },
    {
      id: 5,
      image: '/images/Planner-App.png',
      name: 'Planner App',
      repoUrl: 'https://vlad1slav86.github.io/Planner-app/',
    },
    {
      id: 6,
      image: '/images/Weather-App.png',
      name: 'Weather App',
      repoUrl: 'https://vlad1slav86.github.io/Weather-App/',
    },
    // Add more projects here...
  ];

  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.slice(0, 2).map((project) => (
          <div key={project.id} className="project project-large">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt="Project" />
              <div className="project-name">{project.name}</div>
            </a>
          </div>
        ))}
        {projects.slice(2).map((project) => (
          <div key={project.id} className="project project-small">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt="Project" />
              <div className="project-name">{project.name}</div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
