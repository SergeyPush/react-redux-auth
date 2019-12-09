import * as actionTypes from "./authActionTypes";
export const registerStart = () => ({ type: actionTypes.REGISTER_START });

export const registerSuccess = (user, token) => ({
  type: actionTypes.REGISTER_SUCCESS,
  payload: { user, token }
});

export const registerFailure = error => ({
  type: actionTypes.REGISTER_FAILURE,
  payload: error
});
