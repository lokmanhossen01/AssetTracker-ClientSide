import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxiosEmployee from "../../Hooks/useAxiosEmployee";

const JoinAsHR = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosEmployee = useAxiosEmployee();
  const {
    user,
    createUser,
    updateUserProfile,
    googleLoginWithUser,
    gitHubLoginUser,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const extractPriceFromPackage = (pkg) => {
    const priceMatch = pkg.match(/\$(\d+)/);
    return priceMatch ? parseInt(priceMatch[1], 10) : 0;
  };

  const onSubmit = async (data) => {
    const { fullName, companyName, photo, email, date, password } = data;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters!");
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      toast.error(
        "Password should have at least one uppercase and one lowercase character."
      );
      return;
    } else {
      toast.success("User Created Successfully");
    }

    try {
      const result = await createUser(email, password);
      const packagePrice = extractPriceFromPackage(data.package);
      const userInfo = {
        email: result.user.email,
        name: fullName,
        companyName: companyName,
        photo: photo,

        date: date,
        package: packagePrice,
        role: "hr",
        status: 'pending'
      };

      await axiosEmployee.post("/users", userInfo);
      await updateUserProfile(fullName, photo);

      navigate(from);
      console.log(result.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSocialLogin = async (socialProvider) => {
    try {
      const result = await socialProvider();
      const userInfo = {
        email: result.user.email,
        name: result.user.displayName,
        role: "hr",
        status: 'pending'
      };

      await axiosEmployee.post("/users", userInfo);
      navigate(from);
      console.log(result.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>HR-Page</title>
      </Helmet>
      <div className="md:flex w-full p-5 bg-blue-600 items-center">
        <div className="md:w-1/2">
          <img src={""} alt="" />
        </div>
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-4xl text-white text-center shadow-sm">
              HR Register
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("fullName", { required: true })}
                className="input input-bordered"
              />
              {errors.fullName && (
                <p className="text-red-500">Full Name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Company Name</span>
              </label>
              <input
                type="text"
                placeholder="Company Name"
                {...register("companyName", { required: true })}
                className="input input-bordered"
              />
              {errors.companyName && (
                <p className="text-red-500">Company Name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo"
                {...register("photo", { required: true })}
                className="input input-bordered"
              />
              {errors.photo && (
                <p className="text-red-500">Photo URL is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Date of Birth</span>
              </label>
              <input
                type="text"
                placeholder="date of birth"
                {...register("date", { required: true })}
                className="input input-bordered"
              />
              {errors.date && (
                <p className="text-red-500">Date of Birth is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                {...register("password", { required: true })}
                className="input input-bordered"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="ml-60 md:ml-96 -mt-8 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Select Package</span>
              </label>
              <select
                className="select select-bordered w-full"
                {...register("package", { required: true })}
              >
                <option value="">Select</option>
                <option value="5 Member for $5">5 Member for $5</option>
                <option value="10 Member for $8">10 Member for $8</option>
                <option value="20 Member for $15">20 Member for $15</option>
              </select>
              {errors.package && (
                <p className="text-red-500">Package selection is required</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full" type="submit">
                Register
              </button>
            </div>
             <h2 className="mt-4">
              Ready For Login Now..!{" "}
              <Link className="text-white text-center font-bold" to="/login">
                Login
              </Link>
            </h2>
            {/* <hr className="my-4" />
            <h2 className="text-white text-center">Or SignIn</h2>
             <div className="flex justify-center text-3xl mt-2 gap-4">
              <button
                onClick={() => handleSocialLogin(googleLoginWithUser)}
                className="text-white"
              >
                <FaGoogle />
              </button>
              <button
                onClick={() => handleSocialLogin(gitHubLoginUser)}
                className="text-white"
              >
                <FaGithub />
              </button>
            </div> */}
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default JoinAsHR;
