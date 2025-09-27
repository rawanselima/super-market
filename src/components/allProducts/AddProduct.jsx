import React, { memo, useEffect } from "react";
import Button from "../common/Button";
import useAddProduct from "./useAddProduct";
import { useForm } from "react-hook-form";
import ErrorMessage from "../common/ErrorMessage";
import useUploadImage from "@/hooks/useUploadImage";
import Spinner from "../common/Spinner";
import useFetchCategory from "../Category/useFetchCategory";
import Loader from "../common/Loader";
const AddProduct = ({ setIsOpen }) => {
  const styleInput =
    "w-full px-3 py-2 border-2 border-light-green  rounded focus:outline-none focus:ring-2 focus:ring-green";
  const styleLabel = "block text-sm font-bold text-dark-green mb-2";

  const { mutate, isPending } = useAddProduct(setIsOpen);
  const { uploadImage, isUploading } = useUploadImage();
  const { isPending: isPendingCategory, data: categories } = useFetchCategory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submit(data) {
    const imageFiles = Array.from(data.image);

    const imageUrls = await Promise.all(
      imageFiles.map(async (file) => {
        const image = await uploadImage(file);
        return image;
      })
    );

    mutate({
      name: data.productName,
      avatar: imageUrls,
      description: data.description,
      categoryId: data.category,
      price: parseFloat(data.price),
      offer: parseFloat(data.discount) || 0,
      stock: parseInt(data.stock),
      size: parseInt(data.size),
      rating: 0,
    });
  }

  if (isPendingCategory) return <Loader />;

  return (
    <form className="space-y-4" onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="image" multiple className={styleLabel}>
          Image *
        </label>
        <input
          type="file"
          name="image"
          multiple
          className={styleInput}
          placeholder="Enter product Images"
          {...register("image", { required: true })}
        />
        {errors.image && <ErrorMessage> image is required </ErrorMessage>}
      </div>
      <div>
        <label htmlFor="productName" className={styleLabel}>
          Product Name *
        </label>
        <input
          type="text"
          name="productName"
          className={styleInput}
          placeholder="Enter your last name"
          {...register("productName", { required: true })}
        />
        {errors.productName && (
          <ErrorMessage> ProductName is required </ErrorMessage>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className={styleLabel}>
            Price *
          </label>
          <input
            type="text"
            name="price"
            className={styleInput}
            placeholder="Enter your first name"
            {...register("price", { required: true })}
          />
          {errors.price && <ErrorMessage> price is required </ErrorMessage>}
        </div>
        <div>
          <label htmlFor="discount" className={styleLabel}>
            Discount *
          </label>
          <input
            type="text"
            name="discount"
            defaultValue={0}
            className={styleInput}
            placeholder="Enter your last name"
            {...register("discount")}
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
            className={styleInput}
            placeholder="Enter your first name"
            {...register("size", { required: true })}
          />
          {errors.size && (
            <ErrorMessage> size/weight is required </ErrorMessage>
          )}
        </div>
        <div>
          <label htmlFor="stock" className={styleLabel}>
            Stock *
          </label>
          <input
            type="text"
            name="stock"
            className={styleInput}
            placeholder="Enter your last name"
            {...register("stock", { required: true })}
          />
          {errors.stock && <ErrorMessage> stock is required </ErrorMessage>}
        </div>
      </div>

      <div>
        <label htmlFor="category" className={styleLabel}>
          Category *
        </label>

        <select
          name="category"
          className={styleInput}
          {...register("category", { required: true })}
        >
          <option value="" disabled>
            Select a Category
          </option>
          {categories &&
            categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
        </select>

        {errors.category && <ErrorMessage> category is required </ErrorMessage>}
      </div>

      <div>
        <label htmlFor="description" className={styleLabel}>
          Description *
        </label>
        <textarea
          name="description"
          rows={4}
          className={styleInput}
          placeholder="Please describe your inquiry..."
          {...register("description", { required: true })}
        />
        {errors.description && (
          <ErrorMessage> description is required </ErrorMessage>
        )}
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
          {isPending || isUploading ? <Spinner /> : "Add Product"}
        </Button>
      </div>
    </form>
  );
};

export default memo(AddProduct);
