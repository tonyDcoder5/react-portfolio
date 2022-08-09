import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Row, Col, Button } from "react-bootstrap";


export const ContactMe = () => {

  const initialForm = {
    user_name: '',
    user_email: '',
    message: '',
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u29rgkn",
        "template_appix6f",
        form.current,
        "G-ApjuZDYtqcWDa-9"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact contact-bx" id="contact">
      <div className="container" id="heading">
        <h2>Contact Form</h2>
      </div>

      <Form ref={form} onSubmit={sendEmail}>
        <Row>
          <h2>Let's Connect!</h2>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="user_name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="user_name"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Enter email"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" name="message" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};
