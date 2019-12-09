import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import routes from "./routes";
import "./App.css";

function App() {
  const activeStyle = {
    color: "palevioletred"
  };
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink to={routes.REGISTER.path}>Register</NavLink>
          <NavLink to={routes.LOGIN.path}>Login</NavLink>
        </nav>

        <Switch>
          <Route
            path={routes.REGISTER.path}
            component={routes.REGISTER.component}
          />
          <Route path={routes.LOGIN.path} component={routes.LOGIN.component} />
          <Route exact path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
