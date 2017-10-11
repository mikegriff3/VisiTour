import React from "react";
import expect from "expect";
import { renderIntoDocument } from "react-addons-test-utils";
import NavBar from "./components/NavBar";

//Check to see if NavBar is rendering correctly
describe("./components/NavBar", () => {
  it("should render", () => {
    const item = renderIntoDocument(<NavBar />);

    expect(item).toExist();
  });
});
