import { RouteProps } from "react-router-dom";
import Session from "@session/presentation/app/Session";

const routes: RouteProps[] = [
  {
    path: "/",
    exact: false,
    children: Session,
  },
];

export default routes;
