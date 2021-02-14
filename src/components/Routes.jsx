import React from "react";
import { Switch, Route } from "react-router-dom";

import Signin from "./atoms/Signin/Signin";
import Signup from "./atoms/Signup/Signup";
import Lists from "./atoms/Lists/Lists";
import NoMatch from "./pages/NoMatch/NoMatch";
import PrivateRoute from "../utils/PrivateRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/forecast/signup" component={Signup} />
      <PrivateRoute exact path="/forecast/lists" component={Lists} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
}
