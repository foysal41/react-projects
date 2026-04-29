"use client";
import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    const { email, name, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      fallback: "/",
    });

    console.log(res, error);
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center bg-slate-400 ">
      <div className="p-4 rounded-full bg-white ">
        <h2 className="font-bold text-3xl text-center mb-3">
          Login your account
        </h2>

        <form
          action=""
          className="space-y-4 "
          onSubmit={handleSubmit(handleLoginFunc)}
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              {...register("name")}
              type="text"
              className="input"
              placeholder="Type Name here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              {...register("photo")}
              type="text"
              className="input"
              placeholder="photo lnk here"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              {...register("email")}
              type="email"
              className="input"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register("password", {
                required: "Password field is required",
              })}
              type="password"
              className="input"
              placeholder="Type here Password"
            />
            <p>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </p>
          </fieldset>

          <button className="btn w-full bg-slate-800 text-black">Login</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
