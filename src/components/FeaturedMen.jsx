import React, { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore.js";
import LoadingSpinner from "./LoadingSpinner.jsx";
import FeaturedProductCard from "./FeaturedProductCard.jsx";

const FeaturedMen = () => {
  const { getMenFeatured, featuredMen, loading } = useProductStore();

  useEffect(() => {
    getMenFeatured();
  }, [getMenFeatured]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <LoadingSpinner />
      </div>
    );
  }

  if (!featuredMen || featuredMen.length === 0) {
    return <div>No featured products available</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {featuredMen.map((product) => (
        <FeaturedProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedMen;
