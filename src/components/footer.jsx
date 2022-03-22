import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = ()=>{
    return (
        <>
            <div className="d-flex flex-column px-3 py-3 align-items-center font-link text-center " style={{backgroundColor : "rgb(241, 241, 241)"}}><br />

                <br />

                <div className="d-flex align-items-center gap-4 mb-4">
                    <div className="d-flex align-items-center gap-4 mr-3" style={{cursor:"pointer"}} ><FaGithub size={42} className="fs-4" /></div>
                    <div className="d-flex align-items-center gap-4 mr-3" style={{cursor:"pointer"}}><FaInstagram size={42} className="fs-4" /></div>
                    <div className="d-flex align-items-center gap-4 mr-1" style={{cursor:"pointer",color:"#0A66C2"}}><FaLinkedin size={42} className="fs-4" /></div>
                </div>
                
                <div class="mb-2" style={{fontSize:"20px", cursor:"pointer", textDecoration: "none"}}><a href="/toc" class="anchor">Terms & Conditions</a>  |   <a href="/privacy" class="anchor">Privacy Policy</a>  |   <a href="/faq" class="anchor">FAQs</a>  |   <a href="/career" class="anchor">Career</a></div>
                <div class="mb-2" style={{fontSize:"20px", cursor:"pointer"}}></div>
                <div style={{fontSize:"20px", color:"black"}}>Copyright @2021 FeetWings. All Rights Reserved</div><br />
            </div>
        </>
    );
}

export default Footer;