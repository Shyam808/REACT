import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-sky-900 text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          🛍️ ZomatoMall
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/product" className="hover:text-yellow-300 transition">Products</Link>
          <Link to="/addseller" className="hover:text-yellow-300 transition">Add Seller</Link>
          <Link to="/login" className="hover:text-yellow-300 transition">Login / Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
