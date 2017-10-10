import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SavedRoutes from "./SavedRoutes";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/saved" component={SavedRoutes} />
    </Switch>
  </main>
);

export default Main;
