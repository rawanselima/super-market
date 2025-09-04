import React from "react";
import CategoryBox from "./CategoryBox";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderContainer from "../common/SliderContainer";
const Category = () => {
  return (
    <SliderContainer header="Featured Categories" largeScreen={7} mediumScreen={4} smallScreen={2}>
      <SwiperSlide>
        <CategoryBox />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryBox />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryBox />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryBox />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryBox />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryBox />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryBox />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryBox />
      </SwiperSlide>
    </SliderContainer>
  );
};

export default Category;
