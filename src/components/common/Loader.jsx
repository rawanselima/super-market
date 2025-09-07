import React from "react";

const Loader = () => {
  return (
    <main>
      <div className="flex flex-row h-screen items-center justify-center gap-2">
        <div className="w-4 h-4 rounded-full bg-dark-green animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-green animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-light-green animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </main>
  );
};

export default Loader;
