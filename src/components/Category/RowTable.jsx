import React, { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import DeletePopup from "../common/DeletePopup";
import PopUp from "../common/PopUp";

const RowTable = () => {
  const descriptionText =
    "Uninhibited carnally hired played in whimpered dear gorilla koaladepending and much yikes off far quetzal goodness and from for grimacedgoodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered";
  const styleTableCell = "p-2 text-sm";

  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [isOpenEditProduct, setIsOpenEditProduct] = useState(false);

  return (
    <TableRow className="border-b-1 border-light-gray b-light-green">
      <TableCell className={`${styleTableCell} `}>
        <img
          src="/assets/product-8.png"
          alt="productImg"
          className="w-full object-cover cursor-pointer"
          loading="lazy"
        />
      </TableCell>
      <TableCell className={`${styleTableCell} `}>
        Blue Diamond Almonds Lightly Naturel
      </TableCell>

      <TableCell className={`${styleTableCell} font-bold text-xl text-green`}>
        <button
          className="mr-3 cursor-pointer"
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

      <PopUp isOpen={isOpenEditProduct} setIsOpen={setIsOpenEditProduct}>
        {/* <EditProduct /> */}
      </PopUp>
    </TableRow>
  );
};

export default RowTable;
