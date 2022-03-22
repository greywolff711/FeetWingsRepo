import React from "react";

function Ourproducts() {
  return (
    <div id="home" class="sc pt-100">
      <div class="container">
        <div class=" align-items-center text-center">
          <div>
            <h1 class="heading">FeetWings</h1>
            <br></br>
            <h2 class="subheading">
              Smart IoT based Early warning and management tool
            </h2>
            <br></br>
            <br></br>
            <p class="paragraph">
              Smart socks that help in early detection and management of
              diabetic complications using non-invasive, affordable and
              continous monitoring
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div>
          <h1 class="problem">The Problem</h1>
          <p class="para">
            Patients with lifestyle diseases like diabetes deal with the
            constant risk of developing life-threatening complications like
            neuropathy, hypertension, and blindness.
            <br></br>
            <br></br>
            This happens because of the lack of continuous and consistent
            monitoring of critical parameters of the patient. India has close to
            about 77 million diabetic patients second to China.
          </p>
          <div class="rectangle container">
            <div class="mes">Uncontrolled diabetes and problems</div>
            <div class="line"></div>
            <div class="mes">Foot ulcers, CVD and retinopathy</div>
            <div class="line"></div>
            <div class="mes">
              Heart/Kidney failure, amputations and blindness
            </div>
          </div>
        </div>
        <div>
          <img src="assets/landing_img/ps.svg" alt="FeetWings" />
        </div>
      </div>
      <div class="column">
        <div class="container">
          {" "}
          <div>
            <div style={{fontSize:"60px"}}>Our Solution</div>
            <div style={{fontSize:"30px"}}>
              Constant and continuous monitoring of critical parameters using
              IoT
            </div>
          </div>
          <div class="space"></div>
          <div class="container">
            <div class="row">
              <p class="pt-4" style={{fontSize:"24px"}}>Temperature monitoring can reduce foot ulcer by</p>
              <div class="space"></div>
              <div class="circular">
                <div class="inner"></div>
                <div class="number">85%</div>
                <div class="circle">
                  <div class="bar left">
                    <div class="progress"></div>
                  </div>
                  <div class="bar right">
                    <div class="progress"></div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div class="row">
              <p class="pt-4" style={{fontSize:"24px"}}>
                Glucose monitoring can reduce risk of contracting any diabetic
                complication by
              </p>
              <div class="space"></div>
              <div class="circular">
                <div class="inner"></div>
                <div class="number">43%</div>
                <div class="circle">
                  <div class="bar left">
                    <div class="progress"></div>
                  </div>
                  <div class="bar right">
                    <div class="progress"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="img">
          <img src="assets/landing_img/doublesock.svg" alt="FeetWings"></img>
        </div>
      </div>
    </div>
  );
}

export default Ourproducts;
