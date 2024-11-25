

import React, { useEffect, useState } from "react";
import { useProductStore } from "../stores/useProductStore.js";
import ProductCard from "../components/ProductCard.jsx";
import Sidebar from "../components/Sidebar.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const ProductsPage = () => {
  const { getAllProducts, getProductsByCategory, products, loading } = useProductStore();
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch all products or filter by selected category
  useEffect(() => {
    if (selectedCategory) {
      getProductsByCategory(selectedCategory);
    } else {
      getAllProducts();
    }
  }, [selectedCategory, getAllProducts, getProductsByCategory]);

  return (
    <div className="container mx-auto p-4 flex h-screen products">
      {/* Sidebar for category selection */}
      <Sidebar onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      {/* Products Section with responsive grid and vertical scroll */}
      <div className="ml-4 w-full overflow-y-auto h-full bg-gray-900 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-white">
          {selectedCategory ? `${selectedCategory} Products` : "All Products"}
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products && products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={
                  product
                  }
                />
              ))
            ) : (
              <p className="text-white">No products available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;









