import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  user:null,
  setUser: (user) => set({ user }),
  loading: false,
  checkingAuth: true,

  signup: async ({ userName, email, password, confirmPassword }) => {
    set({ loading: true });
    if (password !== confirmPassword) {
      set({ loading: false });
      return console.log("Passwords do not match");
    }
    try {
      const res = await axios.post(
        "http://localhost:8000/api/register",
        { userName, email, password, confirmPassword },
        {
          withCredentials: true,
        }
      );
      set({
        user: res.data,
        loading: false,
      });
      console.log("User registered");
    } catch (error) {
      set({ loading: false });
      toast.error("Error while signing up");
    }
  },
  login: async (email, password) => {
    set({ loading: true });
    try {
      const res = await axios.post(
        "http://localhost:8000/api/login",
        { email, password },
        {
          withCredentials: true,
        }
      );
      set({
        user: res.data,
        loading: false,
      });
      console.log("User logged in");
    } catch (error) {
      set({ loading: false });
      toast.error("Error while logging in");
    }
  },
  checkAuth: async (id) => {
    set({ checkingAuth: true });
    try {
      const response = await axios.get(`http://localhost:8000/api/profile`, {
        withCredentials: true,
      });
      console.log("API Response:", response.data); // Debugging
      set({ user: response.data.user, checkingAuth: false }); // Access `response.data.user`
    } catch (error) {
      console.error("Error in checkAuth:", error.message);
      set({ checkingAuth: false, user: null });
    }
  },

  logout: async () => {
    try {
      // Send POST request to the backend logout endpoint
      const response = await axios.post(
        "http://localhost:8000/api/logout",
        null,
        {
          withCredentials: true, // Ensure cookies are sent with the request
        }
      );

      // Clear user data after successful logout
      set({ user: null });

      console.log(response.data.message); // "Logged out successfully"
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  },
}));
