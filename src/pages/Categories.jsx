import React, { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";

const Categories = () => {
  const { featuredMen, getMenFeatured, loading: loadingMen } = useProductStore();
  const { featuredWomen, getWomenFeatured, loading: loadingWomen } = useProductStore();
  const { featuredShoes, getShoesFeatured, loading: loadingShoes } = useProductStore();
  const { featuredSunglasses, getSunglassesFeatured, loading: loadingSunglasses } = useProductStore();

  useEffect(() => {
    getMenFeatured();
    getWomenFeatured();
    getShoesFeatured();
    getSunglassesFeatured();
  }, []);

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="w-full h-48 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
    </div>
  );

  // Function to render products or loading state
  const renderProducts = (categoryProducts, loading) => {
    if (loading) {
      return <LoadingSpinner />;
    }
    
    if (categoryProducts?.length > 0) {
      return categoryProducts.map((product) => (
        <div
          key={product.id}
          className="w-full max-w-xs p-4 border border-gray-300 bg-white shadow-md rounded-lg transition duration-300 hover:shadow-xl hover:scale-105 transform"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
            <p className="text-gray-700 font-semibold">Price: ${product.price}</p>
          </div>
        </div>
      ));
    } else {
      return <p className="text-gray-500">No featured products in this category.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-black text-center mb-8">Categories</h1>

      {/* Men Category */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-black mb-4">Men</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderProducts(featuredMen, loadingMen)}
        </div>
      </div>

      {/* Women Category */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-black mb-4">Women</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderProducts(featuredWomen, loadingWomen)}
        </div>
      </div>

      {/* Shoes Category */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-black mb-4">Shoes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderProducts(featuredShoes, loadingShoes)}
        </div>
      </div>

      {/* Sunglasses Category */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-black mb-4">Sunglasses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderProducts(featuredSunglasses, loadingSunglasses)}
        </div>
      </div>
    </div>
  );
};

export default Categories;
