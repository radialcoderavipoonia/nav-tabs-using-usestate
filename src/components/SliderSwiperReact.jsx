import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import canadaimg from "../assets/images/png/canada.jpg";
import londonimg from "../assets/images/png/london.jpg";
import parisimg from "../assets/images/png/paris.jpg";
const SliderSwiperReact = () => {
  return (
    <>
      <div className="container">
        <div className="dflex justify_center items_center min_100vh py_50">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper "
            slidesPerView={3}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <div className="dflex justify_center items_center">
                <img
                  height={350}
                  width={350}
                  src={canadaimg}
                  alt="canada image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dflex justify_center items_center">
                <img
                  height={350}
                  width={350}
                  src={londonimg}
                  alt="london image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dflex justify_center items_center">
                <img
                  height={350}
                  width={350}
                  src={parisimg}
                  alt="paris image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dflex justify_center items_center">
                <img
                  height={350}
                  width={350}
                  src={canadaimg}
                  alt="canada image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dflex justify_center items_center">
                <img
                  height={350}
                  width={350}
                  src={londonimg}
                  alt="london image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dflex justify_center items_center">
                <img
                  height={350}
                  width={350}
                  src={parisimg}
                  alt="paris image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderSwiperReact;
