import React from 'react';
import Contactus from '../components/Contactus';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Subscribe from '../components/Subscribe';

function Contact() {
  return (
    <div>
    
    <Contactus/>

        <Navbar/>

        <br></br>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Contact