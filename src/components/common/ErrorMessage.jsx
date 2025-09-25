import React from "react";

const ErrorMessage = ({ children }) => {
  return <p className="font-bold text-red-800 pt-1"> {children} </p>;
};

export default ErrorMessage;
