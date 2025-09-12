import React, { useState } from "react";
import TableProducts from "../components/allProducts/TableProducts";
import HeaderSection from "@/components/common/HeaderSection";
import Button from "@/components/common/Button";
import { TiPlus } from "react-icons/ti";
import PopUp from "@/components/common/PopUp";
import AddProduct from "@/components/allProducts/AddProduct";
const AllProducts = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <section className="flex justify-between items-center">
        <HeaderSection showByMargin={true}> ALl Products </HeaderSection>
        <Button navigate={() => setIsOpen(!isOpen)}>
          <span className="mr-2">
            <TiPlus />
          </span>
          Add Product
        </Button>
      </section>
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
