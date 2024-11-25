import axios from "axios";
import { create } from "zustand";

export const useProductStore = create((set) => ({
  product: null,
  products: [],
  featuredMen: [],
  featuredWomen: [],
  featuredShoes: [],
  featuredSunglasses: [],
  loading: false,
  setProducts: (products) => set({ products: products }),
  createProduct: async (productData) => {
    set({ loading: true });
    try {
      const res = await axios.post(
        "http://localhost:8000/api/createproduct",
        productData,
        { withCredentials: true }
      );
      set((prevState) => ({
        products: [...prevState.products, res.data],
        loading: false,
      }));
      console.log("Product created successfully");
    } catch (error) {
      toast.error(error.response.data.error);
      set({ loading: false });
    }
  },
  getAllProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("http://localhost:8000/api/products");
      set({ products: response.data, loading: false });
    } catch (error) {
      console.error("Failed to fetch products:", error.message);
      console.error("Response data:", error.response?.data || error);
      set({ loading: false });
    }
  },
  getProductById: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`);
      set({ product: response.data, loading: false });
    } catch (error) {
      console.error("Failed to fetch product:", error.message);
      set({ loading: false });
    }
  },
  getMenFeatured: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(
        "http://localhost:8000/api/products/men/featured"
      );
      set({
        featuredMen: res.data,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch men featured products:", error);
      set({ loading: false });
    }
  },
  getWomenFeatured: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(
        "http://localhost:8000/api/products/women/featured"
      );
      set({
        featuredWomen: res.data,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch women featured products:", error);
      set({ loading: false });
    }
  },
  getShoesFeatured: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(
        "http://localhost:8000/api/products/shoes/featured"
      );
      set({
        featuredShoes: res.data,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch shoes featured products:", error);
      set({ loading: false });
    }
  },
  getSunglassesFeatured: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(
        "http://localhost:8000/api/products/sunglasses/featured"
      );
      set({
        featuredSunglasses: res.data,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch sunglasses featured products:", error);
      set({ loading: false });
    }
  },
  getProductsByCategory: async (Category) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `http://localhost:8000/api/products/category/${Category}`
      );
      set({ products: response.data, loading: false });
    } catch (error) {
      console.error("Failed to fetch products by category:", error.message);
      console.error("Response data:", error.response?.data || error);
      set({ loading: false });
    }
  },
}));
