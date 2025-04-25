import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navbarStyle = {
    backgroundColor: "white",
    padding: "2rem",
    color: "black",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#003366",
  };

  const desktopNavStyle = {
    display: "none",
    "@media (min-width: 768px)": { 
      display: "flex",
      gap: "1.5rem", 
    },
  };

  const mobileMenuIconStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
    "@media (min-width: 768px)": { 
      display: "none",
    },
  };

  const mobileNavStyle = {
    display: menuOpen ? "block" : "none",
    marginTop: "2rem", 
    paddingLeft: "1rem", 
    gap: "1rem", 
    flexDirection: "column",
    "@media (min-width: 768px)": {
      display: "none",
    },
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease",
    display: "block",
  };

  const linkHoverStyle = {
    color: "#FFC107",
  };

  const navLinks = (isMobile = false) => (
    <>
      <li style={{ marginBottom: isMobile ? "0.5rem" : "0" }}>
        <Link to="/" style={{ ...linkStyle, ":hover": linkHoverStyle }}>
          Home
        </Link>
      </li>

      <li style={{ marginBottom: isMobile ? "0.5rem" : "0" }}>
        <Link to="/about" style={{ ...linkStyle, ":hover": linkHoverStyle }}>
          About Us
        </Link>
      </li>

      <li style={{ marginBottom: isMobile ? "0.5rem" : "0" }}>
        <Link to="/fish-listings" style={{ ...linkStyle, ":hover": linkHoverStyle }}>
          Services
        </Link>
      </li>

      <li style={{ marginBottom: isMobile ? "0.5rem" : "0" }}>
        <Link to="/fisherman-dashboard" style={{ ...linkStyle, ":hover": linkHoverStyle }}>
          Projects
        </Link>
      </li>

      <li style={{ marginBottom: isMobile ? "0.5rem" : "0" }}>
        <Link to="/buyer-dashboard" style={{ ...linkStyle, ":hover": linkHoverStyle }}>
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        {/* Logo / Brand */}
        <h1 style={logoStyle}>
          Bahari Mezani
        </h1>

        {/* Desktop Navigation */}
        <ul style={desktopNavStyle}>
          {navLinks()}
        </ul>

        {/* Mobile Hamburger Menu Icon */}
        <div style={mobileMenuIconStyle} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <ul style={mobileNavStyle}>
          {navLinks(true)}
        </ul>
      )}
    </nav>
  );
}