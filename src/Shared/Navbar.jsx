import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = UseAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-roboto-slab text-3xl">
          <span className="font-extrabold text-emerald-700 -mr-2">Med</span>
          <img
            src="/medsmall-logo.svg"
            alt="MedSmall LOGO"
            className="w-8 h-8"
          />
          <span className="font-extrabold text-emerald-700 -ml-2">Small</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Shop
          </a>
          <ShoppingCart className="w-5 h-5" />
          <select className="border rounded px-2 py-1">
            <option>EN</option>
            <option>BN</option>
            <option>FR</option>
          </select>

          {user ? (
            <div className="flex items-center gap-4">
              {/* Profile Picture */}
              <img
                src={user.photoURL || "/default-avatar.png"} // fallback if no photoURL
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />

              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Join Us
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-3">
          <a href="#" className="block hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block hover:text-blue-600">
            Shop
          </a>
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5" />
            <select className="border rounded px-2 py-1">
              <option>EN</option>
              <option>BN</option>
              <option>FR</option>
            </select>
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              {/* Profile Picture */}
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />

              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded w-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              Join Us
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
