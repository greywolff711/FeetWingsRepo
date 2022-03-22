import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Ourproducts from '../components/Ourproducts';
import Subscribe from '../components/Subscribe';
import Whatmore from '../components/Whatmore';

function Products() {
  return (
    <div>
      <Navbar/>
      <Ourproducts/>
      <Whatmore/>
      <Subscribe/>
      <Footer/>
    </div>
    
  )
}

export default Products