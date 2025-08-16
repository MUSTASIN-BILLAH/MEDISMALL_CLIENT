import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authImage from "../assets/authImage/authImage.jpg";

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10 px-4">
      {/* Logo */}
      <div
        className="flex items-center gap-2 font-roboto-slab text-3xl cursor-pointer mb-6"
        onClick={() => navigate("/")}
      >
        <span className="font-extrabold text-emerald-700 -mr-2">Med</span>
        <img
          src="/medsmall-logo.svg"
          alt="MedSmall LOGO"
          className="w-8 h-8"
        />
        <span className="font-extrabold text-emerald-700 -ml-2">Small</span>
      </div>

      {/* Main Auth Card */}
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-5xl">
        {/* Left side: Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={authImage}
            alt="Authentication"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side: Form */}
        <div className="lg:w-1/2 w-full flex items-center justify-center p-8 bg-gray-50">
          <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
