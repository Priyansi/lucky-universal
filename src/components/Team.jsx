import React, { Component } from "react";
import { Col, Row, Container, Image } from "react-bootstrap";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={6} md={3} style={{ textAlign: "center" }}>
            <ColoredLine color="blue" />
            <Image
              src="https://thestartsummit.com/wp-content/uploads/2019/03/Darren-Ryan-Profile-607-square.jpg"
              roundedCircle
              thumbnail
            />
            <h3>Frank Turner</h3>
            <p>He's the man!</p>
          </Col>
          <Col xs={6} md={3} style={{ textAlign: "center" }}>
            <ColoredLine color="green" />
            <Image
              src="https://www.fancygirldesignstudio.com/wp-content/uploads/2017/11/Rachel-Rouhana-Profile-Pic-Square.jpg"
              roundedCircle
              thumbnail
            />
            <h3>Frank Turner</h3>
            <p>He's the man!</p>
          </Col>
          <Col xs={6} md={3} style={{ textAlign: "center" }}>
            <ColoredLine color="orange" />
            <Image
              src="https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png"
              roundedCircle
              thumbnail
            />
            <h3>Frank Turner</h3>
            <p>He's the man!</p>
          </Col>
          <Col xs={6} md={3} style={{ textAlign: "center" }}>
            <ColoredLine color="red" />
            <Image
              src="https://thestartsummit.com/wp-content/uploads/2019/03/Darren-Ryan-Profile-607-square.jpg"
              roundedCircle
              thumbnail
            />
            <h3>Frank Turner</h3>
            <p>He's the man!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
