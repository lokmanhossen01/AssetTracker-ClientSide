import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import userManager from "../../Hooks/userManager";

const MangerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isManager, isManagerLoading] = userManager();
  if (loading || isManagerLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isManager) {
    return children;
  }
  return <Navigate to="/payment" state={{ from: location }} replace></Navigate>;
};

export default MangerRoute;
