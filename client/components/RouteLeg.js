import React from "react";
import { connect } from "react-redux";

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
    return (
      <div>
        <div>This is a Route Leg.</div>
        <hr />
      </div>
    );
  }
}

export default connect(mapStateToProps)(RouteLeg);
