import React, { useState } from "react";
import Button from "../common/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeletePopup from "../common/DeletePopup";
import { useDispatch } from "react-redux";
import { editCart } from "@/redux/reducerCart";
import { useLocalStorage } from "@uidotdev/usehooks";
import useFetchDetailsProduct from "../detailsProduct/useFetchDetailsProduct";
import toast from "react-hot-toast";

const RowCart = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [cart, setCart] = useLocalStorage("cart", []);
  const { data: product, isLoading } = useFetchDetailsProduct(data.productId);

  function handleDecreaseQuantity() {
    if (data.quantity > 1) {
      dispatch(editCart({ ...data, quantity: +data.quantity - 1 }));
      setCart(() => {
        return cart.map((ele) => {
          return ele.id === data.id
            ? { ...ele, quantity: +data.quantity - 1 }
            : ele;
        });
      });
    }
  }

  function handleIncreaseQuantity() {
    if (isLoading) return;

    const activeSize = product.sizes.find((ele) => ele.size === data.size);

    if (+activeSize.stock < +data.quantity + 1) {
      toast.error(
        `Unfortunately ${product.name} exist ${activeSize.stock} only`
      );
      return;
    }

    dispatch(editCart({ ...data, quantity: +data.quantity + 1 }));

    setCart(() => {
      return cart.map((ele) => {
        return ele.id === data.id
          ? { ...ele, quantity: +data.quantity + 1 }
          : ele;
      });
    });
  }

  return (
    <>
      <tr className="text-left">
        <td className="px-2 sm:px-3 py-2 text-sm text-dark-green w-20 sm:w-24 whitespace-nowrap">
          <img
            src={data.avatar}
            alt="cartImg"
            loading="lazy"
            className="w-12 h-12 sm:w-16 sm:h-16 object-cover border-1 border-green rounded"
          />
        </td>

        <td className="px-2 sm:px-3 py-2 text-xs sm:text-sm text-dark-green w-48 break-words whitespace-normal">
          {data.name}
        </td>

        <td className="px-2 sm:px-3 py-2 text-sm sm:text-lg font-bold text-dark-green w-16 sm:w-20 whitespace-nowrap">
          {data.size}g
        </td>
        <td className="px-2 sm:px-3 py-2 text-sm sm:text-lg font-bold text-dark-green w-16 sm:w-20 whitespace-nowrap">
          ${data.price}
        </td>

        <td className="px-2 sm:px-3 py-2 text-dark-green w-24 whitespace-nowrap">
          <form
            className="border-1 border-light-gray bg-light-green rounded w-fit"
            onSubmit={(e) => e.preventDefault()}
          >
            <button
              className={`${
                data.quantity === 1 && "cursor-not-allowed"
              } text-center px-2 cursor-pointer hover:bg-green hover:text-white duration-300 transition-all text-xs sm:text-sm`}
              onClick={() => handleDecreaseQuantity()}
              disabled={+data.quantity === 1}
            >
              -
            </button>
            <input
              type="text"
              value={+data.quantity}
              className="w-8 sm:w-10 outline-0 text-center text-xs sm:text-sm"
              readOnly={true}
            />
            <button
              className="text-center px-2 cursor-pointer hover:bg-green hover:text-white duration-300 transition-all text-xs sm:text-sm"
              onClick={() => handleIncreaseQuantity()}
            >
              +
            </button>
          </form>
        </td>

        <td className="px-2 sm:px-6 py-2 sm:py-4 text-sm sm:text-lg font-bold text-green w-16 sm:w-20 whitespace-nowrap">
          ${(+data.price * +data.quantity).toFixed(2)}
        </td>

        <td className="px-2 sm:px-6 py-2 sm:py-4 text-end text-xs sm:text-sm font-medium rounded w-24 md:w-20 whitespace-nowrap">
          <Button size={"small"} danger={true} navigate={() => setIsOpen(true)}>
            <span className="mr-1">
              <RiDeleteBin6Line />
            </span>
            <span>Delete</span>
          </Button>
        </td>
      </tr>

      {isOpen && (
        <DeletePopup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dispatch={dispatch}
          id={data.id}
        />
      )}
    </>
  );
};

export default RowCart;
