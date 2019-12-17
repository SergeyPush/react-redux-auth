import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as authSelectores from "../redux/auth/authSelectors";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...restProps
}) => (
  <Route
    {...restProps}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectores.isAuthenticated(state)
});

export default connect(mapStateToProps)(PrivateRoute);
