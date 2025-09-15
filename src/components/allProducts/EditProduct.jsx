import React from "react";
import Button from "../common/Button";
import { RiDeleteBin5Line } from "react-icons/ri";
const EditProduct = () => {
  const styleInput =
    "w-full px-3 py-2 border-2 border-light-green  rounded focus:outline-none focus:ring-2 focus:ring-green";
  const styleLabel = "block text-sm font-bold text-dark-green mb-2";
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="image" className={styleLabel}>
          Image *
        </label>
        <input type="file" name="image" multiple className={styleInput} />
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
        <div className="flex flex-col justify-center">
          <img
            src="/assets/product-7.png"
            alt="ProductImage"
            className="w-28 h-28"
          />
          <p className="text-red-800 cursor-pointer w-fit mx-auto text-lg">
            <RiDeleteBin5Line />
          </p>
        </div>
      </div>
      <div>
        <label htmlFor="productName" className={styleLabel}>
          Product Name *
        </label>
        <input
          type="text"
          name="productName"
          required
          className={styleInput}
          defaultValue={"hello"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className={styleLabel}>
            Price *
          </label>
          <input
            type="text"
            name="price"
            required
            className={styleInput}
            defaultValue={300}
          />
        </div>
        <div>
          <label htmlFor="discount" className={styleLabel}>
            Discount *
          </label>
          <input
            type="text"
            name="discount"
            required
            className={styleInput}
            defaultValue={0}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="size" className={styleLabel}>
            Size / Weight (g) *
          </label>
          <input
            type="text"
            name="size"
            required
            className={styleInput}
            defaultValue={20}
          />
        </div>
        <div>
          <label htmlFor="stock" className={styleLabel}>
            Stock *
          </label>
          <input
            type="text"
            name="stock"
            required
            className={styleInput}
            defaultValue={30}
          />
        </div>
      </div>

      <div>
        <label htmlFor="category" className={styleLabel}>
          Category *
        </label>
        <select
          name="category"
          required
          className={styleInput}
          defaultValue={"feedback"}
        >
          <option value={"select"} disabled>
            Select a Category{" "}
          </option>
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="billing">Billing Question</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className={styleLabel}>
          Description *
        </label>
        <textarea
          name="description"
          rows={4}
          required
          className={styleInput}
          defaultValue={"hello world"}
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

export default EditProduct;
