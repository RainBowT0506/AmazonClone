import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RESOURCE_DOMAIN } from "../Constant";

function Banner() {
  return (
    <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src={RESOURCE_DOMAIN + "/gi1"} alt="" />
        </div>

        <div>
          <img loading="lazy" src={RESOURCE_DOMAIN + "/6ff"} alt="" />
        </div>

        <div>
          <img loading="lazy" src={RESOURCE_DOMAIN + "/7ma"} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
