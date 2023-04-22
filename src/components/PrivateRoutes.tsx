import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isExpired } from "react-jwt";
import { clearUserData } from "../utils/ClearUserData";

const PrivateRoutes = () => {
  const location = useLocation();

  const isTokenValid = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    const isMyTokenExpired = isExpired(token);
    if (!isMyTokenExpired) {
      return true;
    } else {
      clearUserData();
      return false;
    }
  };

  return isTokenValid() ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;