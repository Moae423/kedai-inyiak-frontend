"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { gambarino } from "@/lib/font";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/lib/validation/schema";
import useLogin from "@/hooks/useLogin";
import Link from "next/link";

const FormLogin = () => {
  const { onSubmit, loading, error } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:w-1/4 h-full border-3 border-gray-700 p-12  rounded-lg shadow-lg"
    >
      <h1
        className={`${gambarino.className} text-5xl font-black my-3 text-center `}
      >
        Kedai Inyiak
      </h1>
      <div className="flex flex-col gap-3">
        <label htmlFor="email">Email</label>
        <Input placeholder="Enter Your Email" {...register("email")} />
        {errors.password && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 my-3">
        <div className="flex items-center justify-between">
          <label htmlFor="password">Password</label>
          <p>
            Forget Your{" "}
            <Link
              href={""}
              className="text-blue-600 hover:underline  underline-offset-8"
            >
              Password?
            </Link>
          </p>
        </div>
        <Input
          placeholder="Enter Your Password"
          {...register("password")}
          type="password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex items-center justify-center my-3">
        <Button variant="default" type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
