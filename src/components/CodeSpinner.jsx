import React, { useEffect, useState } from "react";
import "../styles/codeSpinner.css";

const CodeSpinner = () => {
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const scrollAmount = window.scrollY;

      // Keep your smooth scroll-based rotation
      setRotation(scrollAmount * 0.5);

      // Show spinner while scrolling
      setIsScrolling(true);

      // Hide after scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`code-spinner ${isScrolling ? "active" : ""}`}>
      &lt;
      <span
        className="slash"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        /
      </span>
      &gt;
    </div>
  );
};

export default CodeSpinner;
