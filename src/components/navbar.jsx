import React from "react";

function navbar(){
    return(
        <nav class="navbar fixed-top navbar-expand-lg main-navbar app-nav">
            <div class="container-fluid ">
        
                <a class="navbar-brand" href="/">
                    <img src="../assets/logo/logo_web.png" alt="FeetWings" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar top-bar"></span>
                    <span class="icon-bar middle-bar"></span>
                    <span class="icon-bar bottom-bar"></span>
                </button>

                <div class="collapse navbar-collapse  navbar-spacing" id="navbarSupportedContent">
                    <ul class="navbar-nav  ">
                        <li class="nav-item">
                            <a class="nav-link" href="/products">Our Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#insights">Insights</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/smartyarn">Smart Yarn</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>
    );
}

export default navbar;