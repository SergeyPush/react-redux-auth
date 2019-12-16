import RegisterView from "./views/RegisterView/components/RegisterView";
import LoginView from "./views/LoginView/components/LoginView";
import LogoutView from "./views/LogoutView/components/LogoutView";
import HomeView from "./views/HomeView/components/HomeView";
import TasksView from "./views/TasksView/components/TasksView";

export default {
  HOME: {
    path: "/",
    exact: true,
    component: HomeView
  },
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
  },
  TASKS: {
    path: "/tasks",
    component: TasksView
  }
};
