import React from 'react';
import './Portfolio.css';
import './style.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: 'images/Pear-Music.png',
      name: 'Pear Music',
      deployedUrl: 'https://vlad1slav86.github.io/Pear-Music/',
      repoUrl: 'https://github.com/Vlad1slav86/Pear-Music/',
    },
    {
      id: 2,
      image: 'images/Shape-Shift.png',
      name: 'Shape Shift',
      deployedUrl: 'https://shape-shift.herokuapp.com/',
      repoUrl: 'https://github.com/Vlad1slav86/Workout-Tracker',
    },
    {
      id: 3,
      image: 'images/Note-Taker.png',
      name: 'Note Taker',
      deployedUrl: 'https://mysterious-savannah-29869.herokuapp.com/notesLinks to an external site.',
      repoUrl: 'https://github.com/Vlad1slav86/Note-Taker',
    },
    {
      id: 4,
      image: 'images/Coding-quiz.png',
      name: 'Coding Quiz',
      deployedUrl: 'https://vlad1slav86.github.io/Coding-quiz/',
      repoUrl: 'https://github.com/Vlad1slav86/Coding-quiz/',
    },
    {
      id: 5,
      image: 'images/Planner-App.png',
      name: 'Planner App',
      deployedUrl: 'https://vlad1slav86.github.io/Planner-app/',
      repoUrl: 'https://github.com/Vlad1slav86/Planner-app/',
    },
    {
      id: 6,
      image: 'images/Weather-App.png',
      name: 'Weather App',
      deployedUrl: 'https://vlad1slav86.github.io/Weather-App/',
      repoUrl: 'https://github.com/Vlad1slav86/Weather-App/',
    },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <div className="project-title">{project.name}</div>
            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
            </a>
            <div className="project-links">
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
