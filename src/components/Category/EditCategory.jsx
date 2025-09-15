import React from "react";
import Button from "../common/Button";
import { RiDeleteBin5Line } from "react-icons/ri";
const EditCategory = () => {
  const styleInput =
    "w-full px-3 py-2 border-2 border-light-green  rounded focus:outline-none focus:ring-2 focus:ring-green";
  const styleLabel = "block text-sm font-bold text-dark-green mb-2";
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="image" className={styleLabel}>
          Image *
        </label>
        <input type="file" name="image" className={styleInput} />
      </div>
      <div className="flex gap-2 flex-wrap">
        <div>
          <img
            src="/assets/product-8.png"
            alt="ProductImage"
            className="w-28 h-28"
          />
          <p className="text-red-800 cursor-pointer w-fit mx-auto text-lg">
            <RiDeleteBin5Line />
          </p>
        </div>
      </div>

      <div>
        <label htmlFor="categoryName" className={styleLabel}>
          Category Name *
        </label>
        <input
          type="text"
          name="categoryName"
          required
          className={styleInput}
          defaultValue={"hello"}
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

export default EditCategory;
