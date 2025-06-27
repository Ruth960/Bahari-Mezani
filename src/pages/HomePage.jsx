import React from 'react'
import Contact from '../components/contacts'
import HeroSection  from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import Products from '../components/products';
import OrderProducts from '../components/OrderProducts';
import Projects from '../components/initiatives';
import Footer from '../components/footer';



export default function HomePage() {
  return (
    //<div className='bg-gradient-to-r from-blue-200 to-green-300'>
    <div className="bg-[#F1F7F5]">
      <HeroSection/>  
      <section id="about" className="py-20">
        <AboutUs />
        {/* ... */}
      </section>

      <section id="products" className="py-20">
        <Products/>
        <OrderProducts />
      </section>

      <section id="initiatives" className="py-20">
          <Projects/>
      </section>

      <section id="contacts" className="py-20">
        {/* Contacts content here */}
        <Contact />
      </section>
      <Footer/>
    </div>
  )
}
