import React from 'react';
import Faqs from '../components/Faq';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import Subscribe from '../components/Subscribe';

function Faq() {
  return (
    <div>
        <Navbar/>
        <br></br>
        <br></br>
        <Faqs/>
        <br></br>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Faq