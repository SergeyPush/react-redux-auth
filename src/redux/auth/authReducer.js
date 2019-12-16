import { combineReducers } from "redux";
import * as authActionTypes from "./authActionTypes";

const userReducer = (
  state = { name: null, email: null },
  { type, payload }
) => {
  switch (type) {
    case authActionTypes.REGISTER_SUCCESS:
    case authActionTypes.LOGIN_SUCCESS:
    case authActionTypes.GET_CURRENT_SUCCESS:
      return payload.user;
    case authActionTypes.LOGOUT_SUCCESS:
      return { name: null, email: null };
    default:
      return state;
  }
};

const tokenReducer = (state = null, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_SUCCESS:
    case authActionTypes.LOGIN_SUCCESS:
      return payload.token;
    case authActionTypes.LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_FAILURE:
    case authActionTypes.LOGOUT_FAILURE:
    case authActionTypes.LOGIN_FAILURE:
    case authActionTypes.GET_CURRENT_FAILURE:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer
});
