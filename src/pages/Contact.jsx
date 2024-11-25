import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import Leaflet to create a custom marker

const Contact = () => {
  // Coordinates for Lahore, Pakistan
  const lahoreCoordinates = [31.5497, 74.3436]; // Lahore Latitude and Longitude

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10">
      {/* Contact Form */}
      <div className="mt-10 max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg shadow-lg relative z-0 mb-16">
        <h3 className="text-3xl font-bold text-center mb-6">Contact Us</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
          </div>
          {/* Message */}
          <div className="flex flex-col mt-6">
            <label className="text-gray-300 mb-2">Message</label>
            <textarea
              placeholder="Write your message"
              rows="5"
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-lime-500 text-gray-900 font-semibold rounded-lg hover:bg-lime-400 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Map Section */}
      <div className="max-w-4xl mx-auto z-0 relative mb-20">
        <h3 className="text-3xl font-bold text-center mb-6 text-gray-300">Our Location</h3>
        <MapContainer
          center={lahoreCoordinates}
          zoom={13} // Set the zoom level to focus on Lahore
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Marker for Lahore */}
          <Marker position={lahoreCoordinates}>
            <Popup>
              <span>Welcome to Lahore!</span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
