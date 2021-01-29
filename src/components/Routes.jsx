import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./atoms/Signin/Signin";
import Signup from "./atoms/Signup/Signup";
import NoMatch from "./pages/NoMatch/NoMatch";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
}
