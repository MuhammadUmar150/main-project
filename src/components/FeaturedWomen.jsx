import React, { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore.js";
import LoadingSpinner from "./LoadingSpinner.jsx";
import FeaturedProductCard from "./FeaturedProductCard.jsx";

const FeaturedWomen = () => {
  const { getWomenFeatured, featuredWomen, loading } = useProductStore();

  useEffect(() => {
    getWomenFeatured();
  }, [getWomenFeatured]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {featuredWomen && featuredWomen.length > 0 ? (
        featuredWomen.map((product) => (
          <FeaturedProductCard key={product._id} product={product} />
        ))
      ) : (
        <p>No featured products available</p>
      )}
    </div>
  );
};

export default FeaturedWomen;
