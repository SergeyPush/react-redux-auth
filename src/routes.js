import RegisterView from "./views/RegisterView/components/RegisterView";
import LoginView from "./views/LoginView/components/LoginView";
import LogoutView from "./views/LogoutView/components/LogoutView";

export default {
  REGISTER: {
    path: "/register",
    component: RegisterView
  },
  LOGIN: {
    path: "/login",
    component: LoginView
  },
  LOGOUT: {
    path: "/logout",
    component: LogoutView
  }
};
