import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import Button from "../common/Button";
import { useLocalStorage } from "@uidotdev/usehooks";
import useAddFeedback from "./useAddFeedback";
import useFetchAllFeedback from "./useFetchAllFeedback";
import Spinner from "../common/Spinner";
import useEditProduct from "../allProducts/useEditProduct";
import Loader from "../common/Loader";
import Error from "../common/Error";
const UserFeedback = ({ product, setIsOpen }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [message, setMessage] = useState();
  const [user] = useLocalStorage("user");
  const { mutate, isPending } = useAddFeedback(setIsOpen);
  const { data, isLoading, isError } = useFetchAllFeedback();
  const { mutate: mutateProduct, isPending: isPendingEditProduct } =
    useEditProduct(setIsOpen);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  function handleSubmit(e) {
    e.preventDefault();

    const feedback = {
      userId: user.id,
      userName: user.name,
      userPhone: user.phone,
      productId: product.id,
      productName: product.name,
      productImg: product.avatar[0],
      message: message,
      rating: rating,
    };

    console.log(feedback);

    const feedbackProduct = data.filter((ele) => ele.productId === product.id);

    const averageRating =
      Math.ceil(
        feedbackProduct.reduce((acc, cur) => acc + cur.rating, 0) /
          feedbackProduct.length
      ) || rating;

    console.log(averageRating);

    mutate(feedback);
    mutateProduct({
      productId: product.id,
      updatedProduct: { ...product, rating: averageRating },
    });
  }

  return (
    <div>
      <div className="flex gap-1 text-2xl cursor-pointer">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <FaStar
              key={index}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
              className={`transition-colors duration-200 ${
                starValue <= (hover || rating)
                  ? "text-yellow-400"
                  : "text-light-gray"
              }`}
            />
          );
        })}
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          className=" my-5 w-full border-1 border-light-green focus:border-green outline-0 rounded p-2"
          rows={5}
          name="feedback"
          placeholder="Give your feedback on this product"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="flex justify-end-safe">
          <Button type={"submit"}>
            {isPending ? <Spinner /> : "Send Your Feedback"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserFeedback;
