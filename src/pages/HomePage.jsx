import React from 'react'
import HeroSection from '../components/HeroSection';
import RecentProjects from '../components/recentProjects';
import Feedback from '../components/Feedback'

function HomePage() {
  return (
    <div className='bg-gradient-to-r from-blue-200 to-green-300'>
      <HeroSection />
      <RecentProjects/>
      <Feedback />
    </div>
  )
}

export default HomePage
