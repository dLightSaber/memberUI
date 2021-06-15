import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Providers from "../pages/Providers";

export default function RecursiveExample() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/providers">
          <Providers />
        </Route>
      </Switch>
    </Router>
  );
}
