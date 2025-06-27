import { useState } from 'react';

export default function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md top-0 fixed bg-white left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="logo2.png" alt="Logo" className="w-12 h-12" />
          <h1 className="text-3xl font-bold p-2">
            <span className="text-[#009dc4]">Bahari </span>
            <span className="text-[#48bf91]">Mezani</span>
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
              <a
                key={index}
                href={link.path}
                className="block px-4 py-2 text-lg hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
}
