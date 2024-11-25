import React, { useState } from "react";
import { motion } from "framer-motion";
import { useProductStore } from "../stores/useProductStore.js";
import { Upload } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner.jsx";

const categories = ["Men", "Women", "Shoes", "Sunglasses"];

const ProductForm = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    isFeatured: false,
    onSale: false,
  });
  
  const { createProduct, loading } = useProductStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(newProduct);
      // Reset form
      setNewProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
        isFeatured: false,
        onSale: false,
      });
    } catch (error) {
      console.log("Error creating product");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result });
      };

      reader.readAsDataURL(file); // base64
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: checked, // Update the specific field (either isFeatured or onSale)
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white border border-black p-8 shadow-lg rounded-lg"
      >
        <form onSubmit={handleSubmit} className="product-form bg-white border text-black p-8 rounded-md shadow-lg max-w-md mx-auto">
          {/* Product Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 bg-white border-b-2 border-black text-black focus:outline-none focus:border-gray-700"
              placeholder="Enter product name"
              value={newProduct.name || ""}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              className="w-full p-2 bg-white border-b-2 border-black text-black focus:outline-none focus:border-gray-700"
              placeholder="Enter product description"
              value={newProduct.description || ""}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              required
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <input
              type="file"
              id="image"
              className="sr-only"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <label
              htmlFor="image"
              className="cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <Upload className="h-5 w-5 inline-block mr-2" />
              Upload Image
            </label>
            <h3 className="m-1 rounded-lg text-black">Image</h3>
            {newProduct.image && <span className="ml-3 text-sm text-gray-400">Image uploaded</span>}
          </div>

          {/* Price */}
          <div className="mb-4 flex items-center">
            <label htmlFor="price" className="block text-gray-700 text-sm font-medium mb-1">
              Price
            </label>
            <span className="p-2 bg-white border-b-2 border-black text-black">$</span>
            <input
              type="number"
              id="price"
              className="w-full p-2 bg-white border-b-2 border-black text-black focus:outline-none focus:border-gray-700"
              placeholder="Enter product price"
              value={newProduct.price || ""}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              min="0"
              step="0.5"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-2">
            <label htmlFor="category" className="block text-sm font-medium text-gray-800">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={newProduct.category || ""}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Featured */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="isFeatured"
              name="isFeatured"
              className="text-black focus:ring-0"
              checked={newProduct.isFeatured}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="isFeatured" className="ml-2 text-gray-700 text-sm">
              Is Featured
            </label>
          </div>

          {/* On Sale */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="onSale"
              name="onSale"
              className="text-black focus:ring-0"
              checked={newProduct.onSale}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="onSale" className="ml-2 text-gray-700 text-sm">
              On Sale
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-200"
            disabled={loading}
          >{
            loading? (
              <LoadingSpinner />
            ):(
              "Add Product"
            )
          }
            
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ProductForm;
