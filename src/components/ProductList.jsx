import React, { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore.js";
import LoadingSpinner from "./LoadingSpinner.jsx";

const ProductList = () => {
  const { products, getAllProducts, loading } = useProductStore();
  console.log(products);

  useEffect(() => {
    // Fetch products only if they are not already loaded
    if (!products || products.length === 0) {
      getAllProducts();
    }
  }, [products, getAllProducts]); // Dependency on products to avoid re-fetching once loaded

  return (
    <div className="min-h-screen bg-white flex flex-col items-center relative">
      {/* Show the loader if data is still loading */}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
          <LoadingSpinner />
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-6 p-6 bg-white w-full">
        {products?.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-xs p-4 border border-black bg-white shadow-md rounded-lg transition duration-300 ease-in-out hover:scale-105"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
              <p className="text-gray-700 font-semibold">Price: ${product.price}</p>
              <p className="text-gray-700">Category: {product.category}</p>
              <p className="text-gray-700">Featured: {product.isFeatured ? "Yes" : "No"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
