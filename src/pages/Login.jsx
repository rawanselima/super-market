import React, { use, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { IoIosUnlock } from "react-icons/io";
import Button from "@/components/common/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLogin from "@/components/login/useLogin";
import ErrorMessage from "@/components/common/ErrorMessage";
import Spinner from "@/components/common/Spinner";
const Login = () => {
  const styleInput =
    "w-full px-3 py-2 border-2 border-light-green  rounded focus:outline-none focus:ring-2 focus:ring-green mb-5";
  const styleLabel =
    "flex gap-2 items-center text-lg font-bold text-dark-green mb-3";
  const [user, setUser] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useLogin();

  function submit(data) {
    const user = {
      phone: data.phone,
      password: data.password,
    };

    mutate(user);
  }

  return (
    <main className="font-family-quicksand bg-[url('/assets/background.webp')] bg-cover bg-no-repeat bg-right w-full min-h-screen pt-20">
      <section className="bg-white px-3 md:w-[600px] w-[95%] mx-auto rounded pt-10">
        <h1 className="mt-3 mb-6 font-bold text-dark-green text-4xl flex items-center justify-center gap-2">
          Sigh In
        </h1>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="phone" className={styleLabel}>
              <IoPerson /> Phone Number *
            </label>
            <input
              type="phone"
              name="phone"
              className={styleInput}
              {...register("phone", { required: "phone number is required" })}
            />
            {errors.phone && (
              <ErrorMessage> {errors.phone.message} </ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="password" className={styleLabel}>
              <IoIosUnlock /> password *
            </label>
            <input
              type="password"
              name="password"
              className={styleInput}
              {...register("password", { required: "password is required" })}
            />
            {errors.password && (
              <ErrorMessage> {errors.password.message} </ErrorMessage>
            )}
          </div>
          <Link to="/register">
            <p className="text-dark-gray">
              Don't have an account ?
              <span className="text-green text-sm font-bold"> Sign up </span>
            </p>
          </Link>
          <p className="py-5">
            <Button size={"full"} type={"submit"}>
              {isPending ? <Spinner /> : "Sigh In"}
            </Button>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
