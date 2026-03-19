import React, { useEffect, useRef } from 'react';
import './../App.css';

/*  The homepage is the "title screen" of the RPG.
    - Big atmospheric intro, like a game start menu.
    - Name displayed in Cinzel (same heading font as About).
    - Subtitle typed as a "quest prompt" flavour line.
    - Portrait framed like a character select screen.
    - One clear CTA ("Begin Quest") keeps it action-oriented.
    - Floating diamond particles add subtle life without being heavy. */

function Home() {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create floating diamond particles for atmosphere
    const container = particlesRef.current;
    if (!container) return;

    const COUNT = 20;
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('span');
      p.className = 'particle';
      p.textContent = '◇';
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 12}s`;
      p.style.animationDuration = `${8 + Math.random() * 10}s`;
      p.style.fontSize = `${6 + Math.random() * 10}px`;
      p.style.opacity = `${0.08 + Math.random() * 0.15}`;
      container.appendChild(p);
    }

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* Particle layer */}
      <div className="particles" ref={particlesRef} />

      {/* Ornamental top line */}
      <div className="hero-ornament hero-ornament-top" />

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-pre">A new challenger approaches...</p>
          <h1>
            <span className="hero-name">Miracle</span>
          </h1>
          <p className="hero-class">
            Product Designer · Technical UI/UX · Software Engineer
          </p>

          <div className="hero-divider" />

          <p className="hero-desc">
            Final-year MComp Computer Science student blending a strong understanding of
            systems architecture with a passion for human-centric UI/UX design. Highly
            skilled at translating complex technical logic into intuitive, visually engaging
            digital interfaces.
          </p>

          <a href={`${process.env.PUBLIC_URL}/about`} className="hero-cta">
            <span className="cta-diamond">◆</span> Begin Quest
          </a>
        </div>

        <div className="hero-portrait-wrap">
          <div className="hero-portrait-frame">
            <img
              src={`${process.env.PUBLIC_URL}/img/LinkedinProfile.jpg`}
              alt="Miracle — Computer Science Student"
              className="hero-portrait"
              loading="lazy"
            />
          </div>
          <span className="hero-portrait-label">Lvl 22 · Leicester, UK</span>
        </div>
      </div>

      {/* Ornamental bottom line */}
      <div className="hero-ornament hero-ornament-bottom" />
    </section>
  );
}

export default Home;
