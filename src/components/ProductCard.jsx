import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const ProductCard = ({ product }) => {
  console.log(product)
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white transform hover:scale-105 transition-transform duration-200 ease-in-out">
      {/* Link to the product detail page */}
      <Link to={`/product/${product._id}`}>
        <img
          className="w-full h-48 object-cover"
          src={product.image}
          alt={product.name}
        />
      </Link>

      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-2xl font-semibold mb-2 text-lime-500 hover:text-lime-400 transition-colors">{product.name}</h3>

        {/* Product Description */}
        <p className="text-gray-400 text-sm mb-4">{product.description}</p>

        <div className="flex justify-between items-center mt-4">
          {/* Product Price */}
          <span
            className={`text-lg font-semibold ${
              product.onSale ? "text-green-400" : "text-white"
            }`}
          >
            ${product.price}
          </span>

          {/* On Sale Badge */}
          {product.onSale && (
            <span className="text-sm bg-red-500 px-2 py-1 rounded-full text-white">
              On Sale
            </span>
          )}
        </div>

        {/* View Details Button */}
        <Link to={`/product/${product._id}`}>
          <button className="mt-4 bg-lime-500 text-gray-900 py-2 px-4 rounded-full hover:bg-lime-400 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
