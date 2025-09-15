import React, { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import DeletePopup from "../common/DeletePopup";
import SliderImages from "./SliderImages";
import PopUp from "../common/PopUp";
import EditProduct from "./EditProduct";
const RowTable = () => {
  const descriptionText =
    "Uninhibited carnally hired played in whimpered dear gorilla koaladepending and much yikes off far quetzal goodness and from for grimacedgoodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered";
  const styleTableCell = "p-2 text-sm";

  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [isOpenSliderImages, setIsOpenSliderImages] = useState(false);
  const [isOpenEditProduct, setIsOpenEditProduct] = useState(false);

  return (
    <TableRow className="border-b-1 border-light-gray b-light-green">
      <TableCell className={`${styleTableCell} w-20 `}>
        <button onClick={() => setIsOpenSliderImages(!isOpenSliderImages)}>
          <img
            src="/assets/product-8.png"
            alt="productImg"
            className="w-full object-cover cursor-pointer"
            loading="lazy"
          />
        </button>
      </TableCell>
      <TableCell className={`${styleTableCell} md:w-52 w-20 `}>
        Blue Diamond Almonds Lightly Naturel
      </TableCell>
      <TableCell className={`${styleTableCell} text-green font-bold w-28`}>
        Milk & Cheese
      </TableCell>
      <TableCell className={`${styleTableCell} md:w-96 w-60`}>
        {descriptionText.slice(0, 100)}
      </TableCell>

      <TableCell
        className={`${styleTableCell} text-green font-bold w-20 text-[16px]`}
      >
        $250
      </TableCell>
      <TableCell className={`${styleTableCell} font-bold w-20 text-[16px]`}>
        10
      </TableCell>
      <TableCell className={`${styleTableCell} w-32 text-[16px]`}>
        25g
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
      />
      <SliderImages
        isOpen={isOpenSliderImages}
        setIsOpen={setIsOpenSliderImages}
      />
      <PopUp
        isOpen={isOpenEditProduct}
        setIsOpen={setIsOpenEditProduct}
        title={"Edit Category"}
      >
        <EditProduct />
      </PopUp>
    </TableRow>
  );
};

export default RowTable;
