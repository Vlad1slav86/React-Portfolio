import React from 'react';
import './Portfolio.css';


const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: '/images/Pear-Music.png',
            repoUrl: 'https://github.com/Vlad1slav86/Pear-Music',
        },
        {
            id: 2,
            image: '/images/Shape-Shift.png',
            repoUrl: 'https://github.com/Vlad1slav86/Workout-Tracker',
        }, {
            id: 3,
            image: '/images/Note-Taker.png',
            repoUrl: 'https://github.com/Vlad1slav86/Note-Taker',
        }, {
            id: 4,
            image: '/images/Coding-quiz.png',
            repoUrl: 'https://github.com/Vlad1slav86/Coding-quiz',
        }, {
            id: 5,
            image: '/images/Planner-App.png',
            repoUrl: 'https://github.com/Vlad1slav86/Planner-App',
        }, {
            id: 6,
            image: '/images/Weather-App.png',
            repoUrl: 'https://github.com/Vlad1slav86/Weather-App',
        },
        // Add more projects here...
    ];

    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project) => (
                    <div key={project.id} className="project">
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt="Project" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;

