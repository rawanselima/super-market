import React, { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import DeletePopup from "../common/DeletePopup";
import PopUp from "../common/PopUp";
import EditCategory from "./EditCategory";
import useDeleteCategory from "./useDeleteCategory";

const RowTable = ({ category }) => {
  const descriptionText =
    "Uninhibited carnally hired played in whimpered dear gorilla koaladepending and much yikes off far quetzal goodness and from for grimacedgoodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered";
  const styleTableCell = "p-2 text-lg";

  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [isOpenEditProduct, setIsOpenEditProduct] = useState(false);

  const { avatar, name } = category;

  const { mutate, isPending } = useDeleteCategory();

  return (
    <TableRow className="border-b-1 border-light-gray b-light-green">
      <TableCell className={`${styleTableCell} `}>
        <img
          src={avatar}
          alt={name}
          className="w-full h-20 object-cover cursor-pointer"
          loading="lazy"
        />
      </TableCell>
      <TableCell className={`${styleTableCell} text-center `}>{name}</TableCell>

      <TableCell className={`${styleTableCell} font-bold text-xl text-green text-center `}>
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
        mutate={mutate}
        id={category.id}
        isPending={isPending}
      />

      <PopUp
        isOpen={isOpenEditProduct}
        setIsOpen={setIsOpenEditProduct}
        title={"Edit Category"}
      >
        <EditCategory
          categoryId={category.id}
          setIsOpen={setIsOpenEditProduct}
        />
      </PopUp>
    </TableRow>
  );
};

export default RowTable;
