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

//Holds list of saved routes in database

export default class SavedRoutes extends React.Component {
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
