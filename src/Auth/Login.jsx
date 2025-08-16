import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = UseAuth(); // from your AuthProvider
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log("Login successful:", result.user);
        navigate("/"); // Redirect to home page
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <fieldset className="space-y-4">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 text-sm" role="alert">
                Email is required
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm" role="alert">
                Password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm" role="alert">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          <div className="text-right">
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-neutral w-full mt-4">
            Login
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
