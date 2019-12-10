import React, { Component } from "react";
import { connect } from "react-redux";
import * as authOperations from "../../../redux/auth/authOperations";

class LogoutView extends Component {
  state = {};

  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <div>LogoutView</div>;
  }
}

const mapStateToProps = dispatch => ({
  onLogout: () => dispatch(authOperations.logoutUser())
});

export default connect(null, mapStateToProps)(LogoutView);
