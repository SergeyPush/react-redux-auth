import * as authActions from "./authActions";

const registerUser = credentials => dispatch => {
  dispatch(authActions.registerStart());
};
