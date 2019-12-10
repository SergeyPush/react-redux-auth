import * as authActions from "./authActions";

export const registerUser = credentials => dispatch => {
  dispatch(authActions.registerStart());

  fetch("https://lpj-tasker.herokuapp.com/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(res => res.json())
    .then(data => dispatch(authActions.registerSuccess(data)))
    .catch(error => dispatch(authActions.registerFailure(error)));
};

export const logoutUser = () => dispatch => {
  dispatch(authActions.logoutStart());

  fetch("https://lpj-tasker.herokuapp.com/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(() => dispatch(authActions.logoutSuccess()))
    .catch(error => dispatch(authActions.logoutFailure(error)));
};
