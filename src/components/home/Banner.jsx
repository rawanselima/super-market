import React from "react";
import Button from "../common/Button";
import HeaderSection from "../common/HeaderSection";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();

  const dataBanners = [
    {
      image: "bg-[url('/assets/banner-1.webp')]",
      text: "Everyday Fresh & Clean with Our Products",
    },
    {
      image: "bg-[url('/assets/banner-2.webp')]",
      text: "Make your Breakfast Healthy and Easy",
    },
    {
      image: "bg-[url('/assets/banner-3.webp')]",
      text: "The Best Organic Products Online",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.3,
      },
    },
  };

  const childrenVariants = [
    {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 },
    },
    {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
  ];

  return (
    <motion.section
      className="grid xl:grid-cols-3  gap-4 my-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {dataBanners.map((banner, index) => (
        <motion.div
          key={index}
          className={`${banner.image} bg-cover bg-center rounded min-h-64 p-10 `}
          variants={childrenVariants[index]}
        >
          <h3 className="text-2xl mb-5 font-bold text-dark-green w-3/5">
            {banner.text}
          </h3>

          <Button size={"small"} navigate={() => navigate("/products")}>
            Shop Now
          </Button>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Banner;
