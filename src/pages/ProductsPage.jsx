import React from 'react'
import Products from '../components/products';
import OrderProducts from '../components/OrderProducts';
import Footer from '../components/footer';

export default function ProductsPage() {
  return (
    // <div className='bg-gradient-to-r from-blue-200 to-green-300'>
    <div>
      <Products/>
      <OrderProducts />
      <Footer/>
    </div>
  )
}