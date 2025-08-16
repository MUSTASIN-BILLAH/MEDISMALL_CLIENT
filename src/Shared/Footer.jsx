import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Name */}
        <div className="text-lg font-bold">MedSmall</div>

        {/* Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-emerald-400">
            Home
          </a>
          <a href="#" className="hover:text-emerald-400">
            Shop
          </a>
          <a href="#" className="hover:text-emerald-400">
            About
          </a>
          <a href="#" className="hover:text-emerald-400">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
          © {new Date().getFullYear()} MedSmall. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
