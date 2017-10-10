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
      markers: []
    };
    this.placeMarker = this.placeMarker.bind(this);
    this.renderPath = this.renderPath.bind(this);
  }

  placeMarker(event) {
    let marker = {
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
    };
    this.props.newMarker(marker);
  }

  renderPath() {
    const markers = this.props.markers;
    if (this.props.directions.routes) {
      return <DirectionsRenderer directions={this.props.directions} />;
    } else {
      return markers.map((marker, index) => <Marker {...marker} />);
    }
  }

  render() {
    const markers = this.props.markers;
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{
          lat: 29.424122,
          lng: -98.493629
        }}
        onClick={this.placeMarker}
      >
        {this.renderPath()}
      </GoogleMap>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withGoogleMap(Map));
