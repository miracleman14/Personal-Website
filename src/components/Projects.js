import React, { useState } from 'react';
import '../css/projects.css'; // Import external CSS file for styling

const projectsData = [
  {
    title: 'IBM SkillsBuild Gamified Web Application',
    description: 'I was part of a group which designed a fully functional web application for IBM SkillsBuild which allowed students to access leaderboard, enroll in courses, track their progress and more. I was fully responsible for the streaks feature and an avatar customization feature where users could create their own avatars and customize the features. Some technologies used were Java, Spring Boot, JavaScript, HTML, and CSS.',
    imageName: 'avatar4 - Copy.png'
  },
  {
    title: 'FitTech Website made via Google Sites',
    description: 'This was my first actual website which I was able to create using Google Sites. I used this to write blogs about two things which I strongly enjoy, fitness and technology.',
    imageName: 'Screenshot 2024-05-15 233525.png'
  },
  {
    title: 'Cardiff Scavenger Hunt Website Prototype',
    description: 'For this project, I wanted to explore much more about the User Interface/User Experience side of front-end development and created a high-fidelity prototype for a website about scavenger hunts in Cardiff. Some key technologies I used for this were HTML, CSS, and JavaScript.',
    imageName: 'Screenshot 2024-05-08 172922 - Copy.png'
  },
  {
    title: 'Unity Horror Game "Sinclairs secrets"',
    description: 'I was able to create my own Horror Game using unity. the game is set in a abandoned asylum and the goal of the game is to escape. The main language I used to create this was C# and this did happen to be one of my most enjoyable projects.',
    imageName: 'Priest.jpg' // Change this line
  }
];

function Projects() {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (imageName) => {
    setExpandedImage(imageName);
  };

  const handleCloseClick = () => {
    setExpandedImage(null);
  };

  return (
    <section id="projects">
      <h2>Notable Projects.</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-content">
              <img
                src={`${process.env.PUBLIC_URL}/img/${project.imageName}`}
                alt={project.title}
                className="project-image"
                onClick={() => handleImageClick(project.imageName)}
              />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {expandedImage && (
        <div className="modal" onClick={handleCloseClick}>
          <span className="close" onClick={handleCloseClick}>&times;</span>
          <img
            src={`${process.env.PUBLIC_URL}/img/${expandedImage}`}
            alt="Expanded"
            className="modal-content"
          />
        </div>
      )}
    </section>
  );
}

export default Projects;
