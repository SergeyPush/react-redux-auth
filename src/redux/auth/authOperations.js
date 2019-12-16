import axios from "axios";

import * as authActions from "./authActions";

axios.defaults.baseURL = "https://lpj-tasker.herokuapp.com";

const setToken = token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const unsetToken = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const registerUser = credentials => dispatch => {
  dispatch(authActions.registerStart());

  axios
    .post("/users/signup", credentials)
    .then(response => {
      setToken(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
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

export const loginUser = credentials => dispatch => {
  dispatch(authActions.loginStart());

  axios
    .post("/users/login", credentials)
    .then(response => {
      setToken(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
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

export const getCurrentUser = () => (dispatch, getState) => {
  const state = getState();
  const token = state.auth.token;

  if (!token) {
    return;
  }
  setToken(token);
  dispatch(authActions.getCurrentStart());

  axios
    .get("/users/current")
    .then(user => dispatch(authActions.getCurrentSuccess(user)))
    .catch(error => dispatch(authActions.getCurrentFailure(error)));
};

export const logoutUser = () => dispatch => {
  // const state = getState();
  // const { token } = state.auth;
  // // if (token === null) return;

  dispatch(authActions.logoutStart());

  axios
    .post("/users/logout")
    .then(() => {
      unsetToken();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutFailure(error)));
};
