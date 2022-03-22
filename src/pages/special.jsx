import React from "react";
import Special_Options from "../components/LandingPage/special_options";
import earlypic from '../build/assets/icons/EarlyDetection.webp';
import remotemoni from '../build/assets/icons/RemoteMonitoring.webp';
import Easeofaccess from '../build/assets/icons/Easeofaccess.webp';
import Affordability from '../build/assets/icons/Affordability.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function special(){
    AOS.init();
    return (
        <div id="special" class="easy-step-area ptb-100">
            <div class="container">
                <div class="section-title pb-4">
                    <h1>What Makes Us Special ?</h1>
                </div>

                <div class="row align-items-spacearound first-step-area" data-aos="fade-up">
                    <div class="col-lg-4 mt-5">
                        <div class="easy-step-card right-text">
                            <div class="row align-items-center first-block">
                                <div class="col-lg-4 col-sm-6 img-div">
                                    <LazyLoadImage effect="blur" src={earlypic} alt="early"/>
                                </div>
                                <Special_Options 
                                    heading="Early Detection & prevention of Diabetic Complications" 
                                    para="Find out early signs of risk for severe diabetic complications such as Diabetic Foot Ulcers, Hypertension & Chronic Kidney Disease."
                                />
                            </div>
                        </div>

                        <div class="easy-step-card left-text ">
                            <div class="row  flex-sm-row-reverse flex-lg-row align-items-center first-block ">
                                <div class="col-lg-4 col-sm-6 img-div">
                                    <LazyLoadImage effect="blur" src={remotemoni} alt="remote"/>
                                </div>
                                <Special_Options heading="Remote & Continuous Monitoring" 
                                        para="Real-time and long-term data that helps reduce false positives and helps you make better lifestyle choices from the convenience of your homes."
                                />
                            </div>
                        </div>
                    </div>
                       
                    <div class="col-lg-4 mt-n5 mobile-special">
                        <div class="easy-step-img">
                            <img src="../assets/app-img/mobile-app.png" class="step-1" alt="Special" />
                            <div class="easy-step-shape">
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-5">
                        <div class="easy-step-card right-txt  " >
                            <div class="row flex-sm-row-reverse flex-lg-row align-items-center second-block">
                                <Special_Options heading="Ease of Access"
                                    para="Our smart yarn is completely machine-washable and dryable, functionally smart, but just as easy to use!"
                                />
                                <div class="col-lg-4 col-sm-6 img-div">
                                    <LazyLoadImage effect="blur" src={Easeofaccess} alt="ease"/>
                                </div>
                            </div>
                        </div>
                        <div class="easy-step-card left-text">
                            <div class="row align-items-center second-block">
                                <Special_Options heading="Affordability"
                                para="For the first time ever, continuous, specific and feature-rich diabetic monitoring that is extremely affordable and value-driven with plans starting as low as ₹299/month!"
                                />
                                <div class="col-lg-4 col-sm-6 img-div">
                                    <LazyLoadImage effect ="blur"src={Affordability} alt="Affordability"/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default special;
