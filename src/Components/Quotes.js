import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Quotes() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>{`Making money in the stock market \n is much easier than keeping it`}</SwiperSlide>
        <SwiperSlide>{`The biggest risk of all \n is not taking any Risks.`}</SwiperSlide>
        <SwiperSlide>{`In short run, Market is a voting machine. \n In long run, It's a weighing machine.`}</SwiperSlide>
        <SwiperSlide>{`The stock market is a device to transfer \n money from the impatient to the patient.`}</SwiperSlide>
      </Swiper>
    </div>
  );
}
