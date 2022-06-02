import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function ContactForm() {
  const [state, setState] = useState({
    "form-name": "",
    "form-email": "",
    "form-message": "",
  });

  const handleSubmit = () => {
    if (state["form-name"] && state["form-email"] && state["form-message"]) {
      // eslint-disable-next-line no-useless-escape
      const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

      if (!state["form-email"].match(emailRegex)) {
        Swal.fire({
          title: "Invalid email address",
          icon: "error",
        });
        return;
      }
      Swal.fire({
        title: "Work in progress",
        icon: "info",
        text:
          "This form is just a demonstration of how to implement such a thing" +
          " in react, it isn't actually connected to an API yet",
      });
      return;
    }
    Swal.fire({
      title: "Incomplete Form",
      icon: "error",
    });
  };

  const handleChange = (event) => {
    // make a copy of the state
    const tmpState = { ...state };
    // mainpulate it with our new value
    tmpState[event.target.id] = event.target.value;
    // save it
    setState(tmpState);
  };

  const handleLeave = (event) => {
    if (!event.target.value) {
      Swal.fire({
        title: "Required field",
        icon: "error",
        text: "You cannot submit the form without this field",
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} onChange={handleChange}>
      <Form.Label htmlFor="name">Name</Form.Label>
      <Form.Control
        id="form-name"
        type="text"
        placeholder="Name"
        onBlur={handleLeave}
      />
      <Form.Label>Email Address</Form.Label>
      <Form.Control
        id="form-email"
        type="email"
        placeholder="name@example.com"
        onBlur={handleLeave}
      />
      <Form.Label>Message</Form.Label>
      <Form.Control
        id="form-message"
        as="textarea"
        rows={3}
        onBlur={handleLeave}
      />
      <br />
      <Button variant="dark" onClick={handleSubmit}>
        Submit!{" "}
      </Button>
    </Form>
  );
}

export default ContactForm;
