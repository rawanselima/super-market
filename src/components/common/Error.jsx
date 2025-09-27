import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-green">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-dark-gray md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-dark-gray">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex text-white bg-green rounded-lg text-sm px-5 py-2.5 text-center  my-4"
          >
            Back to Previous Page
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error;
