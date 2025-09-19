import InfoUser from "@/components/profileUser/InfoUser";
import Order from "@/components/profileUser/Order";
import React from "react";

const ProfileUser = () => {
  return (
    <main className="mx-auto">
      <InfoUser />
      <section>
        <Order />
      </section>
      <Order />
    </main>
  );
};

export default ProfileUser;
