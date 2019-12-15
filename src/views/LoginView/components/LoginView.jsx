import React, { Component } from "react";
import * as authOperations from "../../../redux/auth/authOperations";
import { connect } from "react-redux";

class LoginView extends Component {
  state = { email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("handle submit");
    this.props.onRegister({ ...this.state });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </label>
          <label htmlFor="">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: credentials => dispatch(authOperations.loginUser(credentials))
});

export default connect(null, mapDispatchToProps)(LoginView);
