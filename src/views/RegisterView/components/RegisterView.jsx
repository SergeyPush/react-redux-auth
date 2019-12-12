import React, { Component } from "react";
import * as authOperations from "../../../redux/auth/authOperations";
import { connect } from "react-redux";

class RegisterView extends Component {
  state = { name: "", email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister({ ...this.state });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Register Page</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </label>
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

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: credentials => dispatch(authOperations.registerUser(credentials))
});

export default connect(null, mapDispatchToProps)(RegisterView);
