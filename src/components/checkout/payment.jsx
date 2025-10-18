import { useLocalStorage } from "@uidotdev/usehooks";
import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../common/ErrorMessage";
import Button from "../common/Button";
import useAddOrder from "./useAddOrder";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "@/redux/reducerCart";
import toast from "react-hot-toast";
import Spinner from "../common/Spinner";
import governments from "../shipping/governments";
import useEditStockProduct from "./useEditStockProduct";
const Payment = ({ setShippingPrice, shippingPrice }) => {
  const styleDiv = "flex flex-col my-2 text-dark-green text-green";
  const styleInput =
    "border-1 border-light-gray focus:border-green rounded px-2 py-1 my-2 outline-0 text-dark-green";
  const styleH3 = "text-lg font-bold my-3 text-dark-green";
  const [shipping] = useLocalStorage("shipping", governments);
  const [cart, setCart] = useLocalStorage("cart");
  const cartData = useSelector((state) => state.cartStore);
  const user = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { mutate, isPending } = useAddOrder();
  const { mutateAsync: mutateProduct, isPending: isPendingProduct } =
    useEditStockProduct();
  const totalPrice =
    cartData.length > 0 &&
    cartData.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

  async function submit(data) {
    if (data && user.name && cart.length > 0) {
      mutate({
        userId: user.id,
        userName: data.firstName + " " + data.lastName,
        phone: data.phone,
        address: data.address,
        status: "pending",
        date: Date.now(),
        order: cartData,
        totalPrice: totalPrice,
        payment: "cash on delivery",
        shippingPrice: shippingPrice,
      });

      for (const ele of cart) {
        await mutateProduct({
          productId: ele.productId,
          size: ele.size,
          quantity: ele.quantity,
          isIncrease: false,
        });
      }

      setCart([]);
      dispatch(addCart([]));
    }

    if (!user.name) {
      toast.error("should be Login First");
    }
    if (cart.length === 0) {
      toast.error("should be add product to cart");
    }
  }

  return (
    <div className="border-1 border-light-gray rounded p-3">
      <form onSubmit={handleSubmit(submit)}>
        <h3 className={styleH3}> Contact </h3>
        <div className={styleDiv}>
          <label htmlFor="phone"> Phone Number </label>
          <input
            type="tel"
            name="phone"
            defaultValue={user?.phone}
            className={styleInput}
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <ErrorMessage> Phone Number is required </ErrorMessage>
          )}
        </div>

        <h3 className={styleH3}> Delivery </h3>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-2">
          <div className={styleDiv}>
            <label htmlFor="firstName"> First Name </label>
            <input
              type="text"
              name="firstName"
              defaultValue={user?.name.split(" ")[0]}
              className={`${styleInput}`}
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <ErrorMessage> First Name is required </ErrorMessage>
            )}
          </div>

          <div className={styleDiv}>
            <label htmlFor="lastName"> Last Name </label>
            <input
              type="text"
              name="lastName"
              defaultValue={user?.name.split(" ")[1]}
              className={styleInput}
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <ErrorMessage> last Name is required </ErrorMessage>
            )}
          </div>
        </div>

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-2">
          <div className={styleDiv}>
            <label htmlFor="country"> Country </label>
            <select
              name="country"
              className={styleInput}
              {...register("country", { required: true })}
            >
              <option value="egypt"> Egypt </option>
            </select>
            {errors.country && (
              <ErrorMessage> Country is required </ErrorMessage>
            )}
          </div>

          <div className={styleDiv}>
            <label htmlFor="government">Select Governorate</label>
            <select
              className={styleInput}
              aria-label="Select Governorate"
              {...register("government", {
                required: true,
                onChange: (e) => {
                  const selected = shipping.find((g) => g.id == e.target.value);
                  setShippingPrice(selected);
                },
              })}
            >
              <option value="">select government </option>
              {shipping &&
                shipping.map((g) => {
                  return (
                    <option key={g.id} value={g.id}>
                      {g.name}-{g.price}LE
                    </option>
                  );
                })}
            </select>
            {errors.government && (
              <ErrorMessage> Government is required </ErrorMessage>
            )}
          </div>
        </div>
        <div className={styleDiv}>
          <label htmlFor="address"> your Address </label>
          <input
            type="text"
            name="address"
            className={styleInput}
            {...register("address", { required: true })}
          />
          {errors.address && <ErrorMessage> Address is required </ErrorMessage>}
        </div>
        <h3 className={styleH3}> Payment Way </h3>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="paymentWay"
            className="accent-green w-5 h-5"
            checked={true}
            readOnly={true}
          />
          <label htmlFor="paymentWay"> Cash on delivery </label>
        </div>
        <Button size={"full"} type={"submit"}>
          {isPending || isPendingProduct ? <Spinner /> : "Pay Now"}
        </Button>
      </form>
    </div>
  );
};

export default Payment;
