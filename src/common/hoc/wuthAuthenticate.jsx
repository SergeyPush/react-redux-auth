import React from "react";
import { connect } from "react-redux";
import * as authSelectors from "../../redux/auth/authSelectors";
import { Redirect } from "react-router-dom";

const wuthAuthenticate = Component => {
  function WithAuthRedirect({ isAuthenticated, ...restProps }) {
    return isAuthenticated ? <Redirect to="/" /> : <Component {...restProps} />;
  }

  const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state)
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default wuthAuthenticate;
