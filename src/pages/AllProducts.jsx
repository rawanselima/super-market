import React, { useState } from "react";
import TableProducts from "../components/allProducts/TableProducts";
import HeaderSection from "@/components/common/HeaderSection";
import Button from "@/components/common/Button";
import { TiPlus } from "react-icons/ti";
import PopUp from "@/components/common/PopUp";
import AddProduct from "@/components/allProducts/AddProduct";
import TitleDashboardPages from "@/components/common/TitleDashboardPages";
const AllProducts = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <TitleDashboardPages
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"All Products"}
        textBtn={"add product"}
      />
      <section className="overflow-x-auto w-full">
        <TableProducts />
      </section>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Product"}>
        <AddProduct />
      </PopUp>
    </main>
  );
};

export default AllProducts;
