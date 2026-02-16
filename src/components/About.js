import React, { useEffect } from 'react';
import '../css/about.css';

/* ─────────────────────────────────────────────
   RPG-themed About page
   
   Design decisions:
   ─────────────────────────────────────────────
   1. CHARACTER SHEET (About Me)
      → Framed like a Skyrim-style stat card: class, alignment, traits.
        Gives personality instantly instead of a wall of generic text.

   2. QUEST LOG (Background)
      → Each milestone is a "completed quest" with XP rewards.
        Turns a boring timeline into something you actually want to read.
        The ??? XP on the last quest hints at ambition — unfinished story.

   3. SKILL TREE (Skills)
      → Each skill has a level bar (out of 100) like an RPG stat screen.
        Communicates proficiency at a glance instead of a flat list.
        Grouped into "branches" (Cloud, Creative, Workflow) like skill trees.

   4. GUILD HALL (Interests)
      → Side-quest flavour. Gaming framed as "studying the craft",
        basketball as guild loyalty. Keeps the RPG metaphor consistent.

   5. WHY THIS PALETTE?
      → Dark charcoal (#1a1a2e) + warm gold (#c8a84e) = fantasy UI feel.
        Not neon, not corporate. Feels handcrafted like a game menu.
        Ornamental borders + diamond bullets add texture without images.

   6. WHY NOT A DASHBOARD?
      → Dashboards are grids of cards. This is panels with character.
        Each section has its own "frame" (ornament-top / ornament-bottom)
        like parchment edges. The vertical rhythm is intentional scroll.
   ───────────────────────────────────────────── */

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">Lvl {level}</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

function QuestItem({ title, xp, description }) {
  return (
    <div className="quest-item">
      <div className="quest-header">
        <span className="quest-marker">◆</span>
        <span className="quest-title">{title}</span>
        <span className="quest-xp">+{xp} XP</span>
      </div>
      <p className="quest-desc">{description}</p>
    </div>
  );
}

function About() {
  useEffect(() => {
    function isInViewport(el) {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Trigger when the top of the element enters the bottom 85% of the screen
      return r.top < vh * 0.85 && r.bottom > 0;
    }

    function revealElements() {
      document.querySelectorAll('.rpg-reveal').forEach((el) => {
        if (isInViewport(el)) el.classList.add('revealed');
      });
    }

    window.addEventListener('scroll', revealElements);
    window.addEventListener('resize', revealElements);
    revealElements();

    return () => {
      window.removeEventListener('scroll', revealElements);
      window.removeEventListener('resize', revealElements);
    };
  }, []);

  return (
    <div className="rpg-container">

      {/* ═══════════ CHARACTER SHEET ═══════════ */}
      <section id="about" className="rpg-section">
        <div className="rpg-panel character-sheet rpg-reveal">
          <div className="ornament-top" />
          <h2 className="rpg-heading">Character Sheet</h2>

          <div className="sheet-layout">
            <div className="sheet-info">
              <div className="stat-line">
                <span className="stat-label">Class</span>
                <span className="stat-value">Technical Artist / Cloud Engineer</span>
              </div>
              <div className="stat-line">
                <span className="stat-label">Race</span>
                <span className="stat-value">Computer Science Student</span>
              </div>
              <div className="stat-line">
                <span className="stat-label">Alignment</span>
                <span className="stat-value">Creative · Analytical · Relentless</span>
              </div>

              <div className="trait-divider" />

              <p className="sheet-flavour">
                Sports enthusiast with a strong interest in technical art, cloud,
                and game development. Specialises in <em>problem solving</em> —
                improves performance and usability without sacrificing creativity.
              </p>
            </div>

            <div className="sheet-portrait">
              <img
                src={`${process.env.PUBLIC_URL}/img/MiracleCartoon.png`}
                alt="Character Portrait"
              />
            </div>
          </div>
          <div className="ornament-bottom" />
        </div>
      </section>

      {/* ═══════════ QUEST LOG ═══════════ */}
      <section id="background" className="rpg-section">
        <div className="rpg-panel rpg-reveal">
          <div className="ornament-top" />
          <h2 className="rpg-heading">Quest Log</h2>
          <p className="rpg-subtext">Completed Quests</p>

          <div className="quest-list">
            <QuestItem
              title="The First Build"
              xp="50"
              description="Crafted a basic website with Google Sites. Curiosity unlocked."
            />
            <QuestItem
              title="The Horror Within"
              xp="300"
              description="Built a horror game in Unity for a university course project. Discovered a love for atmosphere and tension."
            />
            <QuestItem
              title="Unreal Landscapes"
              xp="250"
              description="Experimented with atmospheric scenes in Unreal Engine. Learned to shape mood through lighting and space."
            />
            <QuestItem
              title="Solar System Model"
              xp="350"
              description="Created an interactive full stack solar system . Full creative freedom — orbits, shaders, and scale."
            />
            <QuestItem
              title="The Long Road Ahead"
              xp="???"
              description="Seeking a company to apply these skills, keep levelling up, and add a creative touch to real-world work."
            />
          </div>
          <div className="ornament-bottom" />
        </div>
      </section>

      {/* ═══════════ SKILL TREE ═══════════ */}
      <section id="skills" className="rpg-section">
        <div className="rpg-panel rpg-reveal">
          <div className="ornament-top" />
          <h2 className="rpg-heading">Skill Tree</h2>
          <p className="rpg-subtext">Bridging creative ambition and technical reality.</p>

          <div className="skill-branches">
            <div className="skill-branch">
              <h3 className="branch-name">☁ Cloud &amp; Infrastructure</h3>
              <SkillBar name="Azure & DevOps" level={70} />
              <SkillBar name="Docker & Containers" level={60} />
              <SkillBar name="CI/CD Pipelines" level={55} />
              <SkillBar name="Terraform (IaC)" level={50} />
              <SkillBar name="Bash & PowerShell" level={65} />
            </div>

            <div className="skill-branch">
              <h3 className="branch-name">✦ Creative &amp; Systems</h3>
              <SkillBar name="C++ (Systems)" level={55} />
              <SkillBar name="Python (Automation)" level={85} />
              <SkillBar name="Three.js (3D Web)" level={60} />
              <SkillBar name="React.js" level={70} />
              <SkillBar name="Real-time Rendering" level={55} />
            </div>

            <div className="skill-branch">
              <h3 className="branch-name">⚙ Workflow &amp; Tools</h3>
              <SkillBar name="Git & Version Control" level={90} />
              <SkillBar name="Agile & Scrum" level={85} />
              <SkillBar name="Jira / PM" level={60} />
              <SkillBar name="SQL & Data Analysis" level={70} />
            </div>
          </div>
          <div className="ornament-bottom" />
        </div>
      </section>

      {/* ═══════════ GUILD HALL ═══════════ */}
      <section id="interests" className="rpg-section">
        <div className="rpg-panel rpg-reveal">
          <div className="ornament-top" />
          <h2 className="rpg-heading">Guild Hall</h2>
          <p className="rpg-subtext">Side quests &amp; affiliations.</p>

          <div className="guild-entries">
            <div className="guild-card rpg-reveal">
              <img
                src={`${process.env.PUBLIC_URL}/img/twd1.jpg`}
                alt="Gaming"
                className="guild-card-bg"
              />
              <div className="guild-card-overlay" />
              <div className="guild-card-content">
                <span className="guild-tag">Side Quest</span>
                <h3 className="guild-card-title">The Gamer's Guild</h3>
                <p className="guild-card-desc">
                  I don't just play to unwind, I play to understand the mix of
                  narrative, mechanics, and technical art. Constantly analysing what makes
                  an experience immersive, from UI design to rendering techniques.
                </p>
              </div>
            </div>

            <div className="guild-card rpg-reveal">
              <img
                src={`${process.env.PUBLIC_URL}/img/bucks.jpg`}
                alt="Milwaukee Bucks"
                className="guild-card-bg"
              />
              <div className="guild-card-overlay" />
              <div className="guild-card-content">
                <span className="guild-tag">Affiliation</span>
                <h3 className="guild-card-title">Milwaukee Bucks Loyal</h3>
                <p className="guild-card-desc">
                  Huge basketball fan and loyal supporter of the Milwaukee Bucks.
                  Follow the league closely and hope to catch a game at Fiserv Forum one day.
                </p>
              </div>
            </div>
          </div>
          <div className="ornament-bottom" />
        </div>
      </section>
    </div>
  );
}

export default About;
