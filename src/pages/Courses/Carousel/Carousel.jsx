// Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
        <div style={{background:'white'}}>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Carousel;
