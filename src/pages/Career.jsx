import React from 'react';
import Navbar from '../components/navbar';
import Subscribe from '../components/Subscribe';
import Footer from "../components/footer";
import AddCareer from '../components/AddCareer';

function Career() {
  return (
    <section>
      
      <Navbar/>
        <AddCareer/>
     <Subscribe/>
     <Footer/>
      
    </section>
  )
}

export default Career