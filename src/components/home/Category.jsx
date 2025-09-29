import React from "react";
import CategoryBox from "./CategoryBox";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderContainer from "../common/SliderContainer";
import { motion } from "framer-motion";
import { containerVariant } from "../../animation/animationVariable";
import { childVariant } from "../../animation/animationVariable";
import useFetchCategory from "../Category/useFetchCategory";
import Loader from "../common/Loader";
const Category = () => {
  const { data, isLoading } = useFetchCategory();

  if (isLoading) return <Loader />;

  return (
    <motion.div
      className="mt-16"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <SliderContainer
        header={"Featured Categories"}
        largeScreen={6}
        mediumScreen={3}
        smallScreen={2}
      >
        {data &&
          data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <motion.div variants={childVariant}>
                  <CategoryBox item={item} />
                </motion.div>
              </SwiperSlide>
            );
          })}
      </SliderContainer>
    </motion.div>
  );
};

export default Category;
