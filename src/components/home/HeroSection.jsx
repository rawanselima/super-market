import React from "react";
import Button from "../common/Button";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="bg-[url(/assets/heroSection.png)] min-h-[500px] bg-no-repeat bg-cover bg-right rounded-3xl">
      <div className="py-30 md:px-20 px-5">
        <h1 className="md:text-6xl text-4xl font-bold text-dark-green">
          Fresh Vegetables <br /> Big discount
        </h1>
        <p className="text-dark-gray font-light text-xl my-5">
          Save up to 50% off on your first order
        </p>
        <Button>
          Shop Now
          <span className="text-sm ml-2 mt-1">
            <FaArrowRightLong />
          </span>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
