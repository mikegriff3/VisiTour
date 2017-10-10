import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    newMarker(marker) {
      dispatch({
        type: "ADD_MARKER",
        payload: marker
      });
    },
    getRoute(directions) {
      dispatch({
        type: "GET_DIRECTIONS",
        payload: directions
      });
    }
  };
};

class SingleRoute extends React.Component {
  constructor() {
    super();
    this.renderSavedRoute = this.renderSavedRoute.bind(this);
    this.findRoute = this.findRoute.bind(this);
  }

  renderSavedRoute() {
    var parsedMarkers = JSON.parse(this.props.markers);
    this.findRoute(parsedMarkers);
  }

  findRoute(markers) {
    var tourStops = [];
    for (var i = 0; i < markers.length; i++) {
      tourStops.push({
        location: markers[i].position,
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

  render() {
    return (
      <div>
        <div onClick={this.renderSavedRoute}>{this.props.name}</div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SingleRoute);
