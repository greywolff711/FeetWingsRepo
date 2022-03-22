import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Subscribe from '../components/Subscribe';
import WMUS from '../components/whatMUS';

function Smartyarn() {
  return (
    <div>
        <Navbar/>
        <WMUS/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Smartyarn