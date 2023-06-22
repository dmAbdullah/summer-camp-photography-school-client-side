import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      Swal.fire({
        title: "User Login Successfully.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleGoogleLogin = () => {
    googleLogIn();
  
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <h1 className="bg-blue-600 p-2 font-bold text-2xl text-center text-white rounded-xl">
                Login now!
              </h1>
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
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600 "
                >
                  {showPassword ? (
                    <AiFillEye size={18}/>
                  ) : (
                    <AiFillEyeInvisible size={18}/>
                  )}
                </button>
              </div>
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-2">
              <input
                type="submit"
                className="w-full border-b-2 text-center rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-blue-500 duration-500 mx-auto bg-blue-100 border-blue-600"
                value="Login"
              />
            </div>
            <Link
              to="/register"
              className="text-blue-600 text-center hover:underline"
            >
              New here?
              <span className="font-bold ">Create a New Account</span>
            </Link>
            <div className="divider">Or Login with</div>
            <div className="flex justify-center gap-1">
              <FaGoogle
                onClick={handleGoogleLogin}
                className="hover:bg-blue-500 w-12 h-12 rounded-full p-2 duration-500 hover:text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
