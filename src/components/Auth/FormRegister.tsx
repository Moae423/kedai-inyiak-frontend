"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useRegister from "@/hooks/Auth/useRegister";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData, registerSchema } from "@/lib/validation/schema";

const FormRegister = () => {
  const { onSubmit, loading, error } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full md:w-1/4 border-3 border-gray-700 p-12  rounded-lg shadow-lg"
    >
      <h1 className="text-5xl font-bold text-center">REGISTER</h1>
      <div className="flex flex-col gap-3">
        <label htmlFor="email">Email</label>
        <Input placeholder="Enter Your Email" {...register("email")} />
        {errors.password && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="password">Password</label>
        <Input
          placeholder="Enter Your Password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="name">Name</label>
        <Input placeholder="Enter Your Name" {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name?.message}</p>}
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <Button className="w-full" type="submit" disabled={loading}>
        {loading ? "Loading..." : "Register"}
      </Button>
    </form>
  );
};

export default FormRegister;
