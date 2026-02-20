import React, { useEffect, useState } from "react";
import "../styles/glitch.css";

const GlitchOverlay = () => {
  const [glitching, setGlitching] = useState(false);
  const [variant, setVariant] = useState(0);

  const colorVariants = [
    ["cyan", "pink", "narrow", "close"],
    ["purple", "cyan", "narrow", "close"],
    ["magenta", "aqua", "narrow", "close"],
    ["pink", "purple", "narrow", "close"],
    ["electric-blue", "electric-purple", "narrow", "close"],
    ["electric-blue", "magenta", "narrow", "close"]
  ];

  useEffect(() => {
    const triggerGlitch = () => {
      setVariant(Math.floor(Math.random() * colorVariants.length));
      setGlitching(true);
      setTimeout(() => setGlitching(false), 180);
    };

    const scheduleGlitch = () => {
      const delay = Math.random() * 10000 + 4000; // 4–14 seconds
      setTimeout(() => {
        triggerGlitch();
        scheduleGlitch();
      }, delay);
    };

    scheduleGlitch();
  }, []);

  if (!glitching) return null;

  return (
    <div className="glitch-overlay">
      <div className={`glitch-bar ${colorVariants[variant][0]}`}></div>
      <div className={`glitch-bar ${colorVariants[variant][1]}`}></div>
      <div className={`glitch-bar ${colorVariants[variant][2]}`}></div>
      <div className={`glitch-bar ${colorVariants[variant][3]}`}></div>
    </div>
  );
};

export default GlitchOverlay;
