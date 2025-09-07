import React from "react";
import Button from "../common/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { containerVariant } from "../../animation/animationVariable";
import { childTextVariants } from "../../animation/animationVariable";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[url(/assets/heroSection.png)] min-h-[500px] bg-no-repeat bg-cover bg-right rounded-3xl mt-7">
      <motion.div
        className="py-30 md:px-20 px-5"
        variants={containerVariant}
        initial="hidden"
        whileInView={"visible"}
      >
        <motion.h1
          className="md:text-6xl text-4xl font-bold text-dark-green"
          variants={childTextVariants}
        >
          Fresh Vegetables <br /> Big discount
        </motion.h1>
        <motion.p
          className="text-dark-gray font-light text-xl my-5"
          variants={childTextVariants}
        >
          Save up to 50% off on your first order
        </motion.p>
        <motion.div variants={childTextVariants}>
          <Button navigate={() => navigate("/products")}>
            Shop Now
            <span className="text-sm ml-2 mt-1">
              <FaArrowRightLong />
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
