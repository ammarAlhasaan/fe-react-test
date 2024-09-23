import {RouteObject} from "react-router-dom";
import Register from "pages/auth/routes/register";
import Login from "./login";

export const authRoutes: RouteObject[] = [
  {
    path: 'login',
    Component: Login, // Component to handle the login page
  },
  {
    path: 'register',
    Component: Register, // Component to handle the registration page
  },
];
