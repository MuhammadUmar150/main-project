import React, { useState } from "react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore.js";
import LoadingSpinner from "../components/LoadingSpinner.jsx";


const SignupPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { signup, loading } = useUserStore(); // Ensure `loading` is available from the store

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData); // Trigger signup on form submit
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Animated Form Container */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white border border-black p-8 shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="appearance-none border border-black w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-black"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={formData.userName}
              onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border border-black w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-black"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border border-black w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-black"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="appearance-none border border-black w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-black"
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>

          {/* Animated Sign Up Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center">
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-200"
              type="submit"
              disabled={loading} // Disable the button if loading
            >
              {loading ? (
                <LoadingSpinner /> // Show loader while loading
              ) : (
                "Sign Up"
              )}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignupPage;
