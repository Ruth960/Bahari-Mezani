import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactsPage from './pages/ContactPage' 
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar'
import './App.css'
import './layout.css'

function App() {
  const links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About Us' },
    { path: '/services', text: 'Services' },
    { path: '/projects', text: 'Projects' },
    { path: '/contacts', text: 'Contacts' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Navbar title='Bahari Mezani' links={links} />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
