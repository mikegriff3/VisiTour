import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </main>
);

export default Main;
