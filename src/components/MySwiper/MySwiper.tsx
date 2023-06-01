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
  console.log();

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
            <SwiperCard
              title={"Yes or No"}
              description={
                "https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif"
              }
              link={"/yesno"}
            ></SwiperCard>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard
              title={"The best todos in the world??"}
              description={"https://i.imgur.com/1CssljC.gif"}
              link={"/todos"}
            ></SwiperCard>
          </SwiperSlide>
          <SwiperSlide> <SwiperCard
              title={"Github API"}
              description={"https://media3.giphy.com/media/lGD7VxrtwNalqhx68w/giphy.gif?cid=ecf05e47dgyu9r5700ne8taeysrktu5xlznsgbpe7seoawmn&ep=v1_gifs_search&rid=giphy.gif&ct=g"}
              link={"/github"}
            ></SwiperCard></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default MySwiper;
