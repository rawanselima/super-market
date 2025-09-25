import React from "react";
import Button from "../common/Button";
import useAddCategory from "./useAddCategory";
import { useForm } from "react-hook-form";
import useUploadImage from "@/hooks/useUploadImage";
import Spinner from "../common/Spinner";
import ErrorMessage from "../common/ErrorMessage";
const AddCategory = ({ setIsOpen }) => {
  const styleInput =
    "w-full px-3 py-2 border-2 border-light-green  rounded focus:outline-none focus:ring-2 focus:ring-green";
  const styleLabel = "block text-sm font-bold text-dark-green mb-2";

  const { mutate, isPending } = useAddCategory(setIsOpen);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const { uploadImage, isUploading } = useUploadImage();

  async function submit(data) {
    try {
      const avatarFile = data.image?.[0];
      const imageUrl = await uploadImage(avatarFile);

      mutate({
        name: data.categoryName,
        avatar: imageUrl,
      });
    } catch (err) {
      console.error("❌ Upload failed:", err);
    }
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
          className={styleInput}
          placeholder="Enter Category Images"
          {...register("image", { required: true })}
        />
        {errors.image && <ErrorMessage> Image Is Required </ErrorMessage>}
      </div>
      <div>
        <label htmlFor="categoryName" className={styleLabel}>
          Category Name *
        </label>
        <input
          type="text"
          name="categoryName"
          className={styleInput}
          placeholder="Enter Category Name"
          {...register("categoryName", {
            required: true,
          })}
        />
        {errors.image && <ErrorMessage> Name Is Required </ErrorMessage>}
      </div>

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
          disabled={isUploading || isPending}
        >
          {isPending || isUploading ? <Spinner /> : " Add Product"}
        </Button>
      </div>
    </form>
  );
};

export default AddCategory;
