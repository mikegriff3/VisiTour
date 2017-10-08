import React from "react";

export default class DrivingSteps extends React.Component {
  constructor() {
    super();
  }

  render() {
    //console.log("Props in Driving Steps: ", this.props);
    var regex = /(<([^>]+)>)/gi;
    var body = this.props.instructions;
    var instructions = body.replace(regex, "");
    console.log("INSTRUCTIONS: ", instructions);
    return (
      <div>
        <div>{instructions}</div>
      </div>
    );
  }
}
