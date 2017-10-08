import React from "react";

export default class Directions extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("props in Directions: ", this.props);
    return (
      <div>
        <h5>Where directions will go</h5>
      </div>
    );
  }
}
