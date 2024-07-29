import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import '../css/header.css'; // Import your header styles

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Close the menu when the location changes (i.e., a link is clicked)
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="navbar">
      {/* Use Link component for the logo to navigate to the home page */}
      <Link to="/" className="navbar-logo">Miracle</Link>
      
      {/* Navigation menu */}
      <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
      
      {/* Menu toggle button */}
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;
