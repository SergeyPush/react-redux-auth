import { combineReducers } from "redux";
import * as authActionTypes from "./authActionTypes";

const userReducer = (
  state = { name: null, email: null },
  { type, payload }
) => {
  switch (type) {
    case authActionTypes.REGISTER_SUCCESS:
      return payload.user;
    default:
      return state;
  }
};

const tokenReducer = (state = null, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_SUCCESS:
      return payload.token;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_FAILURE:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer
});
