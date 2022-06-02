import React from "react";
import ContactForm from "./ContactForm";
import "./assets/fontawesome/css/all.css";
function Footer() {
  return (
    <div className="container my-3 pb-3">
      <div className="container">
        <h3>Contact me!</h3>
        <ContactForm />
      </div>
      <div className="container row my-3 mx-auto">
        <div className="d-flex justify-content-center">
          <a href="https://github.com/jvbridge">
            <i className="mx-3 fa-5x fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jonathan-bridge/">
            <i className="mx-3 fa-5x fa-brands fa-linkedin"></i>
          </a>
          <a href="https://medium.com/@jvbridge">
            <i className="mx-3 fa-5x fa-brands fa-medium"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
