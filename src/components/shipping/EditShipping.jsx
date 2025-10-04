import React, { use, useState } from "react";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "@uidotdev/usehooks";
import { editShipping } from "@/redux/reducerShipping";
const EditShipping = ({ item, setIsOpen }) => {
  const styleInput =
    "w-full px-3 py-2 border-2 border-light-green  rounded focus:outline-none focus:ring-2 focus:ring-green";
  const styleLabel = "block font-bold text-dark-green mb-2";
  const [priceShipping, setPriceShipping] = useState();
  const dispatch = useDispatch();
  const [shipping, setShipping] = useLocalStorage("shipping");

  function handleSubmit(e) {
    e.preventDefault();

    const updateShipping = shipping.map((ele) => {
      return ele.id === item.id ? { ...item, price: priceShipping } : ele;
    });
    setShipping(updateShipping);
    dispatch(editShipping(updateShipping));
    setIsOpen(false);
  }

  return (
    <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="government" className={styleLabel}>
          Government
        </label>
        <input
          type="text"
          name="government"
          value={item.name}
          readOnly
          className={`${styleInput} bg-light-green cursor-not-allowed`}
        />
      </div>

      <div>
        <label htmlFor="price" className={styleLabel}>
          price *
        </label>
        <input
          type="text"
          name="price"
          required
          className={styleInput}
          defaultValue={item.price}
          onChange={(e) => setPriceShipping(e.target.value)}
        />
      </div>

      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          type="reset"
          variant="secondary"
          navigate={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <Button type="submit" variant="default">
          Edit Product
        </Button>
      </div>
    </form>
  );
};

export default EditShipping;
