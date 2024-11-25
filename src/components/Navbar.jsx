import React, { useState } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsPerson,
  BsHeart,
  BsCart,
  BsSearch,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useUserStore } from "../stores/useUserStore.js";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const { user, logout } = useUserStore();
  const navigate = useNavigate(); // To navigate after logout

  const handleLogout = async () => {
    await logout(); // Call the logout function from the store
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="header fixed top-0 w-full bg-white shadow-md z-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 text-sm">
        <div className="flex items-center space-x-4">
          <span>English</span>
          <span>USD</span>
          <span>Order Online Call (0123) 456789</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/signup"
            className="hover:text-black transition duration-500"
          >
            Signup
          </Link>
          <span>/</span>
          <Link
            to="/login"
            className="hover:text-black transition duration-500"
          >
            Login
          </Link>
          <ul className="flex items-center space-x-2">
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsYoutube />
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <Link to="/" className="w-40 h-10">
            <img src="/images/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-6">
          <Link
            to="/"
            className="hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            to={"/products"}
            className="hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg whitespace-nowrap"
          >
            Products
          </Link>
          <Link
            to={"/categories"}
            className="hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg whitespace-nowrap"
          >
            Categories
          </Link>
          <Link
            to={'/services'}
            className="hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg whitespace-nowrap"
          >
            Services
          </Link>
          <Link
            to={'/contactus'}
            className="hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>

        {/* Icons for Desktop */}
        <div className="hidden lg:flex flex-1 justify-end items-center space-x-4">
          <BsSearch />
          <div className="relative">
            {/* Profile Dropdown */}
            {!isProfileDropdownOpen ? (
              <BsPerson
                className="cursor-pointer"
                onClick={toggleProfileDropdown}
              />
            ) : (
              <FiX
                size={24}
                className="cursor-pointer"
                onClick={toggleProfileDropdown}
              />
            )}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                <ul className="py-2 text-sm text-gray-800">
                  <Link to={"/profile"}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      My Profile
                    </li>
                  </Link>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Orders
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
          <BsHeart />
          <BsCart />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center ml-auto">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 pb-4">
          <div className="flex flex-col space-y-4 w-full items-center">
            <Link
              to="/"
              className="hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              to={"/products"}
              className="hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg"
            >
              Products
            </Link>
            <Link
              to={"/categories"}
              className="hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg"
            >
              Categories
            </Link>
            <Link
              to={'/services'}
              className="hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg"
            >
              Services
            </Link>
            <Link
              to={'/contactus'}
              className="hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Icons Section (Row Layout) */}
          <div className="flex justify-center space-x-6 items-center w-full mt-4 border-t pt-4">
            <BsSearch className="cursor-pointer" />
            <div className="relative">
              {/* Profile Icon and Dropdown */}
              <BsPerson
                className="cursor-pointer"
                onClick={toggleProfileDropdown}
              />
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  <ul className="py-2 text-sm text-gray-800">
                    <Link to={"/profile"}>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        My Profile
                      </li>
                    </Link>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Orders
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Settings
                    </li>
                    <li
                      onClick={handleLogout}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <BsHeart className="cursor-pointer" />
            <BsCart className="cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
