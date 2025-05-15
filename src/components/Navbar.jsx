import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="logo.jpeg" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">
            <span className="text-blue-500">Bahari </span>
            <span className="text-green-500">Mezani</span>
          </h1>
        </div>

        {/* Hamburger Menu */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row md:items-center md:gap-4 w-full md:w-auto`}
        >
          {links &&
            links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-lg ${
                    isActive
                      ? 'text-blue-500 underline'
                      : 'hover:text-blue-500'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
        </div>
      </div>
    </nav>
  );
}
