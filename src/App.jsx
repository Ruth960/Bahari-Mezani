import React from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import './App.css'
import './layout.css'

function App() {
  const links = [
    { path: '#home', text: 'Home' },
    { path: '#about', text: 'About Us' },
    { path: '#products', text: 'Products' },
    { path: '#initiatives', text: 'Sustainable Initiatives' },
    { path: '#contacts', text: 'Contacts' },
  ];

  return (
    <div className="font-adobe">
      <Navbar title='Bahari Mezani' links={links} />
      <HomePage />
    </div>
  )
}

export default App
