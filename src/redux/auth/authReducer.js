import { combineReducers } from "redux";

const userReducer = (
  state = { name: null, email: null },
  { type, payload }
) => {
  switch (type) {
    default:
      return state;
  }
};

const tokenReducer = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer
});
