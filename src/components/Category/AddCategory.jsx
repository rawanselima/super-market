import React from "react";
import Button from "../common/Button";
const AddCategory = () => {
  const styleInput =
    "w-full px-3 py-2 border-2 border-light-green  rounded focus:outline-none focus:ring-2 focus:ring-green";
  const styleLabel = "block text-sm font-bold text-dark-green mb-2";
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="image" className={styleLabel}>
          Image *
        </label>
        <input
          type="file"
          name="image"
          required
          className={styleInput}
          placeholder="Enter Category Images"
        />
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
          placeholder="Enter Category Name"
        />
      </div>

      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button type="reset" variant="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="default">
          Add Product
        </Button>
      </div>
    </form>
  );
};

export default AddCategory;
