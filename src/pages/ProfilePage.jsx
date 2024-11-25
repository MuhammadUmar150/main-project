import React, { useEffect } from "react";
import { BsCardList } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore.js";

const ProfilePage = () => {
  const {id} = useParams();
  const { user, checkAuth, checkingAuth } = useUserStore();
  
  useEffect(() => {
    if(id){
      checkAuth(id);
    }
  }, [checkAuth]);
  console.log(user)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Profile Header */}
      <div className="bg-gray-900 p-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-gray-600">
            {/* Profile picture (placeholder) */}
          </div>
          <div>
            <h1 className="text-2xl font-semibold">John Doe</h1>
            <p className="text-sm text-gray-400">john.doe@example.com</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">
        {/* Personal Information Section */}
        <div className="bg-gray-800 p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-gray-400">Full Name</label>
              <span>John Doe</span>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-400">Email</label>
              <span>john.doe@example.com</span>
            </div>
          </div>
        </div>

        {/* Orders Section */}
        <div className="bg-gray-800 p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold mb-4">My Orders</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4 items-center">
                <BsCardList />
                <span>Order #12345</span>
              </div>
              <span className="text-sm text-gray-400">Completed</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4 items-center">
                <BsCardList />
                <span>Order #12346</span>
              </div>
              <span className="text-sm text-gray-400">Shipped</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4 items-center">
                <BsCardList />
                <span>Order #12347</span>
              </div>
              <span className="text-sm text-gray-400">Processing</span>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-gray-800 p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <Link to="/change-password" className="block hover:text-blue-400">
              Change Password
            </Link>
            <Link to="/delete-account" className="block hover:text-red-400">
              Delete Account
            </Link>
          </div>
        </div>

        {/* Logout Button */}
        <div className="flex justify-end bg-red-600 px-6 py-3 rounded-md text-white hover:bg-red-700">
          <button className="bg-red-600 px-6 py-3 rounded-md text-white hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
