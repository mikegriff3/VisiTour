import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import SingleRoute from "./SingleRoute";

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

  componentDidMount() {
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
    var routesArr = this.state.routes;
    return (
      <div>
        <div>Saved Routes</div>
        <div>
          {routesArr.map((route, index) => (
            <SingleRoute {...route} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SavedRoutes);
