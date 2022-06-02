import React from "react";
import resume from "./assets/resume.pdf";

function Home() {
  return (
    <div className="container d-flex align-items-center justify-content-center text-center h-100">
      <div className="text-white">
        <div id="lead">
          <div id="lead-content">
            <h1>Jonathan Bridge</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <a
            className="btn btn-outline-light btn-lg m-2"
            href={resume}
            role="button"
            rel="noreferrer"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
