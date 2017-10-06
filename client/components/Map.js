import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} from "react-google-maps";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    markers: state.mapsReducer.markers,
    directions: state.mapsReducer.directions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newMarker(marker) {
      dispatch({
        type: "ADD_MARKER",
        payload: marker
      });
    }
  };
};

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          position: {
            lat: 29.424122,
            lng: -98.493629
          }
        }
      ]
    };
    this.placeMarker = this.placeMarker.bind(this);
    this.renderPath = this.renderPath.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("NEXT: ", nextProps);
  }

  placeMarker(event) {
    //console.log("Latitude: ", event.latLng.lat());
    //console.log("Longitude: ", event.latLng.lng());
    let marker = {
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
    };
    console.log("Props: ", this.props);
    this.props.newMarker(marker);
  }

  renderPath() {}

  render() {
    console.log("DIRECTIONS: ", this.props.directions);
    const markers = this.props.markers;

    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{
          lat: 29.424122,
          lng: -98.493629
        }}
        onClick={this.placeMarker}
      >
        {markers.map((marker, index) => <Marker {...marker} />)}
        {this.props.directions && (
          <DirectionsRenderer directions={this.props.directions} />
        )}
      </GoogleMap>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withGoogleMap(Map));
