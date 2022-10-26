import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import one from "../../assets/slider/s-1.jpg";
import two from "../../assets/slider/s-2.jpg";
import three from "../../assets/slider/s-3.jpg";
import four from "../../assets/slider/s-4.jpg";
import five from "../../assets/slider/s-5.jpg";
import six from "../../assets/slider/s-6.png";
import seven from "../../assets/slider/s-7.webp";

const Slider = () => {
  return (
    <div>
      <div className="font-bold mt-20 text-center text-gray-600">
        <h1 className="text-5xl">Our Courses</h1>
        <hr className="border border-blue-400 mt-3 w-[50%] mx-auto" />
      </div>
      <div className="mt-40 mb-5">
        <Swiper
          effect={"coverflow"}
          slidesPerView={2}
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="h-[40vh] rounded" src={one} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[40vh] rounded" src={two} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[40vh] rounded" src={three} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[40vh] rounded" src={four} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[40vh] rounded" src={five} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[40vh] rounded" src={six} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[40vh] rounded" src={seven} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
