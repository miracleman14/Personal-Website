// src/components/Home.js
import React from 'react';
import './../App.css'; // Adjust path if needed, likely imports from App.css or a dedicated Home.css

function Home() {
  return (
    // Use a more descriptive class name than App-header if App.css styles other pages too
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-text">
          {/* Consider using h1 for the main page heading for SEO */} 
          <h1>Hi, my name is <span className="highlight-text">Miracle</span>.</h1>
          <p>
            I'm a 3rd year <span className="highlight-text">Computer Science MComp</span> undergraduate
            at the University of Leicester. I'm driven by a passion for technology and problem-solving,
            I'm eager to explore diverse fields of tech, from Cyber Security to Front-End Development.
            {/* Optional: Add a call to action */}
            {/* <br /> Explore my <a href="/projects" className="cta-link">projects</a> or <a href="/contact" className="cta-link">get in touch</a>! */}
          </p>
        </div>
        <div className="hero-image-container">
          <img
            // Consider optimizing the image (size, format like webp)
            src={`${process.env.PUBLIC_URL}/img/LinkedinProfile.jpg`} 
            alt="Miracle - Computer Science Student"
            className="profile-image"
            loading="lazy" // lazy loading
          />
        </div>
      </div>
    </section>
  );
}

export default Home;