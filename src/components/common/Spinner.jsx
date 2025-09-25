import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="w-2 h-2 rounded-full bg-dark-green animate-bounce"></div>
      <div className="w-2 h-2 rounded-full bg-green animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-2 h-2 rounded-full bg-light-green animate-bounce [animation-delay:-.5s]"></div>
    </>
  );
};

export default Spinner;
