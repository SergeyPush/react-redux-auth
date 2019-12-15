import axios from "axios";

import * as authActions from "./authActions";

axios.defaults.baseURL = "https://lpj-tasker.herokuapp.com";

export const registerUser = credentials => dispatch => {
  dispatch(authActions.registerStart());

  axios
    .post("/users/signup", credentials)
    .then(response => dispatch(authActions.registerSuccess(response.data)))
    .catch(error => dispatch(authActions.registerFailure(error)));

  // fetch("https://lpj-tasker.herokuapp.com/users/signup", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(credentials)
  // })
  //   .then(res => res.json())
  //   .then(data => dispatch(authActions.registerSuccess(data)))
  //   .catch(error => dispatch(authActions.registerFailure(error)));
};

export const logoutUser = () => (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;
  // if (token === null) return;

  dispatch(authActions.logoutStart());

  fetch("https://lpj-tasker.herokuapp.com/users/logout", {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(() => dispatch(authActions.logoutSuccess()))
    .catch(error => dispatch(authActions.logoutFailure(error)));
};

export const loginUser = credentials => dispatch => {
  console.log("Login fetch");
  dispatch(authActions.loginStart());

  axios
    .post("/users/login", credentials)
    .then(response => dispatch(authActions.loginSuccess(response.data)))
    .catch(error => dispatch(authActions.loginFailure(error)));

  // fetch("/users/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(credentials)
  // })
  //   .then(res => res.json())
  //   .then(data => dispatch(authActions.loginSuccess(data)))
  //   .catch(error => dispatch(authActions.loginFailure(error)));
};
