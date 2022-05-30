import React from "react";
import icon from "./assets/icon.jpg";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
function Navigator() {
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
            onClick={() => {}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
