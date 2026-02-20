import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  const categories = [
    { 
      cat: "Languages", 
      items: [{n: "C", l: 85}, {n: "C++", l: 80}, {n: "Python", l: 90}, {n: "Java", l: 75}] 
    },
    { 
      cat: "Web Development", 
      items: [{n: "HTML/CSS", l: 95}, {n: "JavaScript", l: 85}, {n: "React", l: 80}, {n: "Node.js", l: 70}] 
    },
    { 
      cat: "Databases", 
      items: [{n: "MySQL", l: 80}, {n: "MongoDB", l: 75}] 
    },
    { 
      cat: "Tools & Others", 
      items: [{n: "Git/GitHub", l: 90}, {n: "VS code", l: 60}] 
    }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {categories.map(c => (
          <div key={c.cat} className="skill-cat">
            <h3>{c.cat}</h3>
            {c.items.map(s => (
              <div className="skill" key={s.n}>
                <span>{s.n}</span>
                <div className="progress">
                  <div className="progress-bar" style={{width: `${s.l}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;