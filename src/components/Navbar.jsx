import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Improved tracking using Intersection Observer
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Triggers when section hits the middle of the screen
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => handleScroll(e, 'home')}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => handleScroll(e, 'about')}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={(e) => handleScroll(e, 'skills')}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => handleScroll(e, 'projects')}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => handleScroll(e, 'contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;