import React from "react";
import { connect } from "react-redux";
import Map from "./Map";
import Directions from "./Directions";
import SavedRoutes from "./SavedRoutes";
import axios from "axios";
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
    markers: state.mapsReducer.markers,
    directions: state.mapsReducer.directions
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRoute(directions) {
      dispatch({
        type: "GET_DIRECTIONS",
        payload: directions
      });
    }
  };
};

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Default"
    };
    this.findRoute = this.findRoute.bind(this);
    this.saveRoute = this.saveRoute.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  findRoute() {
    var tourStops = [];
    for (var i = 0; i < this.props.markers.length; i++) {
      tourStops.push({
        location: this.props.markers[i].position,
        stopover: true
      });
    }

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
        waypoints: tourStops,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result);
          this.props.getRoute(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  saveRoute() {
    var request = {
      markers: this.props.markers,
      name: this.state.name
    };
    console.log("REQUEST OBJECT: ", request);
    axios
      .post("/api/saveRoutes", request)
      .then(data => {
        alert("Successfully saved your route!");
      })
      .catch(err => {
        console.log("Error saving route: ".err);
      });
  }

  render() {
    return (
      <div id="content-div">
        <div id="map-view">
          <Row>
            <Col lg={3} lgOffset={1} style={{ padding: 0 }}>
              <div id="side-menu">
                <Row>
                  <Col lg={12}>
                    <div id="map-instructions">
                      <h5>Click the places you want to visit!</h5>
                    </div>
                    <div id="quickest-route-btn">
                      <Button onClick={this.findRoute}>
                        Find Quickest Route
                      </Button>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div id="save-instructions">
                      <h5>Save your route for later!</h5>
                    </div>
                    <div id="edit-route-textbox">
                      <Form>
                        <input
                          name="route-name"
                          onChange={this.handleOnChange}
                          className="edit-route-name-input"
                          type="text"
                          placeholder="Name your route!"
                        />
                      </Form>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div id="save-route-btn">
                      <Button onClick={this.saveRoute}>Save Route</Button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <div id="saved-routes">
                      <SavedRoutes />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={7} style={{ padding: 0 }}>
              <Map
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `500px` }} />}
              />
            </Col>
          </Row>
        </div>
        <Row>
          <Col lg={10} lgOffset={1}>
            <div>
              <h4>Directions</h4>
            </div>
          </Col>
          <Col lg={10} lgOffset={1}>
            <div>
              <Directions directions={this.props.directions} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
