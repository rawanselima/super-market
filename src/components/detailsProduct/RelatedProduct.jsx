import React, { useEffect } from "react";
import ProductCard from "../common/ProductCard";
import HeaderSection from "../common/HeaderSection";
import { motion } from "framer-motion";
import { containerVariant } from "../../animation/animationVariable";
import { childVariant } from "../../animation/animationVariable";
import SliderContainer from "../common/SliderContainer";
import { SwiperSlide } from "swiper/react";
import useFetchProductsCategory from "../products/useFetchProductsCategory";
import Loader from "../common/Loader";
import Error from "../common/Error";
const RelatedProduct = ({ categoryId }) => {
  const {
    data,
    isLoading,
    isError,
  } = useFetchProductsCategory(categoryId);

  useEffect(() => {
    console.log(isLoading);
    console.log("data", data);
  }, [isLoading, categoryId, data]);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <>
      <SliderContainer
        header={"Related Products"}
        largeScreen={5}
        mediumScreen={3}
        smallScreen={2}
      >
        {data.length > 0 ? (
          data.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div variants={childVariant}>
                <ProductCard product={product} />
              </motion.div>
            </SwiperSlide>
          ))
        ) : (
          <p> ❌Not Found Yet </p>
        )}
      </SliderContainer>
    </>
  );
};

export default RelatedProduct;
