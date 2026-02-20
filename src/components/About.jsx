import React, { useState } from 'react';
import '../styles/about.css';

// path to certificates
import certImg1 from '../assets/cert1.jpg';
import certImg2 from '../assets/cert2.jpg';
import certImg3 from '../assets/cert3.jpg';
import certImg4 from '../assets/cert4.jpg';

const About = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const certificates = [
    { title: "Intro to AI Skills", type: "Course", img: certImg1 },
    { title: "Agent X", type: "Course", img: certImg2 },
    { title: "ICT Olympiad Selection Round", type: "Competition", img: certImg3 },
    { title: "IAAC Finalist", type: "Competition", img: certImg4 },
  ];

  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-content-wrapper">
        {/* LEFT SIDE: TEXT BOX */}
        <div className="terminal-window">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
          <p>
            I am a passionate Computer Science student focused on building secure, 
            high-performance web applications. My journey involves mastering the 
            full stack while maintaining a love for low-level logic.
          </p>
        </div>

        {/* RIGHT SIDE: CERTIFICATES */}
        <div className="certificates-section">
          <h3 className="cert-subtitle">Certificates</h3>
          <div className="cert-grid">
            {certificates.map((cert, index) => (
              <div 
                className="cert-card" 
                key={index} 
                onClick={() => setSelectedImg(cert.img)}
              >
                <img src={cert.img} alt={cert.title} />
                <div className="cert-overlay">
                  <h3>{cert.title}</h3>
                  <p>{cert.type}</p>
                  <span>Click to View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POP-UP MODAL */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content">
            <span className="close-btn">&times;</span>
            <img src={selectedImg} alt="Certificate Full View" />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;