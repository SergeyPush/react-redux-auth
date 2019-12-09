import React, { Component } from "react";

class RegisterView extends Component {
  state = { name: "", email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="text"
            name="name"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegisterView;
