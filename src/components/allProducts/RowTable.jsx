import React, { memo, useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import DeletePopup from "../common/DeletePopup";
import SliderImages from "./SliderImages";
import PopUp from "../common/PopUp";
import EditProduct from "./EditProduct";
import useDeleteProduct from "./useDeleteProduct";
import { BsFillStarFill } from "react-icons/bs";
const RowTable = ({ product }) => {
  const styleTableCell = "p-2 text-sm";

  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [isOpenSliderImages, setIsOpenSliderImages] = useState(false);
  const [isOpenEditProduct, setIsOpenEditProduct] = useState(false);

  const { mutate, isPending } = useDeleteProduct();

  return (
    <TableRow className="border-b-1 border-light-gray b-light-green">
      <TableCell className={`${styleTableCell} w-20 `}>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSliderImages(true);
          }}
        >
          <img
            src={product.avatar[0]}
            alt="productImg"
            className="w-20 h-16 object-cover cursor-pointer"
            loading="lazy"
          />
        </button>
      </TableCell>
      <TableCell className={`${styleTableCell} w-32 `}>
        {product.name}
      </TableCell>
      <TableCell className={`${styleTableCell} text-green font-bold w-28`}>
        {product.category.name}
      </TableCell>
      <TableCell
        className={`${styleTableCell} w-20 flex items-center gap-1 mt-7`}
      >
        <span className="text-yellow-400">
          <BsFillStarFill />
        </span>
        {product.rating}
      </TableCell>

      <TableCell className={`${styleTableCell} md:w-72 w-40`}>
        <span>{product.description.slice(0, 50)}</span>
      </TableCell>

      <TableCell className={`${styleTableCell} w-32 text-[14px]`}>
        {product.sizes.map((item) => item.size).join("/ ")}g
      </TableCell>
      <TableCell
        className={`${styleTableCell} text-green font-bold w-32 text-[14px]`}
      >
        ${product.sizes.map((item) => item.price).join("/ ")}
      </TableCell>

      <TableCell className={`${styleTableCell} w-32 text-[14px]`}>
        {product.sizes.map((item) => item.stock).join("/ ")}
      </TableCell>

      <TableCell className={`${styleTableCell} font-bold w-20 text-[14px]`}>
        {product.offer}%
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
