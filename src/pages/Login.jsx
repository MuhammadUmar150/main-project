import React, { useState } from "react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore.js";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import { Link } from "react-router-dom";
// Import the Loader component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white border border-black p-8 shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-black font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-black focus:outline-none text-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-black font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-black focus:outline-none text-black"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Animated Login Button */}
          <motion.div
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            className="flex items-center justify-center"
          >
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-200 flex items-center justify-center"
              type="submit"
              disabled={loading}
            >
              {loading ? <LoadingSpinner /> : "Login"}
            </button>
          </motion.div>
        </form>

        {/* Signup Link */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-blue-500 hover:text-blue-700">
              Signup
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
