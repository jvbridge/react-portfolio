import React from "react";
import icon from "./assets/images/icon.jpg";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
function Navigator({ navState, handlePageChange }) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="icon"
            src={icon}
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{ borderRadius: "50%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                console.log("click home");
                handlePageChange("home");
              }}
              className={navState === "home" ? "nav-link active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              onClick={() => {
                console.log("click about");
                handlePageChange("about");
              }}
              className={navState === "about" ? "nav-link active" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#link"
              onClick={() => {
                console.log("click portfolio");
                handlePageChange("portfolio");
              }}
              className={navState === "portfolio" ? "nav-link active" : ""}
            >
              Portfolio
            </Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/jonathan-bridge/">
                Linked-In
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/jvbridge">
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href="https://medium.com/@jvbridge">
                Medium
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigator;
