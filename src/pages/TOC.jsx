import React from 'react';
import Comingsoon from '../components/comingsoon';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import Subscribe from '../components/Subscribe';

function TOC() {
  return (
    <div>
    <Navbar/>
    <Comingsoon/>
    <br></br>
    <Subscribe/>
    <Footer/>

    </div>
  )
}

export default TOC