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

export const logoutStart = () => ({ type: actionTypes.LOGOUT_START });

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS
});

export const logoutFailure = error => ({
  type: actionTypes.LOGOUT_FAILURE,
  payload: error
});
