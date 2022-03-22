import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import fibre from '../build/assets/landing_img/fibre.webp'
import 'react-lazy-load-image-component/src/effects/blur.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WMUS() {
  return (
    <div id="smart" class="app-banner-area pt-100">
        <div class="container">
            <div class=" banner-box">
                <div class="col-lg-6 img-box text-center">
                <div className="banner-title-container1">
                <h1 class="banner-title">Smart Socks </h1>
                <h6 class="banner-owner">powered by</h6>
                <h2 class="banner-title">Smart Yarn</h2>
                </div>
                    <div class="app-banner-img" data-aos="fade-right">
                        <LazyLoadImage src={fibre} alt="fibre"/>
                    <div class="app-shapes"></div>
                    </div>
                </div>
                <div class="content-box" data-aos="fade-left">
                    <div class=" ">
                        <div className="banner-title-container2">
                        <h1 class="banner-title">Smart Socks </h1>
                        <h6 class="banner-owner">powered by</h6>
                        <h2 class="banner-title">Smart Yarn</h2>
                        </div>
                    </div>
                    <div class="app-bennr-text">
                        <p>
                            Introducing innovative smart textile technology that allows us
                            to embed state of the art sensors as electronic strands right at
                            the core of the yarn. The strand is extremely flexible and gives
                            your feet enough breathing room and can be washed and dried just
                            like your regular dumb socks!
                        </p>
                    </div>
                </div>
            </div>
            <div class="btn_container" data-aos="fade-left">
                <button class="btn">More</button>
            </div>
        </div>
    </div>
  );
}

export default WMUS;
