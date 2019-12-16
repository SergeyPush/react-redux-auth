import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import Layout from "./common/Layout";
import { connect } from "react-redux";
import * as authOperations from "./redux/auth/authOperations";

function App({ onGetCurrentUser }) {
  useEffect(() => {
    onGetCurrentUser();
  }, [onGetCurrentUser]);
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              path={routes.REGISTER.path}
              component={routes.REGISTER.component}
            />
            <Route
              path={routes.LOGIN.path}
              component={routes.LOGIN.component}
            />
            <Route
              path={routes.LOGOUT.path}
              component={routes.LOGOUT.component}
            />
            <Route
              path={routes.TASKS.path}
              component={routes.TASKS.component}
            />
            <Route
              exact={routes.HOME.exact}
              path={routes.HOME.path}
              component={routes.HOME.component}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser())
});

export default connect(null, mapDispatchToProps)(App);
