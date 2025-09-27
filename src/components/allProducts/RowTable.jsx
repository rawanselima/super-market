import React, { memo, useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import DeletePopup from "../common/DeletePopup";
import SliderImages from "./SliderImages";
import PopUp from "../common/PopUp";
import EditProduct from "./EditProduct";
import useDeleteProduct from "./useDeleteProduct";
import { BsFillStarFill } from "react-icons/bs";
const RowTable = ({ product }) => {
  const descriptionText = product.description;
  const styleTableCell = "p-2 text-sm";

  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [isOpenSliderImages, setIsOpenSliderImages] = useState(false);
  const [isOpenEditProduct, setIsOpenEditProduct] = useState(false);

  const { mutate, isPending } = useDeleteProduct();

  return (
    <TableRow className="border-b-1 border-light-gray b-light-green">
      <TableCell className={`${styleTableCell} w-20 `}>
        <button onClick={() => setIsOpenSliderImages(!isOpenSliderImages)}>
          <img
            src={product.avatar[0]}
            alt="productImg"
            className="w-full object-cover cursor-pointer"
            loading="lazy"
          />
        </button>
      </TableCell>
      <TableCell className={`${styleTableCell} md:w-52 w-20 `}>
        {product.name}
      </TableCell>
      <TableCell className={`${styleTableCell} text-green font-bold w-28`}>
        {product.category.name}
      </TableCell>
      <TableCell className={`${styleTableCell} w-20 flex items-center gap-1`}>
        <span className="text-yellow-400">
          <BsFillStarFill />
        </span>
        {product.rating}
      </TableCell>

      <TableCell className={`${styleTableCell} md:w-80 w-52`}>
        <span className="flex items-end gap-1">
          {descriptionText.slice(0, 90)}
          <span className="text-green">
            <HiDotsHorizontal />
          </span>
        </span>
      </TableCell>

      <TableCell
        className={`${styleTableCell} text-green font-bold w-20 text-[16px]`}
      >
        ${product.price}
      </TableCell>

      <TableCell className={`${styleTableCell} w-20 text-[16px]`}>
        ${product.offer}
      </TableCell>
      <TableCell className={`${styleTableCell} font-bold w-20 text-[16px]`}>
        {product.stock}
      </TableCell>
      <TableCell className={`${styleTableCell} w-32 text-[16px]`}>
        {product.size}g
      </TableCell>
      <TableCell
        className={`${styleTableCell} font-bold text-xl text-green w-20`}
      >
        <button
          className="mr-3 cursor-pointer text-red-800"
          onClick={() => setIsOpenConfirmDelete(!isOpenConfirmDelete)}
        >
          <RiDeleteBin5Line />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setIsOpenEditProduct(!isOpenEditProduct)}
        >
          <TbEdit />
        </button>
      </TableCell>

      <DeletePopup
        isOpen={isOpenConfirmDelete}
        setIsOpen={setIsOpenConfirmDelete}
        mutate={mutate}
        isPending={isPending}
        id={product.id}
      />
      <SliderImages
        isOpen={isOpenSliderImages}
        setIsOpen={setIsOpenSliderImages}
        imageProduct={product.avatar}
      />
      <PopUp
        isOpen={isOpenEditProduct}
        setIsOpen={setIsOpenEditProduct}
        title={"Edit Category"}
      >
        <EditProduct product={product} setIsOpen={setIsOpenEditProduct} />
      </PopUp>
    </TableRow>
  );
};

export default memo(RowTable);
