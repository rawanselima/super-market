import React, { memo, useState } from "react";
import useAddProduct from "./useAddProduct";
import { useForm } from "react-hook-form";
import ErrorMessage from "../common/ErrorMessage";
import useUploadImage from "@/hooks/useUploadImage";
import Spinner from "../common/Spinner";
import useFetchCategory from "../Category/useFetchCategory";
import Loader from "../common/Loader";
import { HiOutlinePlusSm } from "react-icons/hi";
import Button from "../common/Button";

const AddProduct = ({ setIsOpen }) => {
  const styleInput =
    "w-full px-3 py-2 border-2 border-light-green  rounded focus:outline-none focus:ring-2 focus:ring-green";
  const styleLabel = "block text-sm font-bold text-dark-green mb-2";

  const { mutate, isPending } = useAddProduct(setIsOpen);
  const { uploadImage, isUploading } = useUploadImage();
  const { isPending: isPendingCategory, data: categories } = useFetchCategory();
  const [sizes, setSizes] = useState([{ size: "", stock: "", price: "" }]);

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
      createdAt: new Date(Date.now()).toISOString(),
      name: data.productName,
      avatar: imageUrls,
      description: data.description,
      categoryId: data.category,
      offer: parseFloat(data.discount) || 0,
      sizes: data.sizes,
      rating: 0,
    });
  }

  if (isPendingCategory) return <Loader />;

  return (
    <form className="space-y-4" onSubmit={handleSubmit(submit)}>
      {/* Image */}
      <div>
        <label htmlFor="image" multiple className={styleLabel}>
          Image *
        </label>
        <input
          type="file"
          name="image"
          multiple
          className={styleInput}
          {...register("image", { required: true })}
        />
        {errors.image && <ErrorMessage> image is required </ErrorMessage>}
      </div>

      {/* Product Name */}
      <div>
        <label htmlFor="productName" className={styleLabel}>
          Product Name *
        </label>
        <input
          type="text"
          name="productName"
          className={styleInput}
          {...register("productName", { required: true })}
        />
        {errors.productName && (
          <ErrorMessage> ProductName is required </ErrorMessage>
        )}
      </div>

      {/* Dynamic Sizes */}
      {sizes.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-3 items-center gap-4"
        >
          <div>
            <label className={styleLabel}>Size / Weight (g) *</label>
            <input
              type="text"
              className={styleInput}
              {...register(`sizes.${index}.size`, { required: true })}
            />
            {errors.sizes?.[index]?.size && (
              <ErrorMessage> size/weight is required </ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="price" className={styleLabel}>
              Price *
            </label>
            <input
              type="text"
              name="price"
              className={styleInput}
              {...register(`sizes.${index}.price`, { required: true })}
            />
            {errors.sizes?.[index]?.price && (
              <ErrorMessage> price is required </ErrorMessage>
            )}
          </div>
          <div>
            <label className={styleLabel}>Stock *</label>
            <input
              type="text"
              className={styleInput}
              {...register(`sizes.${index}.stock`, { required: true })}
            />
            {errors.sizes?.[index]?.stock && (
              <ErrorMessage> stock is required </ErrorMessage>
            )}
          </div>
        </div>
      ))}

      {/* Add More Size Button */}
      <div className="flex justify-end-safe">
        <Button
          type="button"
          variant="secondary"
          navigate={() => setSizes([...sizes, { size: "", stock: "" }])}
        >
          <HiOutlinePlusSm /> Add More Size
        </Button>
      </div>

      {/* Category & discount */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
          {errors.category && (
            <ErrorMessage> category is required </ErrorMessage>
          )}
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
            {...register("discount")}
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className={styleLabel}>
          Description *
        </label>
        <textarea
          name="description"
          rows={4}
          className={styleInput}
          {...register("description", { required: true })}
        />
        {errors.description && (
          <ErrorMessage> description is required </ErrorMessage>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          type="reset"
          variant="secondary"
          navigate={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="default"
          disabled={isPending || isUploading}
        >
          {isPending || isUploading ? <Spinner /> : "Add Product"}
        </Button>
      </div>
    </form>
  );
};

export default memo(AddProduct);
