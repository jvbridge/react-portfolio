import React from "react";
import repos from "./assets/repos.json";
import Project from "./Project";

function Portfolio() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {repos.map((repo) => {
          return (
            <Project
              description={repo.description}
              name={repo.name}
              image={repo.image_name}
              link={repo.html_url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
