import React from 'react'
import Navbar from '../components/Navbar'
import ContactUs  from '../components/contacts'
import Projects from '../components/projects'


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
      <Projects/>
      
    </div>
  )
}