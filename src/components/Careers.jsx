import React, { Component } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";

export default class Careers extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "0.5rem" }}>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="email" placeholder="Enter first name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="password" placeholder="Enter last name" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control placeholder="example@gmail.com" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Your current address" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Applying For</Form.Label>
                <Form.Control as="select" value="Choose...">
                  <option>Choose...</option>
                  <option>Engineer</option>
                  <option>Others</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridFileInput">
                <Form.Label>Attach Your Resume</Form.Label>
                <Form.File id="custom-file" label="File Input" custom />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Accept Terms and Conditions" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
