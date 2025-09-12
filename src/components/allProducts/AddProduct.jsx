import React from "react";
import Button from "../common/Button";
const AddProduct = () => {
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
          id="image"
          required
          className={styleInput}
          placeholder="Enter product Images"
        />
      </div>
      <div>
        <label htmlFor="productName" className={styleLabel}>
          Product Name *
        </label>
        <input
          type="text"
          id="productName"
          required
          className={styleInput}
          placeholder="Enter your last name"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className={styleLabel}>
            Price *
          </label>
          <input
            type="text"
            id="price"
            required
            className={styleInput}
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label htmlFor="discount" className={styleLabel}>
            Discount *
          </label>
          <input
            type="text"
            id="discount"
            required
            defaultValue={0}
            className={styleInput}
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="size" className={styleLabel}>
            Size / Weight *
          </label>
          <input
            type="text"
            id="size"
            required
            className={styleInput}
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label htmlFor="stock" className={styleLabel}>
            Stock *
          </label>
          <input
            type="text"
            id="stock"
            required
            className={styleInput}
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="category" className={styleLabel}>
          Category *
        </label>
        <select id="category" required className={styleInput}>
          <option value="" disabled>
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
          id="description"
          rows={4}
          required
          className={styleInput}
          placeholder="Please describe your inquiry..."
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

export default AddProduct;
