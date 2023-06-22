import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [passwordMatch, setPasswordMatch] = useState(true);


  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordMatch(false);}
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser= result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.PhotoUrl)
    })
    .then(data => {
      if(data.insertedId){
        reset()
        Swal.fire({
          position: 'top-end',
                      icon: 'success',
                      title: 'User Created Successfully',
                      showConfirmButton: false,
                      timer: 1500
        })
        navigate('/')
      }
    })
    .catch((error) => {
      console.log(error);
    })
  };

  return (
    <div>
      <div className="min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <h2 className="bg-blue-600 p-2 font-bold text-2xl text-center text-white rounded-xl">
                  Register now!
                </h2>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  {...register("photoUrl", { required: true })}
                  placeholder="photo url"
                  className="input input-bordered"
                />
                {errors.PhotoUrl && (
                  <span className="text-red-500">Photo Url required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 18,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    password is required min 6 character max: 18
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    password is required max: 18 character long
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    password must have one uppercase one lowercase and one
                    special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirmPassword"
                  {...register("confirmPassword", {
                    required: true,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">confirm password is required</p>
                )}
                {!passwordMatch && (
    <p className="text-red-500">Password does not match</p>
  )}
                
                
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="w-full border-b-2 text-center rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-blue-500 duration-500 mx-auto bg-slate-100 border-blue-600"
                  value="Continue"
                />
              </div>
              <Link
                to="/login"
                className="text-blue-600 text-center hover:underline"
              >
                Already have an account?{" "}
                <span className="font-bold ">Please Login</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
