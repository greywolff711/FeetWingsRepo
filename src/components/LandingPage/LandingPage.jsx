import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import sock from '../../build/assets/landing_img/sock.webp';
import App_shapes from '../App_shapes';

function LandingPage() {
  return (
    <div id="home" class="app-banner-area pt-100">
            <div class="container">
                <div class="row align-items-center sock-reverse">
                    <div class="col-lg-6">
                        <div class="app-bennr-text">
                            <h1>Smart Textile Based Healthcare Assistant</h1>
                            <p>FeetWings is a smart wearable company that aims to provide a solution to diabetes and related complications at an affordable rate.</p>
                            <App_shapes/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="app-banner-img">
                            <LazyLoadImage effect="blur" src={sock} alt="sock"/>
                            <div class="app-shapes"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-shape">
                </div>
            </div>
    </div>
  )
}

export default LandingPage