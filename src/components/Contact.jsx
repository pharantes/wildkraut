import React from "react";

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="mb-5">Contact TESTING PULL!</h1>
        <div className="col-lg-6">
          <form>
            <div class="form-floating mb-2">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-2">
              <input
                type="Name"
                class="form-control"
                id="floatingName"
                placeholder="Name"
              />
              <label for="floatingName">Name</label>
            </div>
            <div class="form-floating mb-2">
              <textarea
                class="form-control"
                placeholder="Leave a message here"
                id="floatingText"
                style={{ height: "200px" }}
              ></textarea>
              <label for="floatingText">Message</label>
            </div>
            <button type="submit" class="btn btn-primary align-self-center">
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
}
