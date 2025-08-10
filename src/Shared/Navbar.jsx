import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className=" px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/medsmall-logo.svg" alt="MedSmall LOGO" className="w-8 h-8" />
          <span className="text-xl font-bold">MedSmall</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Shop</a>
          <ShoppingCart className="w-5 h-5" />
          <select className="border rounded px-2 py-1">
            <option>EN</option>
            <option>BN</option>
            <option>FR</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Join Us
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-3">
          <a href="#" className="block hover:text-blue-600">Home</a>
          <a href="#" className="block hover:text-blue-600">Shop</a>
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5" />
            <select className="border rounded px-2 py-1">
              <option>EN</option>
              <option>BN</option>
              <option>FR</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Join Us
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
