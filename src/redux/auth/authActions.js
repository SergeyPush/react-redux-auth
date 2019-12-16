import * as actionTypes from "./authActionTypes";
export const registerStart = () => ({ type: actionTypes.REGISTER_START });

export const registerSuccess = ({ user, token }) => ({
  type: actionTypes.REGISTER_SUCCESS,
  payload: { user, token }
});

export const registerFailure = error => ({
  type: actionTypes.REGISTER_FAILURE,
  payload: error
});

export const loginStart = () => ({ type: actionTypes.LOGIN_START });

export const loginSuccess = ({ user, token }) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: { user, token }
});

export const loginFailure = error => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: error
});

export const logoutStart = () => ({ type: actionTypes.LOGOUT_START });

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS
});

export const logoutFailure = error => ({
  type: actionTypes.LOGOUT_FAILURE,
  payload: error
});

export const getCurrentStart = () => ({ type: actionTypes.GET_CURRENT_START });

export const getCurrentSuccess = user => {
  console.log("Success action");

  return {
    type: actionTypes.GET_CURRENT_SUCCESS,
    payload: user
  };
};

export const getCurrentFailure = error => ({
  type: actionTypes.GET_CURRENT_FAILURE,
  payload: error
});
