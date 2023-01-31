import React from "react";

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="mb-5">Contact</h1>
        <div className="col-lg-6">
          <form>
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address Test</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="Name"
                className="form-control"
                id="floatingName"
                placeholder="Name"
              />
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating mb-2">
              <textarea
                className="form-control"
                placeholder="Leave a message here"
                id="floatingText"
                style={{ height: "200px" }}
              ></textarea>
              <label htmlFor="floatingText">Message</label>
            </div>
            <button type="submit" className="btn btn-primary align-self-center">
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
}
