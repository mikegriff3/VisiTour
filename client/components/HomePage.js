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
      name: "Default",
      routes: []
    };
    this.findRoute = this.findRoute.bind(this);
    this.saveRoute = this.saveRoute.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getAllRoutes = this.getAllRoutes.bind(this);
  }

  //Grab saved routes from database
  componentDidMount() {
    this.getAllRoutes();
  }

  //Takes placed markers and gets most efficient route.
  findRoute() {
    //create an array of objects that holds each markers latitude and longitude
    var tourStops = [];
    for (var i = 0; i < this.props.markers.length; i++) {
      tourStops.push({
        location: this.props.markers[i].position,
        stopover: true
      });
    }

    //Send request to google maps API
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

  //Handle input for naming route
  handleOnChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  //Save route to database
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
        this.getAllRoutes();
      })
      .catch(err => {
        console.log("Error saving route: ".err);
      });
  }

  //Grabs all saved routes from database
  getAllRoutes() {
    axios
      .get("/api/getRoutes")
      .then(data => {
        console.log("getRoutes DATA: ", data.data);
        this.setState({
          routes: data.data
        });
      })
      .catch(err => {
        console.log("Error getting routes: ", err);
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
                    <hr />
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
                      <Button id="save-button" onClick={this.saveRoute}>
                        Save Route
                      </Button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <div id="saved-routes">
                      <SavedRoutes routes={this.state.routes} />
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
              <h4 id="route-directions-title">Route Directions</h4>
            </div>
            <hr />
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
