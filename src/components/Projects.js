import React, { useState } from 'react';
import { projectsData } from './projectsData';
import '../css/projects.css'; // Import updated CSS file

// Optional: Import icons (e.g., using react-icons)
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const [expandedImage, setExpandedImage] = useState(null);
  const [filter, setFilter] = useState('All');

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
    description: 'A 3D solar system simulation built with Flask and React.js that models planetary orbits using real-time physics calculations. Features interactive controls, Newtonian mechanics, and real-world astronomical data from JPL. Includes WebSocket communication for real-time updates.',
    imageName: 'MOSS1.png', // Updated to match your actual image file name
    technologies: ['Python', 'Flask', 'React.js', 'Three.js', 'Flask-SocketIO', 'WebSockets', 'Skyfield', 'JPL Horizons API', 'N-Body Simulation', 'Velocity Verlet Integration'],
    githubUrl: 'https://github.com/miracleman14/Model-of-the-Solar-System-MOSS-',
    liveUrl: null, // Add this if you have a live demo deployed
    category: 'Web Development'
  };

  // Combine MOSS project with existing projects
  const allProjects = [mossProject, ...projectsData];

  // Get unique technologies for filter - more general categories
  const allTechnologies = [...new Set(allProjects.flatMap(project => project.technologies || []))];
  
  // Create more general filter categories based on actual technologies used
  const filterOptions = ['All', 'Python', 'JavaScript', 'Java', 'C#', 'Web Development'];
  
  // Custom filter logic for broader categories
  const getFilteredProjects = () => {
    if (filter === 'All') return allProjects;
    if (filter === 'Python') return allProjects.filter(project => 
      project.technologies && project.technologies.includes('Python')
    );
    if (filter === 'JavaScript') return allProjects.filter(project => 
      project.technologies && (
        project.technologies.includes('JavaScript') || 
        project.technologies.includes('React.js') ||
        project.technologies.includes('Three.js')
      )
    );
    if (filter === 'Java') return allProjects.filter(project => 
      project.technologies && project.technologies.includes('Java')
    );
    if (filter === 'C#') return allProjects.filter(project => 
      project.technologies && project.technologies.includes('C#')
    );
    if (filter === 'Web Development') return allProjects.filter(project => 
      project.technologies && (
        project.technologies.includes('HTML') || 
        project.technologies.includes('CSS') ||
        project.technologies.includes('JavaScript') ||
        project.technologies.includes('React.js') ||
        project.technologies.includes('Flask') ||
        project.technologies.includes('Spring Boot')
      )
    );
    return allProjects;
  };

  // Filter projects based on selected filter
  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      
      {/* Filter Buttons */}
      <div className="filter-container">
        <div className="filter-buttons">
          {filterOptions.map(option => (
            <button
              key={option}
              className={`filter-btn ${filter === option ? 'active' : ''}`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project) => (
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