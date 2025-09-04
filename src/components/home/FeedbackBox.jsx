import React from "react";

const FeedbackBox = () => {
  return (
    <div className="rounded bg-[rgb(249,255,249)] p-3" >
      <div className="flex items-center" >
        <img
          src="/assets/profile.jpeg"
          alt="feedback"
          loading="lazy"
          className="rounded-full w-10 h-10 mr-3 border-3 border-green/25 object-cover"
        />
        <p className="uppercase font-bold text-dark-green" > full name </p>
      </div>
      <div>
        <p className="text-sm text-dark-gray mt-3" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolore
          ducimus, soluta nam provident corrupti fugit, cumque iste quaerat
          saepe vitae.
        </p>
      </div>
    </div>
  );
};

export default FeedbackBox;
