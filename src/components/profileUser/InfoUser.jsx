import React from "react";

const InfoUser = () => {
  const styleSpan = "font-bold text-green text-lg";
  return (
    <section className="flex items-center gap-3 border-1 border-light-gray rounded p-5 text-dark-green text-sm font-bold">
      <div className="w-36">
        <img src="/assets/profile.webp" alt="imgProfile" className="w-full" />
      </div>
      <div>
        <p>
          <span className={styleSpan}> Name : </span> rawan selima
        </p>
        <p>
          <span className={styleSpan}> Email :</span> rawanselima@gmail.com
        </p>
        <p>
          <span className={styleSpan}> Phone Number : </span> +201060661936
        </p>
      </div>
    </section>
  );
};

export default InfoUser;
