import {
  type RouteConfig,
  route,
  index,
  layout,
 
} from "@react-router/dev/routes";

export default [
  
  

  layout("./Layout/layout.tsx", [
    index("./routes/home.tsx"),
    // route("login", "./auth/login.tsx"),
    // route("register", "./auth/register.tsx"),
  ]),


] satisfies RouteConfig;
