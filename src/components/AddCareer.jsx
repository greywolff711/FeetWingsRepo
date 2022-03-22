import React from "react";


function AddCareer() {
  return (
    <div>
      <div
        class="align-items-center"
        style={{ display: "flex", flexDirection: "column", marginTop: "8rem" }}
      >
        <h1>Career Dashboard</h1>
        <form
          class="container"
          action="#"
          method="POST"
          style={{ flexDirection: "row", marginTop: "4rem" }}
        >
          <input
            type="text"
            name="title"
            id="title"
            autoComplete="given-name"
            required
            class="shree"
            placeholder="Title"
          />
          <select name="payment" id="payment" required class="shree">
            <option value="">Paid</option>
            <option value="">Gratis</option>
          </select>
          <select name="remote" id="remote" required class="shree">
            <option value="">Remotely</option>
            <option value="">Office</option>
          </select>
        </form>
        <form
          class="container"
          action="#"
          method="POST"
          style={{ flexDirection: "row", marginTop: "2rem" }}
        >
          <input
            type="text"
            name="location"
            id="location"
            autoComplete="given-name"
            required
            class="shree"
            placeholder="Location"
          />
          <select name="job" id="job" required class="shree">
            <option value="">Full-Time</option>
            <option value="">Intern</option>
          </select>
          <select name="jobsection" id="jobsection" required class="shree">
            <option value="">Business Systems</option>
            <option value="">Design</option>
            <option value="">Engineering</option>
            <option value="">Finance</option>
            <option value="">Human Resources</option>
            <option value="">Legal</option>
            <option value="">Marketing</option>
            <option value="">Operations</option>
          </select>
        </form>
        <textarea
          id="message"
          name="Short Description"
          class="container"
          style={{ marginTop: "2rem" }}
          placeholder="Short Description"
        ></textarea>
        <textarea
          id="message"
          placeholder="Long Description"
          name="Long Description"
          class="container"
          style={{ marginTop: "2rem" }}
        ></textarea>
        <textarea
          id="message"
          placeholder="Message"
          name="message"
          class="container"
          style={{ marginTop: "2rem" }}
        ></textarea>
      </div>
    </div>
  );
}

export default AddCareer;
