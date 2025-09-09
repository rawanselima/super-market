import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import {
  containerVariant,
  childVariant,
} from "../../animation/animationVariable";
export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const styleArrowBtn =
    "p-2 mx-1 bg-light-gray text-dark-gray rounded-full hover:bg-green hover:text-white cursor-pointer transition-all duration-300";
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const styleImg = "object-cover rounded w-full h-full";
  const styleSlider =
    "bg-cover bg-center rounded cursor-pointer border-light-gray border-2 shadow py-3";

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div variants={childVariant}>
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="mySwiper2 w-full  h-[500px] rounded relative"
        >
          <div className="absolute w-full top-1/2  z-10 flex justify-between px-3">
            <button ref={prevRef} className={styleArrowBtn}>
              <IoIosArrowBack />
            </button>
            <button ref={nextRef} className={styleArrowBtn}>
              <IoIosArrowForward />
            </button>
          </div>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-1.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-2.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-3.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-4.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-5.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-6.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-7.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-8.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
      <motion.div variants={childVariant}>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper slider-products my-2 rounded w-full h-32 py-2"
        >
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-1.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-2.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-3.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-4.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-5.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-6.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-7.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
          <SwiperSlide className={styleSlider}>
            <img
              src="/assets/product-8.png"
              className={styleImg}
              loading="lazy"
              alt="productImg"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </motion.div>
  );
}
