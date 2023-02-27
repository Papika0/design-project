import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }) => (
  <button
    className="hidden lg:block absolute top-2/3 left-24 transform -translate-y-1/2 z-10 focus:outline-none"
    onClick={onClick}
  >
    <img src="./left-arrow.svg" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="hidden lg:block absolute top-2/3 right-24 transform -translate-y-1/2 z-10 focus:outline-none"
    onClick={onClick}
  >
    <img src="./right-arrow.svg" />
  </button>
);

const BackgroundCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    swipeToSlide: true,
    touchThreshold: 10,
  };

  const images = ["/images/1.png", "/images/2.jpg", "/images/3.jpg"];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image} className="w-full h-full">
            <img
              className="object-cover w-full h-full md:h-screen max-[769px]:h-screen"
              src={image}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundCarousel;
