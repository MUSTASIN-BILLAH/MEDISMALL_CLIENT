import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import UseAuth from "../Hooks/UseAuth";
import SocialLogin from "./socialLogin";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser } = UseAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Registered data:", data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log("User created:", user);

        // Update displayName & photoURL
        updateProfile(user, {
          displayName: data.fullName,
          photoURL: data.photoURL,
        })
          .then(() => {
            console.log("Profile updated successfully!");
            navigate("/"); // Redirect to home page
          })
          .catch((err) => console.error("Profile update error:", err));
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <fieldset className="space-y-4">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

          {/* Full Name */}
          <div>
            <label className="label">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className="input input-bordered w-full"
              placeholder="Your full name"
            />
            {errors.fullName?.type === "required" && (
              <p className="text-red-500 text-sm" role="alert">
                Full name is required
              </p>
            )}
          </div>

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

          {/* Photo URL */}
          <div>
            <label className="label">Photo URL</label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              className="input input-bordered w-full"
              placeholder="Link to your photo"
            />
            {errors.photoURL?.type === "required" && (
              <p className="text-red-500 text-sm" role="alert">
                Photo URL is required
              </p>
            )}
          </div>

          <div className="text-center">
            <SocialLogin />
          </div>

          <button type="submit" className="btn btn-neutral w-full mt-4">
            Register
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
