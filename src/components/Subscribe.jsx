import React from "react";

function Subscribe() {
  return (
    <div >
      <div
        style={{
          backgroundColor: "rgb(241, 241, 241)",
          marginTop: "0px",
          marginBottom: "-70px",
        }}
        class="hide-on-mobile "
      >
        <div class=" p-4 text-center fw-bold" style={{ fontSize: "30px" }}>
          Subscribe to get news and updates
        </div>
        <div class=" sm-flex pt-2 pb-4 text-center ">
          <input
            placeholder="Your Email Address "
            class="fs-2 mt-1 mr-2"
            style={{
              width: "30%",
              height: "35px",
              textSize: "15px",
              backgroundColor: "#E8E8E8",
              border: "none",
              borderRadius: "5px",
            }}
          ></input>
          <button
            class="btn  ml-4 "
            style={{ backgroundColor: "#333533", borderRadius: "7px", color:"white"}}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(241, 241, 241)",
          marginBottom: "20px",
        }}
        class="show-on-mobile "
      >
        <div class=" p-4 text-center fw-bold" style={{ fontSize: "24px" }}>
          Subscribe to get news and updates
        </div>
        <div class=" sm-flex  pb-3 text-center ">
          <input
            placeholder="Your Email Address "
            class="fs-2 mt-1"
            style={{
              width: "80%",
              height: "35px",
              textSize: "15px",
              backgroundColor: "#E8E8E8",
              border: "none",
              borderRadius: "5px",
            }}
          ></input>
        </div>
        <div class=" sm-flex pb-4 text-center ">
          <button
            class="btn  ml-4 "
            style={{ backgroundColor: "#333533", borderRadius: "5px", color:"white" }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
