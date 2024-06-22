import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosEmployee from "../Hooks/useAxiosEmployee";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { googleLoginWithUser, gitHubLoginUser } = useAuth();
  const axiosEmployee = useAxiosEmployee();
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    await googleLoginWithUser().then(async(result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        role: "employee",
      };
      const result = await axiosEmployee.post("/users", userInfo);
        if(res?.data){
            // navigate("/hrPayment");
            navigate("/");
        }
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleLogin} className="btn ">
          <FaGoogle className="mr-2" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
