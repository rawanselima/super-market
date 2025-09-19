import HeaderSection from "@/components/common/HeaderSection";
import Pagination from "@/components/common/Pagination";
import TableFeedback from "@/components/feedback/TableFeedback";
import React from "react";

const Feedback = () => {
  const styleInput =
    " px-5 py-1 mx-1 border-1 border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-green";
  return (
    <main>
      <section className="flex justify-between items-center flex-wrap">
        <HeaderSection smallMargin={true}> Customer Feedback </HeaderSection>
        <form>
          <select name="rating" className={styleInput}>
            <option disabled>Filter By Rating</option>
            <option value="5"> 5 stars </option>
            <option value="4"> greeter than 4 stars</option>
            <option value="3"> greeter than 3 stars </option>
            <option value="2"> greeter than 2 stars</option>
            <option value="1"> greeter than 1 stars</option>
          </select>
        </form>
      </section>
      <section className="overflow-x-auto">
        <TableFeedback />
      </section>
      <section className="w-fit mx-auto">
        <Pagination />
      </section>
    </main>
  );
};

export default Feedback;
