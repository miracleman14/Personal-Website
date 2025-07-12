import React, { useState, useEffect, useRef } from 'react';
// Use NavLink for active styling
import { NavLink, useLocation } from 'react-router-dom';
import '../css/header.css'; // Import your header styles

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null); // Ref to the header element

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu on location change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Optional: Close menu if clicking outside the header on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        if (menuOpen) {
           setMenuOpen(false);
        }
      }
    };

    if (menuOpen) {
        // Add listener only when menu is open
        document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function to remove listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]); // Re-run effect when menuOpen changes


  return (
    // Add ref for click outside detection
    <header className={`navbar ${menuOpen ? 'menu-is-open' : ''}`} ref={headerRef}>
      <div className="navbar-container"> {/* Add a container for max-width */}
        {/* Logo links to home */}
        <NavLink to="/" className="navbar-logo" aria-label="Homepage">
          Miracle
        </NavLink>

        {/* Menu Toggle Button (Accessibility Improved) */}
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu-list" // Points to the ul element
          type="button" // Explicitly set type for button
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Menu */}
        {/* Added ID for aria-controls */}
        <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
           {/* The ul now needs the ID */}
           <ul className="navbar-links" id="navbar-menu-list">
            {/* Use NavLink and provide className function for active state */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                // onClick={toggleMenu} // No longer needed here, useEffect handles it
             >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;