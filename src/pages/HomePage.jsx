import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ImpactDiaagram from '../components/ImpactDiagram'
import Footer from '../components/Footer' 
import Featured from '../components/Featured'

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ImpactDiaagram />
      <Featured/>
      <Footer />  
    </div>
  )
}

export default HomePage
