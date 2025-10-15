import React from "react";
import { IoPerson } from "react-icons/io5";
import { IoIosUnlock } from "react-icons/io";
import Button from "@/components/common/Button";
import { MdEmail } from "react-icons/md";
import { TiPhone } from "react-icons/ti";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/common/ErrorMessage";
import useAddUser from "@/components/Register/useAddUser";
import Spinner from "@/components/common/Spinner";
const Register = () => {
  const styleInput =
    "w-full px-3 py-1 border-2 border-light-green  rounded focus:outline-none focus:ring-2 focus:ring-green";
  const styleLabel = "flex gap-2 items-center font-bold text-dark-green my-3";

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useAddUser();

  function submit(data) {
    const newUser = {
      name: data.firstName + " " + data.lastName,
      phone: data.phone,
      email: data.email,
      password: data.password,
      role: "user",
    };

    mutate(newUser);
  }

  return (
    <main className="font-family-quicksand bg-[url('/assets/background.webp')] bg-cover bg-no-repeat bg-right w-full min-h-screen py-20">
      <section className="bg-white px-3 md:w-[600px] w-[95%] mx-auto rounded pt-10">
        <h1 className="mt-3 mb-6 font-bold text-dark-green text-4xl flex items-center justify-center gap-2">
          Sigh Up
        </h1>
        <form onSubmit={handleSubmit(submit)}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <div>
              <label htmlFor="firstName" className={styleLabel}>
                <IoPerson /> First Name *
              </label>
              <input
                type="text"
                name="firstName"
                className={styleInput}
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <ErrorMessage> First Name is required </ErrorMessage>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className={styleLabel}>
                <IoPerson /> Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                className={styleInput}
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <ErrorMessage> last Name is required </ErrorMessage>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="email" className={styleLabel}>
              <MdEmail /> Email *
            </label>
            <input
              type="email"
              name="email"
              className={styleInput}
              {...register("email", { required: true })}
            />
            {errors.email && <ErrorMessage> Email is required </ErrorMessage>}
          </div>
          <div>
            <label htmlFor="phone" className={styleLabel}>
              <span className="rotate-90">
                <TiPhone />
              </span>
              Phone Number *
            </label>
            <input
              type="phone"
              name="phone"
              className={styleInput}
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <ErrorMessage> phone number is required </ErrorMessage>
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
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <ErrorMessage> {errors.password.message} </ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword" className={styleLabel}>
              <IoIosUnlock />
              Confirm password *
            </label>
            <input
              type="password"
              name="confirmPassword"
              className={styleInput}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <ErrorMessage> {errors.confirmPassword.message} </ErrorMessage>
            )}
          </div>
          <p className="py-5">
            <Button size={"full"} type={"submit"}>
              {isPending ? <Spinner /> : "Sigh Up"}
            </Button>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Register;
