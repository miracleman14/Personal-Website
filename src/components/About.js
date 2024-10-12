import React, { useEffect } from 'react';
import '../css/about.css'; // Import external CSS file for styling

function About() {
  useEffect(() => {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to reveal images when scrolled into view
    function revealImages() {
      const images = document.querySelectorAll('.about-section .content img');
      
      images.forEach((image) => {
        if (isInViewport(image)) {
          image.classList.add('reveal');
        }
      });
    }

    // Add event listener for scrolling to reveal images
    window.addEventListener('scroll', revealImages);
    window.addEventListener('resize', revealImages);
    window.addEventListener('DOMContentLoaded', revealImages);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', revealImages);
      window.removeEventListener('resize', revealImages);
      window.removeEventListener('DOMContentLoaded', revealImages);
    };
  }, []); // Empty dependency array to run only once on component mount



  //test

  return (
    <div className="about-container">
      <section id="about" className="about-section">
        <div className="content">
          <div className="text">
            <h2>About Me<span className="bold-text">.</span></h2>
            <p>I'm a <span className="bold-text">Computer Science Student </span> and Sports enthusiast who has a strong interest in anything software development and design. I specialise in <b>problem solving</b>, and love to improve performance and usability without having to sacrifice creativity.</p>
          </div>
          <div className="other-image">
            <img
              src={`${process.env.PUBLIC_URL}/img/Leicester1.jpg`}
              alt="Leicester"
              className="other-image"
            />
          </div>
        </div>
      </section>

      <section id="background" className="about-section">
        <div className="content">
          <div className="text">
            <h2>Background.</h2>
            <p>Growing up, I originally didn't know much about programming but still tried to keep up with the latest technologies. I started off with designing websites using Google Sites and moving different tabs around eventually leading to my first 'website', <span className="bold-text">FitTech Source.</span> </p>
            <p>As I got older I started to try to learn about the coding side of things and started to familiarise myself with <span className="bold-text">HTML and CSS</span>. As I started getting more confident with this and making basic websites with CSS and HTML, I eventually started brushing up on my front end knowledge, learning Python and now in university, a multitude more including Java, C++ and Javascript</p>
            <p>Now with much more technologies and frameworks under my belt, I plan to use these to help in the real world, whether that be companies or clients from around the country.</p>
          </div>
          <div className="other-image">
            <img
              src={`${process.env.PUBLIC_URL}/img/html.jpg`}
              alt="HTML Code"
              className="other-image"
            />
          </div>
        </div>
      </section>

      <section id="interests" className="about-section">
        <div className="content">
          <div className="text">
            <h2>Interests.</h2>
            <p>Beyond my computing adventures, I have a love for gaming. I use it as a way to detox and a break from the real world, while also viewing it as an art.</p>
            <p>Away from my laptop, I am a huge basketball fan and love to keep up with my favorite team, the Milwaukee Bucks, and hope to one day see the team live.</p>
          </div>
          <div className="double-image">
            <img
              src={`${process.env.PUBLIC_URL}/img/twd1.jpg`}
              alt="Gaming"
              className="doubles-image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/img/bucks.jpg`}
              alt="Milwaukee Bucks"
              className="doubles-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
