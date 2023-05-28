import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "./myswiper.css";
import { Navigation, EffectCube, Pagination } from "swiper";
import "swiper/css/pagination";
import SwiperCard from "../SwiperCard/SwiperCard";

interface MySwiperProps {}

const MySwiper: React.FC<MySwiperProps> = ({}) => {
  return (
    <div className="swiper__screen">
      <div className="swiper__container">
      
        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SwiperCard title={"Yes or No"} description={"https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif"} link={"/yesno"}></SwiperCard>
          </SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>4</SwiperSlide>
          <SwiperSlide>5</SwiperSlide>
          <SwiperSlide>6</SwiperSlide>
          <SwiperSlide>7</SwiperSlide>
          <SwiperSlide>8</SwiperSlide>
          <SwiperSlide>9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default MySwiper;
