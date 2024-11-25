import React from "react";
import Carousel from "../components/Carousel.jsx";
import { motion } from "framer-motion";
import FeaturedMen from "../components/FeaturedMen.jsx";
import FeaturedWomen from "../components/FeaturedWomen.jsx";
import FeaturedShoes from "../components/FeaturedShoes.jsx";
import FeaturedSunglasses from "../components/FeaturedSunglases.jsx";

const Home = () => {
  const images = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png",
  ];
  // const items = [
  //   <div style={{ background: 'skyblue', width: '100%', height: '100%' }}><img className='banner' src='/images/banner1.png' style={{width:"300px"}} alt=''></img></div>,
  //   <div style={{ background: 'skyblue', width: '100%', height: '100%' }}><img className='banner' src='/images/banner2.png' style={{width:"300px"}} alt=''></img></div>,
  //   <div style={{ background: 'skyblue', width: '100%', height: '100%' }}><img className='banner' src='/images/banner3.png' style={{width:"300px"}} alt=''></img></div>,
  // ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex flex-col items-center sm:items-start sm:flex-row sm:justify-between"
      >
        <div className="w-full max-w-lg mx-auto sm:max-w-none relative px-4 sm:px-0">
          <Carousel images={images} interval={3000} />
          <h2 className="text-black bannertext text-sm sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left mt-4 sm:mt-0 px-2 sm:px-0 xs:w-10/12 w-full">
            The Style Starts Here
          </h2>
        </div>
      </motion.div>
      <div className="mx-auto p-6 bg-white">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h1>

        <div className="mb-8 mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Featured Men’s Products
          </h2>
          <span className="block w-80 h-1 bg-pink-500 rounded-lg mt-4 mb-6"></span>{" "}
          {/* Add margin-top and margin-bottom */}
          <FeaturedMen />
        </div>

        <div className="mb-8 mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Featured Women’s Products
          </h2>
          <span className="block w-4/12 h-1 bg-pink-500 rounded-lg mt-4 mb-6"></span>{" "}
          {/* Add margin-top and margin-bottom */}
          <FeaturedWomen />
        </div>

        <div className="mb-8 mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Featured Shoes
          </h2>
          <span className="block w-56 h-1 bg-pink-500 rounded-lg mt-4 mb-6"></span>{" "}
          {/* Add margin-top and margin-bottom */}
          <FeaturedShoes />
        </div>

        <div className="mb-8 mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Featured Sunglasses
          </h2>
          <span className="block w-72 h-1 bg-pink-500 rounded-lg mt-4 mb-6"></span>{" "}
          {/* Add margin-top and margin-bottom */}
          <FeaturedSunglasses />
        </div>
      </div>
    </div>
  );
};

export default Home;
