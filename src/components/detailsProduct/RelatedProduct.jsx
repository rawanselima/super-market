import React from "react";
import ProductCard from "../common/ProductCard";
import HeaderSection from "../common/HeaderSection";
import { motion } from "framer-motion";
import { containerVariant } from "../../animation/animationVariable";
import { childVariant } from "../../animation/animationVariable";
import SliderContainer from "../common/SliderContainer";
import { SwiperSlide } from "swiper/react";
const RelatedProduct = () => {
  return (
    <>
      {/* <HeaderSection showByMargin={true}> Related Products </HeaderSection>
      <motion.div
        className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 gap-4 md:px-0 px-3"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div variants={childVariant}>
          <ProductCard />
        </motion.div>
        <motion.div variants={childVariant}>
          <ProductCard />
        </motion.div>
        <motion.div variants={childVariant}>
          <ProductCard />
        </motion.div>
        <motion.div variants={childVariant}>
          <ProductCard />
        </motion.div>
        <motion.div variants={childVariant}>
          <ProductCard />
        </motion.div>
      </motion.div> */}

      <SliderContainer
        header={"Related Products"}
        largeScreen={5}
        mediumScreen={3}
        smallScreen={2}
      >
        <SwiperSlide>
          <motion.div variants={childVariant}>
            <ProductCard />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div variants={childVariant}>
            <ProductCard />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div variants={childVariant}>
            <ProductCard />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div variants={childVariant}>
            <ProductCard />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div variants={childVariant}>
            <ProductCard />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div variants={childVariant}>
            <ProductCard />
          </motion.div>
        </SwiperSlide>
      </SliderContainer>
    </>
  );
};

export default RelatedProduct;
