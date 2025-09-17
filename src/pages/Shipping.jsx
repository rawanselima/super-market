import HeaderSection from "@/components/common/HeaderSection";
import TableShipping from "@/components/shipping/TableShipping";
import React from "react";

const Shipping = () => {
  return (
    <main>
      <HeaderSection smallMargin={true} > Shipping Details </HeaderSection>
      <section className="xl:w-3/4 mx-auto w-full" >
        <TableShipping />
      </section>
    </main>
  );
};

export default Shipping;
