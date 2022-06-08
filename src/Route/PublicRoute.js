import Allproduct from "../Components/pages/home/Allproduct";
import Home from "../Components/pages/home/Home";
import Login from "../Components/pages/Login/Login";
import Sign from "../Components/pages/Signup/Signup";
export const PublicRoute = [
  { path: "/", name: "home", Component: Home },
  { path: "/home", name: "home", Component: Home },
  { path: "/allproduct", name: "allproduct", Component: Allproduct },
  { path: "/signup", name: "signup", Component: Sign },
  { path: "/login", name: "login", Component: Login },
];
