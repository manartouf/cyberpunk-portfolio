import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import "../styles/home.css";

const Home = () => {
  const [showSystem, setShowSystem] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const systemTimer = setTimeout(() => {
      setShowSystem(true);
    }, 1500);

    const loadTimer = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(systemTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <section id="home" className={loaded ? "loaded" : ""}>
      {/* Background Elements - Fixed Positioning */}
      <div className="grid"></div>
      <div className="scanline"></div>

      {/* CORNER NAME TAG */}
      <div className="corner-tag">
        <span className="tag-prefix">UPLINK:</span> MANAR_SYSTEM // v.2026
      </div>

      {/* SYSTEM TEXT */}
      {showSystem && (
        <div className="system-text">
          <span className="blink">&gt;</span> System: Portfolio [Connected]
        </div>
      )}

      {/* HUD */}
      <div className="hud-wrapper">
        <div className="hud-center">
          <svg className="rings-svg" viewBox="0 0 500 500">
            <circle className="ring-track" cx="250" cy="250" r="240" />
            <circle className="ring-segment s1" cx="250" cy="250" r="240" />
            <circle className="ring-segment s2" cx="250" cy="250" r="200" />
            <circle className="ring-segment s3" cx="250" cy="250" r="160" />
          </svg>

          <div className="data-core">
            <h1 className="glow-text">MANAR</h1>
            <div className="status-bar">
              <div className="fill"></div>
            </div>
            <p className="meta">SYSTEM_LOG // ONLINE</p>
          </div>
        </div>
      </div>

      {/* LEFT CONTENT */}
      {loaded && (
        <div className="intro-text">
          <h1 className="stable-name">Hi, I'm Manar</h1>
          <div className="typed-box">
            <ReactTyped
              strings={[
                ">_ Passionate Computer Science Student",
                ">_ Aspiring Full Stack Developer",
                ">_ Problem Solver"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;