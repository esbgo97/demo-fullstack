import { Home } from "./pages/auth/Home";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Dashboard } from "./pages/main/Dashboard";

const AppRoutes = [
  {
    index: true,
    path: "/",
    name:"Home",
    element: <Home />
  },
  {
    path: '/login',
    name: "Login",
    element: <Login />
  },
  {
    path: '/register',
    name: "Register",
    element: <Register />
  },
  {
    path: '/dashboard',
    name: "Dashboard",
    element: <Dashboard />
  }
];

export default AppRoutes;
