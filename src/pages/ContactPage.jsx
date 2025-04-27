import React from 'react'
import Navbar from '../components/Navbar'
import ContactsUs from '../components/contacts'


export default function AboutPage() {
 const links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/services', text: 'Services' },
    { path: '/projects', text: 'Projects' },
    { path: '/contacts', text: 'Contacts' },
  ];

  return (
    <div>
      <Navbar 
        title='Bahari Mezani'
        links={links} 
      />
      <ContactsUs/>
      
    </div>
  )
}