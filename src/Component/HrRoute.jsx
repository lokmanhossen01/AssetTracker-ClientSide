import { useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const HrRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  return <div></div>;
};

export default HrRoute;
