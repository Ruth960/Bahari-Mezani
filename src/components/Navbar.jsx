
import { NavLink } from 'react-router-dom';


export default function Navbar({ links, title }) {

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
                    ? 'underline text-black'
                    : 'hover:bg-opacity-0.4 hover:underline hover:text-black'
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
      </div>
      
    </nav>
  );
}
