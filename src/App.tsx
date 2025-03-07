import { Navigate, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";

function App() {
  // const protectecRoute = () => {
  const isLoggedIn = localStorage.getItem("isAuthenticated");
  const { pathname } = useLocation();
  if (isLoggedIn === "true") {
    if (pathname === "/") {
      return <Navigate to="/dashboard" />;
    }
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
