// Sidebar.jsx

import React from "react";

const categories = ["All Products", "Men", "Women", "Shoes", "Sunglasses"];

const Sidebar = ({ onSelectCategory, selectedCategory }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md border border-black">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onSelectCategory(category === "All Products" ? "" : category)}
            className={`cursor-pointer p-2 rounded-md mb-2 transition-colors duration-200 ${
              selectedCategory === category || (category === "All Products" && selectedCategory === "")
                ? "bg-black text-white font-bold"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
