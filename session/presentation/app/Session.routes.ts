import { RouteProps } from "react-router-dom";
import Create from "../pages/create/Create";

const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: Create,
  },
];

export default routes;
