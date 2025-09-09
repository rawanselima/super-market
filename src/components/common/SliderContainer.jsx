import React, { useRef } from "react";
import HeaderSection from "../common/HeaderSection";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "swiper/css";
const SliderContainer = ({
  header,
  children,
  largeScreen,
  mediumScreen,
  smallScreen,
}) => {
  const styleArrowBtn =
    "p-2 mx-1 bg-light-gray text-dark-gray rounded-full hover:bg-green hover:text-white cursor-pointer transition-all duration-300";
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section>
      <div className="flex justify-between items-center">
        <HeaderSection showByMargin={true}> {header} </HeaderSection>
        <div className="md:px-0 px-3">
          <button ref={prevRef} className={styleArrowBtn}>
            <IoIosArrowBack />
          </button>
          <button ref={nextRef} className={styleArrowBtn}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="mx-2 md:px-0 px-3">
        <Swiper
          slidesPerView={smallScreen}
          spaceBetween={10}
          modules={[Navigation]}
          pagination={{
            clickable: true,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: {
              slidesPerView: smallScreen,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: mediumScreen,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: largeScreen,
              spaceBetween: 50,
            },
          }}
          className="mySwiper !py-10 !px-3"
        >
          {children}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderContainer;
