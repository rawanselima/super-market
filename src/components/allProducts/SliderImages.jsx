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
    <PopUp isOpen={isOpen} setIsOpen={setIsOpen} title={"Image Products"}>
      <div className="relative w-full max-w-lg mx-auto">
        <Carousel className="relative overflow-hidden">
          <CarouselContent className="w-full">
            <CarouselItem>
              <img
                src="/assets/product-9.png"
                alt="SliderImage"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/assets/product-7.png"
                alt="SliderImage"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/assets/product-3.png"
                alt="SliderImage"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="left-2 z-10" />
          <CarouselNext className="right-2 z-10" />
        </Carousel>
      </div>
    </PopUp>
  );
};

export default SliderImages;
