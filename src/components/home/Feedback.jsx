import React from "react";
import { SwiperSlide } from "swiper/react";
import SliderContainer from "../common/SliderContainer";
import FeedbackBox from "./FeedbackBox";
import { motion } from "framer-motion";
import { containerVariant } from "../../animation/animationVariable";
import { childVariant } from "../../animation/animationVariable";
const Feedback = () => {
  return (
    <motion.div
      className="my-5"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <SliderContainer
        header="Customers FeedBack"
        largeScreen={4}
        mediumScreen={2}
        smallScreen={1}
      >
        <SwiperSlide>
          <motion.div variants={childVariant}>
            <FeedbackBox />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div variants={childVariant}>
            <FeedbackBox />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div variants={childVariant}>
            <FeedbackBox />
          </motion.div>
        </SwiperSlide>
      </SliderContainer>
    </motion.div>
  );
};

export default Feedback;
