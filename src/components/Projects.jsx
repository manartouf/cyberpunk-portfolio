import React from 'react';
import '../styles/projects.css';

// Import your actual images
import minesweeperImg from '../assets/minesweeper.png';
import emotionImg from '../assets/emotion.png';
import databaseImg from '../assets/database.png';
import portfolioImg from '../assets/portfolio.png';

const Projects = () => {

  const projects = [
    {
      title: "Minesweeper Game",
      description: "Java game for Object-Oriented Programming course",
      image: minesweeperImg,
      github: "https://github.com/manartouf"
    },
    {
      title: "Emotional Analyser AI",
      description: "AI project to detect emotions — emotion-analyser-by-zebin-n-manar",
      image: emotionImg,
      github: "https://github.com/manartouf/emotion-analyser-by-zebin-n-manar"
    },
    {
      title: "Database Management Project",
      description: "Books and Movie Recommendation System",
      image: databaseImg,
      github: "https://github.com/Sabikun-Naher-353/movie-and-book-recommender"
    },
    {
      title: "Cyberpunk Portfolio",
      description: "My personal portfolio (this website!)",
      image: portfolioImg,
      github: "https://github.com/manartouf/cyberpunk-portfolio"
    }
  ];

  return (
    <section id="projects">

      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <a
            key={index}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={p.image} alt={p.title} />

            <div className="overlay">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span>View on GitHub</span>
            </div>

          </a>
        ))}
      </div>

    </section>
  );
};

export default Projects;