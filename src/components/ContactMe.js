import {Form, Row, Col, Button} from 'react-bootstrap';

/*
TODO:
  - adjust spacing rules and text-font-alignment-colors
    - center text
    - center button
    - turn form into a card on the side
  - add border rules to make more aesthetically pleasing
  - add a carousel of recent posts/images

*/

export const ContactMe = () => {
  return (
    <div id="contact" className="container">
      <Form>
        <Row>
            <h2>Let's Connect!</h2>
        </Row>
      <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="firstName" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastName" placeholder="Enter last name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control type="company" placeholder="Enter company name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check to subscribe for updates" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
