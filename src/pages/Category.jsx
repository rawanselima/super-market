import TableProducts from "@/components/allProducts/TableProducts";
import TableCategory from "@/components/Category/TableCategory";
import PopUp from "@/components/common/PopUp";
import TitleDashboardPages from "@/components/common/TitleDashboardPages";
import React, { useState } from "react";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <TitleDashboardPages
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"All Categories"}
        textBtn={"add category"}
      />

      <section className="overflow-x-auto w-full md:max-w-3/4 max-w-full mx-auto rounded">
        <TableCategory />
      </section>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Product"}>
        hello
      </PopUp>
    </main>
  );
};

export default Category;
