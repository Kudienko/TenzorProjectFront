import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const auth = useSelector((state) => state.login);
  return auth ? <Outlet /> : <Navigate to="login" />;
}

export default PrivateRoute;
