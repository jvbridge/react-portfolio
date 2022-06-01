import React from "react";
import { Card, Button } from "react-bootstrap";

function Project({ name, description, image, link }) {
  const imagePath = require("./assets/images/repos/" + image);
  return (
    <div className="col my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagePath} alt={description} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" href={link}>
            Link to it on Github
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;
