import React from "react";
import { SwiperSlide } from "swiper/react";
import SliderContainer from "../common/SliderContainer";
import FeedbackBox from "./FeedbackBox";

const Feedback = () => {
  return (
    <div className="my-5" >
      <SliderContainer
        header="Customers FeedBack"
        largeScreen={4}
        mediumScreen={2}
        smallScreen={1}
      >
        <SwiperSlide>
          <FeedbackBox />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox />
        </SwiperSlide>
      </SliderContainer>
    </div>
  );
};

export default Feedback;
