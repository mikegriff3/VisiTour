import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const markers = this.props.markers || [];

    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{
          lat: 29.424122,
          lng: -98.493629
        }}
      >
        {markers.map((marker, index) => <Marker {...marker} />)}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
