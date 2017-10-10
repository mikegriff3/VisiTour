import React from "react";

export default class DrivingSteps extends React.Component {
  constructor() {
    super();
  }

  render() {
    var regex = /(<([^>]+)>)/gi;
    var body = this.props.instructions;
    var instructions = body.replace(regex, "");
    return (
      <div>
        <div>{instructions}</div>
        <div>{this.props.distance.text}</div>
      </div>
    );
  }
}
