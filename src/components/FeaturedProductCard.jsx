import React from "react";

const FeaturedProductCard = ({ product }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 hover:shadow-2xl transform hover:scale-105 transition duration-300 relative">
      {/* Featured Badge */}
      <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs py-1 px-2 rounded-full uppercase font-semibold tracking-wide">
        Featured
      </span>

      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-xl font-semibold text-gray-800 hover:text-pink-600 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>

        <div className="flex justify-between items-center mt-4">
          {/* Price */}
          <span className="font-semibold text-lg text-gray-800">${product.price}</span>

          {/* Sale Indicator */}
          {product.onSale && (
            <span className="text-red-500 text-sm font-medium">On Sale</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
