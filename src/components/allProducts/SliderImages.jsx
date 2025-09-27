import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { memo } from "react";
import PopUp from "../common/PopUp";

const SliderImages = ({ isOpen, setIsOpen, imageProduct }) => {
  return (
    <PopUp isOpen={isOpen} setIsOpen={setIsOpen} title={"Image Products"}>
      <div className="relative w-full max-w-lg mx-auto">
        <Carousel className="relative overflow-hidden">
          <CarouselContent className="w-full">
            {imageProduct.map((img, index) => {
              return (
                <CarouselItem key={index}>
                  <img
                    src={img}
                    alt="SliderImage"
                    loading="lazy"
                    className="w-full h-80 object-cover"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious className="left-2 z-10" />
          <CarouselNext className="right-2 z-10" />
        </Carousel>
      </div>
    </PopUp>
  );
};

export default memo(SliderImages);
