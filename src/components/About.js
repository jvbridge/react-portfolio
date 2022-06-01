import React, { useRef, useState } from "react";
import fullStack from "./assets/images/full_stack.png";
import "./assets/css/skills.css";
import "./assets/fontawesome/css/all.css";
import { OverlayTrigger } from "react-bootstrap";

const fullStackAlt =
  "an image of a laptop with various programming languages around it";
const renderTooltip = () => (
  <div>
    Image by{" "}
    <a href="https://pixabay.com/users/lakexyde-2489063/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1935737">
      Olalekan Oladipupo
    </a>{" "}
    from{" "}
    <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1935737">
      Pixabay
    </a>
  </div>
);

function About() {
  return (
    <div id="about" className="container mt-5">
      <section>
        <div className="row">
          <div className="col-md-6 gx-5 mb-4">
            <div
              className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
              data-mdb-ripple-color="light"
            >
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <img src={fullStack} className="img-fluid" alt={fullStackAlt} />
              </OverlayTrigger>

              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </div>
          </div>

          <div className="col-md-6 gx-5 mb-4">
            <h4>
              <strong>About me</strong>
            </h4>
            <p className="text-muted">
              Hi! My name is Jonathan, I'm a full stack developer that is
              interested in all things technology and science fiction.
            </p>
            <p>
              <strong>My journey</strong>
            </p>
            <p className="text-muted">
              I've been interested in technology for as long as I can remember,
              but I only started focusing on being a full stack developer pretty
              reecently. If you go look at{" "}
              <a href="https://github.com/jvbridge/">my github</a>, you'll see
              how much more I'm doing now
            </p>
          </div>
        </div>
      </section>
      <hr className="my-5" />
      <section id="skills">
        <h4 className="mb-5 text-center">
          <strong>Skills</strong>
        </h4>

        <ul>
          <li>
            Front-end Development <i className="fa-solid fa-browsers"></i>
          </li>
          <li>
            Back-end Development <i className="fa-solid fa-server"></i>
          </li>
          <li>C</li>
          <li>C++</li>
          <li>
            Python <i className="fa-brands fa-python"></i>
          </li>
          <li>
            Java <i className="fa-brands fa-java"></i>
          </li>
          <li>
            Javascript <i className="fa-brands fa-js"></i>
          </li>
          <li>
            Git <i className="fa-brands fa-git-alt"></i>
          </li>
          <li>
            HTML 5 <i className="fa-brands fa-html5"></i>
          </li>
          <li>
            Bootstrap <i className="fa-brands fa-bootstrap"></i>
          </li>
          <li>
            Font-awesome <i className="fa-solid fa-font-awesome"></i>
          </li>
          <li>
            Mysql <i className="fa-solid fa-database"></i>
          </li>
          <li>
            MongoDB <i className="fa-solid fa-database"></i>
          </li>
          <li>
            Node.js <i className="fa-brands fa-node-js"></i>
          </li>
          <li>
            Express.js <i className="fa-solid fa-brackets-curly"></i>
          </li>
          <li>
            Command line tools <i className="fa-solid fa-terminal"></i>
          </li>
          <li>
            React <i className="fa-brands fa-react"></i>
          </li>
          <li>
            Insomnia <i className="fa-solid fa-network-wired"></i>
          </li>
          <li>Wire framing</li>
          <li>
            Pseudo-code <i className="fa-solid fa-brain-circuit"></i>
          </li>
          <li>
            Server-side APIs <i className="fa-solid fa-gears"></i>
          </li>
          <li>
            Client-side APIs <i className="fa-solid fa-gears"></i>
          </li>
          <li>
            Sequelize <i className="fa-solid fa-database"></i>
          </li>
          <li>
            Linux <i className="fa-brands fa-linux"></i>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
