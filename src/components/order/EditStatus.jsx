import React from "react";
import Button from "../common/Button";
const EditStatus = ({ isOpen, setIsOpen }) => {
  const styleInput =
    "w-full px-3 py-2 mx-1 my-3 border-1 border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-green";

  return (
    <form>
      <label
        htmlFor="status"
        className="block  font-bold text-dark-green mb-2"
      >
        Update Status
      </label>
      <select name="status" required className={styleInput}>
        <option value="pending">pending</option>
        <option value="processed" defaultValue={"processed"}>
          processed
        </option>
        <option value="shipping"> shipping </option>
        <option value="received"> received</option>
        <option value="cancel">cancel</option>
      </select>
      <div className="flex justify-end-safe gap-3" >
        <Button type={"submit"} > Update </Button>
      </div>
    </form>
  );
};

export default EditStatus;
