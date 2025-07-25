import React, { useState } from 'react';
import { projectsData } from './projectsData';
import '../css/projects.css'; // Import updated CSS file

// Optional: Import icons (e.g., using react-icons)
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (imageName) => {
    setExpandedImage(imageName);
  };

  const handleCloseClick = (e) => {
    // Prevent closing if clicking on the image itself within the modal
    if (e.target === e.currentTarget) {
       setExpandedImage(null);
    }
  };

  // Function to stop modal close when clicking the modal content (image)
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  }

  // MOSS project data
  const mossProject = {
    id: 'moss-solar-system',
    title: 'Model of the Solar System (MOSS)',
    description: 'A 3D solar system simulation built with Flask and React.js that models planetary orbits using real-time physics calculations. Features interactive controls, Newtonian mechanics, and real-world astronomical data from JPL.',
    imageName: 'MOSS1.png', // Updated to match your actual image file name
    technologies: ['Python', 'Flask', 'React.js', 'Three.js', 'Flask-SocketIO', 'WebSockets', 'Skyfield', 'JPL Horizons API', 'N-Body Simulation', 'Velocity Verlet Integration'],
    githubUrl: 'https://github.com/miracleman14/Model-of-the-Solar-System-MOSS-',
    liveUrl: null // Add this if you have a live demo deployed
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {/* MOSS Project Card */}
        <div className="project-card" key={mossProject.id}>
          <div className="project-image-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/${mossProject.imageName}`}
              alt={`${mossProject.title} screenshot`}
              className="project-image"
              onClick={() => handleImageClick(mossProject.imageName)}
              loading="lazy" // Add lazy loading for images
            />
            <div className="project-image-overlay" onClick={() => handleImageClick(mossProject.imageName)}>
               View Larger
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">{mossProject.title}</h3>
            <p className="project-description">{mossProject.description}</p>

            {mossProject.technologies && mossProject.technologies.length > 0 && (
              <div className="project-technologies">
                <h4 className="tech-title">Technologies Used:</h4>
                <div className="tech-tags">
                  {mossProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="project-links">
              {mossProject.githubUrl && (
                <a
                  href={mossProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                  aria-label={`View source code for ${mossProject.title} on GitHub`}
                >
                  {/* Optional: <FaGithub /> */} GitHub
                </a>
              )}
              {mossProject.liveUrl && (
                <a
                  href={mossProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                   aria-label={`View live demo for ${mossProject.title}`}
               >
                  {/* Optional: <FaExternalLinkAlt /> */} Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Existing projects from projectsData */}
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image-container">
              <img
                src={`${process.env.PUBLIC_URL}/img/${project.imageName}`}
                alt={`${project.title} screenshot`}
                className="project-image"
                onClick={() => handleImageClick(project.imageName)}
                loading="lazy" // Add lazy loading for images
              />
              <div className="project-image-overlay" onClick={() => handleImageClick(project.imageName)}>
                 View Larger
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="project-technologies">
                  <h4 className="tech-title">Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                    aria-label={`View source code for ${project.title} on GitHub`}
                  >
                    {/* Optional: <FaGithub /> */} GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                     aria-label={`View live demo for ${project.title}`}
                 >
                    {/* Optional: <FaExternalLinkAlt /> */} Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Improved Modal */}
      {expandedImage && (
        <div className="modal-backdrop" onClick={handleCloseClick}>
           <div className="modal-content-wrapper" onClick={handleModalContentClick}>
              <button className="modal-close-button" onClick={() => setExpandedImage(null)} aria-label="Close image viewer">
                 ×
               </button>
              <img
                src={`${process.env.PUBLIC_URL}/img/${expandedImage}`}
                alt="Expanded project"
                className="modal-image"
              />
           </div>
        </div>
      )}
    </section>
  );
}

export default Projects;