import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductForm from "../components/ProductForm.jsx";
import ProductList from "../components/ProductList.jsx";
import AnalyticsTab from "../components/AnalyticsTab.jsx";

const tabs = [
  { id: "create", label: "Add Product", icon: PlusCircle },
  { id: "products", label: "Manage Products", icon: ShoppingBasket },
  { id: "analytics", label: "View Analytics", icon: BarChart },
];

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState("create");
  
    return (
      <div className="min-h-screen bg-gray-800 text-gray-200 flex flex-col items-center py-16">
        <motion.h1
          className="text-4xl font-bold mb-8 text-gray-200 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Admin Control Panel
        </motion.h1>
  
        <div className="flex justify-center mb-8 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-white text-black"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <tab.icon className="mr-2 h-5 w-5" />
              {tab.label}
            </button>
          ))}
        </div>
  
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full max-w-3xl">
          {activeTab === "create" && <ProductForm />}
          {activeTab === "products" && <ProductList />}
          {activeTab === "analytics" && <AnalyticsTab />}
        </div>
      </div>
    );
  };
  
  export default AdminPage;
