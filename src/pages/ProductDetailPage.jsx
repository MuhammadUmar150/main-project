import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams for accessing URL parameters
import { useProductStore } from "../stores/useProductStore"; // Replace with your actual Zustand store
import LoadingSpinner from "../components/LoadingSpinner"; // Replace with your spinner component

const ProductDetailPage = () => {
  const { id } = useParams(); // Extract the :id from the URL
  const { product, loading, getProductById } = useProductStore((state) => ({
    product: state.product,
    loading: state.loading,
    getProductById: state.getProductById,
  }));

  // Fetch product details when the component mounts or id changes
  useEffect(() => {
    if (id) {
      getProductById(id); // Fetch product details using the extracted id
    }
  }, [id, getProductById]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 p-8 rounded-lg shadow-xl">
          {/* Product Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-3/4 h-auto object-contain rounded-lg"
            />
          </div>

          {/* Product Information */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-semibold text-lime-500 mb-4 hover:text-lime-400 transition-colors">
              {product?.name || "Product Name"}
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              {product?.description || "Product description not available."}
            </p>
            <p className="text-xl font-bold text-white mb-6">
              ${product?.price || "N/A"}
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Category:{" "}
              <span className="text-gray-300 font-medium">
                {product?.category || "Unknown"}
              </span>
            </p>
            {product?.onSale && (
              <span className="bg-red-600 text-white text-sm py-1 px-3 rounded-full mb-4 inline-block">
                On Sale
              </span>
            )}

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="bg-lime-500 text-gray-900 py-3 px-8 rounded-full hover:bg-lime-400 transition-colors duration-300 cursor-pointer">
                Add to Cart
              </button>
              <button className="bg-gray-700 text-white py-3 px-8 rounded-full hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Product Details Section */}
        <div className="mt-10 bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-6">Product Details</h2>
          <div className="text-gray-400 space-y-4">
            <p>
              <strong>Brand:</strong> {product?.brand || "N/A"}
            </p>
            <p>
              <strong>Stock:</strong> {product?.stock || "Out of Stock"}
            </p>
            <p>
              <strong>Dimensions:</strong> {product?.dimensions || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
