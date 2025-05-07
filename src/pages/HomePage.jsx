import React from 'react'
import HeroSection from '../components/HeroSection';
import RecentProjects from '../components/recentProjects';
import Feedback from '../components/Feedback'

function HomePage() {
  return (
    <div style={{backgroundColor:'#E9D8A6'}}>
      <HeroSection />
      <RecentProjects/>
      <Feedback />
    </div>
  )
}

export default HomePage
