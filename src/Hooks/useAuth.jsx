import { useContext } from "react";
import { AuthContext } from "../Component/Provider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
