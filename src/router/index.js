import Home from "../pages/Home";
import About from "../pages/About";
import Providers from "../pages/Providers";
import ScheduleAppointment from "../pages/ScheduleAppointment";
import Login from "../pages/Login";
const routes = [
  {
    index: 0,
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    index: 1,
    path: "/about",
    title: "About",
    component: About,
  },
  {
    index: 2,
    path: "/providers",
    title: "Provider",
    component: Providers,
  },
  {
    index: 3,
    path: "/schedule/appointment",
    title: "Schedule Appointment",
    component: ScheduleAppointment,
  },
  /*{
    path: "*",
    component: NoMatch,
  },*/
];

export const loginRoute = {
  path: "/login",
  title: "Login",
  component: Login,
};
export default routes;
