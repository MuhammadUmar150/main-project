import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Navbar />

      <main className="mt-32">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
