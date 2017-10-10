import React from "react";
import { connect } from "react-redux";

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

class SingleRoute extends React.Component {
  constructor() {
    super();
    this.renderSavedRoute = this.renderSavedRoute.bind(this);
  }

  renderSavedRoute() {
    console.log("render saved route hitting");
  }

  render() {
    console.log("Props in singleRoute: ", this.props);
    return (
      <div>
        <div onClick={this.renderSavedRoute}>{this.props.name}</div>
      </div>
    );
  }
}

export default connect(mapDispatchToProps)(SingleRoute);
