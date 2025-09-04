import React from "react";
import Button from "../common/Button";
import HeaderSection from "../common/HeaderSection";
const Banner = () => {
  const dataBanners = [
    {
      image: "bg-[url('/assets/banner-1.png')]",
      text: "Everyday Fresh & Clean with Our Products",
    },
    {
      image: "bg-[url('/assets/banner-2.png')]",
      text: "Make your Breakfast Healthy and Easy",
    },
    {
      image: "bg-[url('/assets/banner-3.png')]",
      text: "The Best Organic Products Online",
    },
  ];

  return (
    <section className="grid xl:grid-cols-3  gap-4 my-20">
      {dataBanners.map((banner, index) => (
        <div
          key={index}
          className={`${banner.image} bg-cover bg-center rounded min-h-64 p-10 `}
        >
          <h3 className="text-2xl mb-5 font-bold text-dark-green w-3/5">
            {banner.text}
          </h3>

          <Button size={"small"}> Shop Now </Button>
        </div>
      ))}
    </section>
  );
};

export default Banner;
