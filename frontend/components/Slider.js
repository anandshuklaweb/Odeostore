import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel>
      <div>
        <img src="https://trendbeat.vercel.app/banner2.jpg" />
      </div>
      <div>
        <img src="https://trendbeat.vercel.app/banner2.jpg" />
      </div>
      <div>
        <img src="https://trendbeat.vercel.app/banner2.jpg" />
      </div>
    </Carousel>
  );
};

export default Slider;
