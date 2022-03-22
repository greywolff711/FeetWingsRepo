import React from 'react';
import LandingP from "./landingP";
import NavBar from '../components/navbar';
import Special from "./special";
import Footer from "../components/footer";
import Work from "./work";
import WMUS from "../components/whatMUS";
import Subscribe from '../components/Subscribe';

function Home() {
  return (
    <div>
      <NavBar />
      <LandingP/>
      <Special/>
      <WMUS/>
      <Work/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Home
