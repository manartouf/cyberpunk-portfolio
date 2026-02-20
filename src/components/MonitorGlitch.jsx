import React, { useEffect, useState } from "react";
import "../styles/monitorGlitch.css";

const MonitorGlitch = () => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), Math.random() * 200 + 100); // short random glitch
    };

    const scheduleGlitch = () => {
      const delay = Math.random() * 5000 + 3000; // glitch every 3–8 sec
      setTimeout(() => {
        triggerGlitch();
        scheduleGlitch();
      }, delay);
    };

    scheduleGlitch();
  }, []);

  if (!glitching) return null;

  return <div className="monitor-glitch"></div>;
};

export default MonitorGlitch;
