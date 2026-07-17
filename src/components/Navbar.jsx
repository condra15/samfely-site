import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="Samfely logo" className="logo-img" />
          <span className="logo-text">Samfely</span>
        </Link>
        <button className={`navbar-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
          <span></span><span></span><span></span>
        </button>
        <div className={`navbar-links ${menuOpen ? 'show' : ''}`}>
          {links.map(link => (
            <Link key={link.to} to={link.to} className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <div className="navbar-cta-group">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqaDDM6_VE82kpKdMeB6MzzeosbjTRSxlKp6bc7NaPeMVHNg/viewform" className="navbar-cta navbar-cta-enroll" target="_blank" rel="noopener noreferrer">Enroll now</a>
            <a href="https://forms.gle/WQihAnkFv8xNRhEb7" className="navbar-cta navbar-cta-volunteer" target="_blank" rel="noopener noreferrer">Volunteer here</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
