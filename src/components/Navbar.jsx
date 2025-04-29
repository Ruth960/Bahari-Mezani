import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar({ links, title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        height: '100vh',
        width: '20%',
        position: 'fixed',
        top: 0,
        left: 0,
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        zIndex: 1000,
      }}
    >
      {/* Logo/Title area */}
      <div
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          fontFamily: 'sans-serif',
          marginBottom: '2rem',
        }}
        className="text-2xl font-bold cursor-pointer"
      >
        {title}
      </div>

      {/* Desktop Navigation Links */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        {links &&
          links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `px-1 py-2.5 rounded-md cursor-pointer  transition-all duration-300 w-full ${
                  isActive
                    ? 'underline text-black font-bold'
                    : 'hover:bg-opacity-10 '
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
      </div>

      {/* Mobile menu button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMenu}
          className="bg-transparent border-none cursor-pointer flex items-center justify-center"
        >
          {isMenuOpen ? (
            <X size={24} className="text-slate-700" />
          ) : (
            <Menu size={24} className="text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="
            flex flex-col p-2 animate-fadeIn
            backdrop-gray-md bg-slate-50/95
          "
        >
          {links &&
            links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `py-2 px-3 rounded-md text-center text-xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'underline text-black'
                      : 'hover:bg-opacity-10 text-slate-700 hover:bg-black'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
        </div>
      )}
    </nav>
  );
}
