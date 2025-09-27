import React, { memo, useState } from "react";
import Button from "../common/Button";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useForm } from "react-hook-form";
import useEditProduct from "./useEditProduct";
import Spinner from "../common/Spinner";
import useFetchCategory from "../Category/useFetchCategory";
import ErrorMessage from "../common/ErrorMessage";
import useUploadImage from "@/hooks/useUploadImage";
const EditProduct = ({ product, setIsOpen }) => {
  const styleInput =
    "w-full px-3 py-2 border-2 border-light-green  rounded focus:outline-none focus:ring-2 focus:ring-green";
  const styleLabel = "block text-sm font-bold text-dark-green mb-2";

  const [currentImages, setCurrentImages] = useState(product.avatar);
  const { data: categories } = useFetchCategory();
  const { mutate, isPending } = useEditProduct(setIsOpen);
  const { uploadImage, isUploading } = useUploadImage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: product.name,
      price: product.price,
      discount: product.offer || 0,
      size: product.size,
      stock: product.stock,
      category: product.categoryId,
      description: product.description,
    },
  });

  function removeImage(index) {
    const updateImages = currentImages.filter((img, i) => i !== index);
    setCurrentImages(updateImages);
  }

  async function submit(data) {
    console.log("data", data, "product", product);
    const imageFiles = Array.from(data.image);

    const imageUrls = await Promise.all(
      imageFiles.map(async (file) => {
        const image = await uploadImage(file);
        return image;
      })
    );

    mutate({
      productId: product.id,
      updatedProduct: {
        avatar: [...currentImages, ...imageUrls],
        name: data.productName,
        price: parseFloat(data.price),
        size: parseFloat(data.size),
        stock: parseInt(data.stock),
        offer: parseFloat(data.discount),
        categoryId: data.category,
        description: data.description,
      },
    });
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="image" className={styleLabel}>
          Image *
        </label>
        <input
          type="file"
          name="image"
          multiple
          className={styleInput}
          {...register("image")}
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        {product.avatar.length > 0 &&
          product.avatar.map((img, index) => {
            return (
              <div className="flex flex-col justify-center" key={img}>
                <img src={img} alt="ProductImage" className="w-28 h-28" />
                <button
                  className="text-red-800 cursor-pointer w-fit mx-auto text-lg"
                  onClick={() => removeImage(index)}
                >
                  <RiDeleteBin5Line />
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <label htmlFor="productName" className={styleLabel}>
          Product Name *
        </label>
        <input
          type="text"
          name="productName"
          className={styleInput}
          defaultValue={product.name}
          {...register("productName", { required: true })}
        />
        {errors.productName && (
          <ErrorMessage>Product name is required</ErrorMessage>
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
            defaultValue={product.price}
            {...register("price", { required: true })}
          />
          {errors.price && <ErrorMessage>price is required</ErrorMessage>}
        </div>
        <div>
          <label htmlFor="discount" className={styleLabel}>
            Discount *
          </label>
          <input
            type="text"
            name="discount"
            className={styleInput}
            defaultValue={product.offer || 0}
            {...register("discount", { required: true })}
          />
          {errors.discount && <ErrorMessage>discount is required</ErrorMessage>}
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
            defaultValue={product.size}
            {...register("size", { required: true })}
          />
          {errors.size && <ErrorMessage>size is required</ErrorMessage>}
        </div>
        <div>
          <label htmlFor="stock" className={styleLabel}>
            Stock *
          </label>
          <input
            type="text"
            name="stock"
            className={styleInput}
            defaultValue={product.stock}
            {...register("stock", { required: true })}
          />
          {errors.stock && <ErrorMessage>stock is required</ErrorMessage>}
        </div>
      </div>

      <div>
        <label htmlFor="category" className={styleLabel}>
          Category *
        </label>
        <select
          name="category"
          className={styleInput}
          defaultValue={product.categoryId}
          {...register("category", { required: true })}
        >
          <option value={"select"} disabled>
            Select a Category
          </option>
          {categories &&
            categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
        </select>
        {errors.category && <ErrorMessage>category is required</ErrorMessage>}
      </div>

      <div>
        <label htmlFor="description" className={styleLabel}>
          Description *
        </label>
        <textarea
          name="description"
          rows={4}
          className={styleInput}
          defaultValue={product.description}
          {...register("description", { required: true })}
        />
        {errors.description && (
          <ErrorMessage>description is required</ErrorMessage>
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
          {isPending || isUploading ? <Spinner /> : "Edit Product"}
        </Button>
      </div>
    </form>
  );
};

export default memo(EditProduct);
