import React from 'react'
import HeroSection from '../components/HeroSection';
import RecentProjects from '../components/recentProjects';
import Home from '../components/home';
import Footer from '../components/footer';

function HomePage() {
  return (
    <div className='bg-gradient-to-r from-blue-200 to-green-300'>
      <HeroSection />
      <Footer />
    </div>
  )
}

export default HomePage
