import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import SingleRoute from "./SingleRoute";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

const mapStateToProps = state => {
  return {
    markers: state.mapsReducer.markers,
    directions: state.mapsReducer.directions
  };
};

class SavedRoutes extends React.Component {
  constructor() {
    super();
    this.state = {
      routes: []
    };
  }

  render() {
    var routesArr = this.props.routes;
    return (
      <div>
        <div id="saved-routes-title">Saved Routes</div>
        <div id="saved-routes-container">
          <br />
          {routesArr.map((route, index) => (
            <SingleRoute {...route} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SavedRoutes);
