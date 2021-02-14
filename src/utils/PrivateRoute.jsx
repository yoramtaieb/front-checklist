import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../contexts/auth/Auth";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.isAuthenticated) {
          return <Component {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
}
