import React from "react";
import { connect } from "react-redux";
import DrivingSteps from "./DrivingSteps";

//Directions for two waypoints in a route

export default class RouteLeg extends React.Component {
  constructor() {
    super();
  }

  render() {
    var steps = this.props.steps;
    return (
      <div>
        {steps.map((step, index) => <DrivingSteps {...step} />)}
        <hr />
      </div>
    );
  }
}
