import React from "react";
import Button from "../common/Button";
import { RiDeleteBin5Line } from "react-icons/ri";
const EditShipping = () => {
  const styleInput =
    "w-full px-3 py-2 border-2 border-light-green  rounded focus:outline-none focus:ring-2 focus:ring-green";
  const styleLabel = "block font-bold text-dark-green mb-2";
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="government" className={styleLabel}>
          Government
        </label>
        <input
          type="text"
          name="government"
          value={"cairo"}
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
          defaultValue={350}
        />
      </div>

      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button type="reset" variant="secondary">
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
