import React from 'react';
import Navbar from './navbar';


function DisplayCareer() {
  return (
    <section>
        <Navbar/>
        <div style={{background:"#E6E6E6", height:"1000px"}}>
        <div classname="align-items-center">
        <h1>Business Systems</h1>
        <div class="box flex column">
        <div class="dis">
          <h3>Business Systems Analyst - Financial Systems</h3>
          <p>Systems team to help expand and maintain our Order to Cash applications and its ecosystem. Your role will be to help implement, administer, and optimize our business systems and assist with business process </p>
          <h5>Remote / Office </h5>
        </div>
        <div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p style={{color:"#4DFF0F"}}>Paid</p>
            <p style={{color:"red"}}>Gratis</p>
          </div>
        </div>
        </div>
        </div>
        </div>
    </section>)
}

export default DisplayCareer