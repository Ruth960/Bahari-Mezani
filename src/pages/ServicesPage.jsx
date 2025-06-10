import React from 'react'
import Services from '../components/services';
import Footer from '../components/footer';
import Consoltations from '../components/consoltations'

export default function ServicesPage() {
  return (
    <div className='bg-gradient-to-r from-blue-200 to-green-300'>
      <Services/>
      <Consoltations />
      <Footer/>
    </div>
  )
}