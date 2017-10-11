import React from "react";
import { Col, Button, Well, Row } from "react-bootstrap";

export default class DrivingSteps extends React.Component {
  constructor() {
    super();
  }

  render() {
    // Using regex to remove html tags from api response.
    var regex = /(<([^>]+)>)/gi;
    var body = this.props.instructions;
    var instructions = body.replace(regex, "");
    return (
      <div className="direction-step">
        <Row>
          <Col lg={10}>
            <div>{instructions}</div>
          </Col>
          <Col lg={2}>
            <div>{this.props.distance.text}</div>
          </Col>
        </Row>
      </div>
    );
  }
}
