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
        height: '100%',
        width: '20%',
        margin: 'auto',
        position: 'fixed',
      }}
    >
      {/* Logo/Title area */}
      <div
        style={{
          color: 'black',
          fontWeight: 28,
          fontSize: 'bold',
          fontFamily: 'sans-serif',
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
        }}
      >
        {links &&
          links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `px-1 py-2.5 rounded-md cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'underline text-black'
                    : 'hover:bg-opacity-10 hover:bg-black hover:text-white'
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
