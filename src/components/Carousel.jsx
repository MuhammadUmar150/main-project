import React, { useState, useEffect } from 'react';


const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [images.length, interval]);

  return (
    <div className="container carousel1">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
