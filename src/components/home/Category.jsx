import React from "react";
import CategoryBox from "./CategoryBox";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderContainer from "../common/SliderContainer";
import { motion } from "framer-motion";
import { containerVariant } from "../../animation/animationVariable";
import { childVariant } from "../../animation/animationVariable";
const Category = () => {
  return (
    <motion.div
      className="mt-16"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <SliderContainer
        header="Featured Categories"
        largeScreen={7}
        mediumScreen={4}
        smallScreen={2}
      >
        <SwiperSlide>
          <motion.div variants={childVariant}>
            <CategoryBox />
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.div variants={childVariant}>
            <CategoryBox />
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.div variants={childVariant}>
            <CategoryBox />
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.div variants={childVariant}>
            <CategoryBox />
          </motion.div>
        </SwiperSlide>
      </SliderContainer>
    </motion.div>
  );
};

export default Category;
