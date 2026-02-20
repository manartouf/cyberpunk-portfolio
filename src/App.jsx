import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CodeSpinner from './components/CodeSpinner';
import MonitorGlitch from "./components/MonitorGlitch";
import GlitchOverlay from "./components/GlitchOverlay";
import Scanlines from "./components/Scanlines";
import './styles/layout.css';
import './styles/variables.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: false, // Allows items to "fall" back when scrolling up
      mirror: true 
    });
  }, []);

  return (
    <div className="page-container" style={{ borderLeft: '3px solid #00f7ff', backgroundColor: '#000a0d' }}>
      <Navbar />
      <Home />
      <div data-aos="fade-up"><About /></div>
      <div data-aos="fade-up"><Skills /></div>
      <div data-aos="fade-up"><Projects /></div>
      <div data-aos="fade-up"><Contact /></div>
    </div>
  );
}

export default App;