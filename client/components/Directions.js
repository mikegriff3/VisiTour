import React from "react";
import { connect } from "react-redux";
import RouteLeg from "./RouteLeg";

const mapStateToProps = state => {
  return {
    markers: state.mapsReducer.markers,
    directions: state.mapsReducer.directions
  };
};

class Directions extends React.Component {
  constructor() {
    super();
    this.renderDirections = this.renderDirections.bind(this);
  }

  renderDirections() {
    //If we have received directions display them, if not display empty message
    if (this.props.directions.routes) {
      let legs = this.props.directions.routes[0].legs;
      return <div>{legs.map((leg, index) => <RouteLeg {...leg} />)}</div>;
    } else {
      return <div>Create or select a route to view directions.</div>;
    }
  }

  render() {
    return <div>{this.renderDirections()}</div>;
  }
}

export default connect(mapStateToProps)(Directions);
