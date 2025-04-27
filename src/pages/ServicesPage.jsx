import React from 'react'

import Navbar from '../components/Navbar'
import Services from '../components/services'

export default function ServicesPage() {


  const links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/services', text: 'Services' },
    { path: '/projects', text: 'Projects' },
    { path: '/contacts', text: 'Contacts' },
  ];

  return (
    <div >
      <Navbar 
        title='Bahari Mezani'
        links={links} 
      />
      <Services/>
    </div>
  )
}