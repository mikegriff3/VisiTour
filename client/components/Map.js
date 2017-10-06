import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

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
  }

  placeMarker(event) {
    console.log("Latitude: ", event.latLng.lat());
    console.log("Longitude: ", event.latLng.lng());
  }

  render() {
    const markers = this.state.markers;

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
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
