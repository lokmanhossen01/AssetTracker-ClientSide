import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAxiosEmployee from "../../Hooks/useAxiosEmployee";

const Login = () => {
  const { signIn, googleLoginWithUser, gitHubLoginUser } = useAuth();
  const axiosEmployee = useAxiosEmployee();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log("use to the location ", location.state);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result?.user;
        console.log(user);
        Swal.fire({
          title: "Login Success.",
          text: "You clicked the button!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };
  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
      const userInfo = {
        email: result?.user?.email,
        name: result?.user?.displayName,
        role: "employee",
      };
      axiosEmployee.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>Asset-Each | SignIn</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row ">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="p-4">
              <small>
                New Here?{" "}
                <Link to="/JoinEmployee" className="btn-link">
                  Create an account
                </Link>
              </small>
            </p>

            <span className="text-center p-2">or SignIn</span>

            <div className="flex justify-center text-3xl mt-2 gap-4">
              <div>
                <button onClick={() => handleSocialLogin(googleLoginWithUser)}>
                  <FaGoogle></FaGoogle>
                </button>
              </div>
              <div>
                <button onClick={() => handleSocialLogin(gitHubLoginUser)}>
                  <FaGithub></FaGithub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
