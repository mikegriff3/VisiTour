import React from "react";
import { connect } from "react-redux";
import Map from "./Map";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Col,
  Button,
  Well,
  Row
} from "react-bootstrap";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

const mapStateToProps = state => {
  return {
    markers: state.mapsReducer.markers
  };
};
const mapDispatchToProps = dispatch => {};

class HomePage extends React.Component {
  constructor() {
    super();
    this.findRoute = this.findRoute.bind(this);
  }

  findRoute() {
    console.log("PROPS IN HOMEPAGE: ", this.props);
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route(
      {
        origin: {
          lat: 29.424122,
          lng: -98.493629
        },
        destination: {
          lat: 29.424122,
          lng: -98.493629
        },
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    return (
      <div>
        <Map
          containerElement={<div style={{ height: `500px` }} />}
          mapElement={<div style={{ height: `500px` }} />}
        />
        <div>
          <Button onClick={this.findRoute}>Find Quickest Route</Button>
        </div>
        <div>
          <Button>Save Route</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
