import React, { memo, useEffect, useState } from "react";
import Button from "../common/Button";
import { RiDeleteBin5Line } from "react-icons/ri";
import useCategoryId from "./useCategoryId";
import { useForm } from "react-hook-form";
import useUploadImage from "@/hooks/useUploadImage";
import useEditCategory from "./useEditCategory";
import Spinner from "../common/Spinner";
import Loader from "../common/Loader";
import ErrorMessage from "../common/ErrorMessage";

const EditCategory = ({ categoryId, setIsOpen }) => {
  const styleInput =
    "w-full px-3 py-2 border-2 border-light-green rounded focus:outline-none focus:ring-2 focus:ring-green";
  const styleLabel = "block text-sm font-bold text-dark-green mb-2";

  const { uploadImage, isUploading } = useUploadImage();
  const { data, isLoading } = useCategoryId(categoryId);
  const { mutate, isPending } = useEditCategory(setIsOpen);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: "",
      categoryName: "",
    },
  });

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (data) {
      reset({
        image: data.avatar,
        categoryName: data.name,
      });
      setPreviewImage(data.avatar);
    }
  }, [data, reset]);

  async function submit(newCategory) {
    let imageUrl = previewImage || data.avatar;

    if (typeof newCategory.image !== "string" && newCategory.image?.[0]) {
      const avatarFile = newCategory.image[0];
      imageUrl = await uploadImage(avatarFile);
    }

    mutate({
      id: categoryId,
      newCategory: {
        ...data,
        avatar: imageUrl || null,
        name: newCategory.categoryName || data?.name,
      },
    });
  }

  function handleDeleteImage() {
    setPreviewImage(null);
    setValue("image", "");
  }

  if (isLoading) return <Loader />;

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
          {...register("image")}
        />
      </div>

      {previewImage && (
        <div className="flex gap-2 flex-wrap">
          <div>
            <img src={previewImage} alt="Category" className="w-28 h-28" />
            <p
              onClick={handleDeleteImage}
              className="text-red-800 cursor-pointer w-fit mx-auto text-lg"
            >
              <RiDeleteBin5Line />
            </p>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="categoryName" className={styleLabel}>
          Category Name *
        </label>
        <input
          type="text"
          name="categoryName"
          className={styleInput}
          defaultValue={data?.name}
          {...register("categoryName", { required: true })}
        />
        {errors.categoryName && (
          <ErrorMessage> Category name is required </ErrorMessage>
        )}
      </div>

      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button type="reset" variant="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="default">
          {isPending || isUploading ? <Spinner /> : " Edit Category"}
        </Button>
      </div>
    </form>
  );
};

export default memo(EditCategory);
