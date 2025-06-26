import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

import ProductsPage from './pages/ProductsPage'
import SustainabilityPage from './pages/SustainabiltyPage'
import ContactsPage from './pages/ContactPage' 
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar'
import './App.css'
import './layout.css'

function App() {
  const links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About Us' },
    { path: '/products', text: 'Products' },
    { path: '/initiatives', text: 'Sustainable Initiatives ' },
    { path: '/contacts', text: 'Contacts' },
    
  ];

  return (
    <div className="font-adobe">
      <Navbar title='Bahari Mezani' links={links} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/initiatives" element={<SustainabilityPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      
    </div>
  )
}

export default App
