'use client'
import React, { useState, useEffect } from 'react';

const Slider = ({ slides, autoSlideInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, autoSlideInterval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="row py-5 slider feature brands">
      <div className="col-lg-12">
        <div className="slider-container">
          {slides.map((brand, index) => (
            <div
              key={index}
              className={`card me-2 mt-3 ${index === currentIndex ? 'active' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <span><img className="img-fluid" src={brand.src} alt="" /></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
