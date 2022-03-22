import React from 'react';
import Aboutus from '../components/Aboutus';
import Footer from "../components/footer";
import Subscribe from '../components/Subscribe';

function About() {
  return (
    <div>
      <Aboutus/>
      <br></br>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default About