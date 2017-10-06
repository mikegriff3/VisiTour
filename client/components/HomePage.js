import React from "react";
import { connect } from "react-redux";
import Map from "./Map";

const mapStateToProps = state => {};
const mapDispatchToProps = dispatch => {};

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Map
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `400px` }} />}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
