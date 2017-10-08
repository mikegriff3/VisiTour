import React from "react";
import { connect } from "react-redux";
import DrivingSteps from "./DrivingSteps";

const mapStateToProps = state => {
  return {
    markers: state.mapsReducer.markers,
    directions: state.mapsReducer.directions
  };
};

class RouteLeg extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("Props in Route Leg: ", this.props);
    var steps = this.props.steps;
    return (
      <div>
        {steps.map((step, index) => <DrivingSteps {...step} />)}
        <hr />
      </div>
    );
  }
}

export default connect(mapStateToProps)(RouteLeg);
