import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React from "react";
import PopUp from "../common/PopUp";

const SliderImages = ({ isOpen, setIsOpen }) => {
  return (
    <PopUp isOpen={isOpen} setIsOpen={setIsOpen}>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="w-full h-full">
            <img
              src="/assets/product-9.png"
              alt="SliderImage"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img src="/assets/product-7.png" alt="SliderImage" loading="lazy" />
          </CarouselItem>
          <CarouselItem>
            <img src="/assets/product-3.png" alt="SliderImage" loading="lazy" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </PopUp>
  );
};

export default SliderImages;
