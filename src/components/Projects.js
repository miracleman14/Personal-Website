import React, { useState } from 'react';
import { projectsData } from './projectsData';
import '../css/projects.css';

/* ─────────────────────────────────────────────
   RPG-themed Projects page — "The Armoury"

   Design decisions:
   ─────────────────────────────────────────────
   1. ARMOURY METAPHOR
      → Projects are "crafted items" in an armoury.
        Each card is an item card with rarity, stats, and lore.

   2. FILTER BAR = CLASS FILTER
      → Styled as RPG tab buttons ("All / Python / Java / …").
        Diamond marker (◆) on the active tab, gold border.
        Not a generic pill bar — angular, Cinzel font.

   3. PROJECT CARDS = ITEM CARDS
      → Image on top (like an item illustration).
        Title in Cinzel gold, description as "lore text" in muted.
        Tech tags look like item enchantments (gold-bordered chips).
        Links sit at the bottom like action buttons.

   4. MODAL = INSPECT ITEM
      → Dark overlay with gold border frame.
        "×" close button in gold, not a white circle.

   5. RARITY STRIPE
      → Each card has a subtle gold top-border, like item rarity.
        Could be extended to colour-code by category later.
   ───────────────────────────────────────────── */

function Projects() {
  const [expandedImage, setExpandedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const handleImageClick = (imageName) => {
    setExpandedImage(imageName);
  };

  const handleCloseClick = (e) => {
    if (e.target === e.currentTarget) {
      setExpandedImage(null);
    }
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  // MOSS project data
  const mossProject = {
    id: 'moss-solar-system',
    title: 'Model of the Solar System (MOSS)',
    description:
      'A 3D solar system simulation built with Flask and React.js that models planetary orbits using real-time physics calculations. Features interactive controls, Newtonian mechanics, and real-world astronomical data from JPL. Includes WebSocket communication for real-time updates.',
    imageName: 'MOSS1.png',
    technologies: [
      'Python', 'Flask', 'React.js', 'Three.js', 'Flask-SocketIO',
      'WebSockets', 'Skyfield', 'JPL Horizons API',
      'N-Body Simulation', 'Velocity Verlet Integration',
    ],
    githubUrl: 'https://github.com/miracleman14/Model-of-the-Solar-System-MOSS-',
    liveUrl: null,
    category: 'Web Development',
  };

  const allProjects = [mossProject, ...projectsData];

  const filterOptions = ['All', 'Python', 'JavaScript', 'Java', 'C#', 'Web Development'];

  const getFilteredProjects = () => {
    if (filter === 'All') return allProjects;
    if (filter === 'Python')
      return allProjects.filter((p) => p.technologies?.includes('Python'));
    if (filter === 'JavaScript')
      return allProjects.filter((p) =>
        p.technologies?.some((t) => ['JavaScript', 'React.js', 'Three.js'].includes(t))
      );
    if (filter === 'Java')
      return allProjects.filter((p) => p.technologies?.includes('Java'));
    if (filter === 'C#')
      return allProjects.filter((p) => p.technologies?.includes('C#'));
    if (filter === 'Web Development')
      return allProjects.filter((p) =>
        p.technologies?.some((t) =>
          ['HTML', 'CSS', 'JavaScript', 'React.js', 'Flask', 'Spring Boot'].includes(t)
        )
      );
    return allProjects;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="armoury-section">
      <div className="armoury-header">
        <div className="ornament-top" />
        <h2 className="rpg-heading">The Armoury</h2>
        <p className="rpg-subtext">Crafted works &amp; completed commissions</p>
      </div>

      {/* ── Filter tabs ── */}
      <div className="filter-bar">
        {filterOptions.map((option) => (
          <button
            key={option}
            className={`filter-tab ${filter === option ? 'active' : ''}`}
            onClick={() => setFilter(option)}
          >
            {filter === option && <span className="tab-diamond">◆</span>}
            {option}
          </button>
        ))}
      </div>

      {/* ── Project grid ── */}
      <div className="armoury-grid">
        {filteredProjects.map((project) => (
          <article className="item-card" key={project.id}>
            {/* Rarity stripe */}
            <div className="rarity-stripe" />

            {/* Image */}
            <div
              className="item-image-wrap"
              onClick={() => handleImageClick(project.imageName)}
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/${project.imageName}`}
                alt={`${project.title} screenshot`}
                className="item-image"
                loading="lazy"
              />
              <div className="item-image-overlay">
                <span className="inspect-label">◆ Inspect</span>
              </div>
            </div>

            {/* Content */}
            <div className="item-content">
              <h3 className="item-title">{project.title}</h3>
              <p className="item-lore">{project.description}</p>

              {/* Enchantments (tech tags) */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="enchantments">
                  <span className="enchant-label">Enchantments</span>
                  <div className="enchant-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="enchant-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action links */}
              <div className="item-actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                    aria-label={`View source code for ${project.title} on GitHub`}
                  >
                    ◇ Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link action-link--primary"
                    aria-label={`View live demo for ${project.title}`}
                  >
                    ◆ Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── Modal (Inspect Item) ── */}
      {expandedImage && (
        <div className="inspect-backdrop" onClick={handleCloseClick}>
          <div className="inspect-frame" onClick={handleModalContentClick}>
            <button
              className="inspect-close"
              onClick={() => setExpandedImage(null)}
              aria-label="Close image viewer"
            >
              ×
            </button>
            <img
              src={`${process.env.PUBLIC_URL}/img/${expandedImage}`}
              alt="Expanded project"
              className="inspect-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
