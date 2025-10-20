import React from "react";
import { SwiperSlide } from "swiper/react";
import SliderContainer from "../common/SliderContainer";
import FeedbackBox from "./FeedbackBox";
import { motion } from "framer-motion";
import { containerVariant } from "../../animation/animationVariable";
import { childVariant } from "../../animation/animationVariable";
import useFetchAllFeedback from "../detailsProduct/useFetchAllFeedback";
const Feedback = () => {
  const { data, isLoading, isError } = useFetchAllFeedback();
  if (isLoading || isError) return;
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
        {data &&
          data.map((ele) => {
            return (
              <SwiperSlide key={ele.id}>
                <motion.div variants={childVariant}>
                  <FeedbackBox data={ele} />
                </motion.div>
              </SwiperSlide>
            );
          })}
      </SliderContainer>
    </motion.div>
  );
};

export default Feedback;
