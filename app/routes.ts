import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("./pages/home.tsx"),
  ...prefix("auth", [
    route("/log-in", "./pages/login.tsx"),
    route("/register", "./pages/register.tsx"),
  ]),
] satisfies RouteConfig;
