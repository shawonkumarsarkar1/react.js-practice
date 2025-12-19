import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("./pages/home.tsx"),
  ...prefix("auth", [
    route("/sign-in", "./pages/sign-in.tsx"),
    route("/sign-up", "./pages/sign-up.tsx"),
  ]),
] satisfies RouteConfig;
