import React, { useState } from "react";
import Button from "../common/Button";
import useEditOrder from "./useEditOrder";
import Spinner from "../common/Spinner";
const EditStatus = ({ setIsOpen, order }) => {
  const styleInput =
    "w-full px-3 py-2 mx-1 my-3 border-1 border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-green";
  const { mutate, isPending } = useEditOrder(setIsOpen);
  const [status, setStatus] = useState(order.status);
  function handleSubmit(e) {
    e.preventDefault();
    mutate({ orderId: order.id, newOrder: { ...order, status: status } });
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="status" className="block font-bold text-dark-green mb-2">
        Update Status
      </label>
      <select
        name="status"
        required
        className={styleInput}
        defaultValue={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="pending">pending</option>
        <option value="processing">processing</option>
        <option value="shipping"> shipping </option>
        <option value="received"> received</option>
        <option value="cancel">cancel</option>
      </select>
      <div className="flex justify-end-safe gap-3">
        <Button type={"submit"}> {isPending ? <Spinner /> : "Update"} </Button>
      </div>
    </form>
  );
};

export default EditStatus;
