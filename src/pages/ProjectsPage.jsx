import React from 'react'
import Projects from '../components/projects';
import Footer from '../components/footer';

export default function ProjectsPage() {
  return (
    <div className='bg-gradient-to-r from-blue-200 to-green-300'>
      <Projects/>
      <Footer/>
    </div>
  )
}