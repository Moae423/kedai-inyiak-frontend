"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gambarino } from "@/lib/font";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/lib/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginServices } from "@/features/auth/services";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginFormData) => {
    try {
      await LoginServices(data.email, data.password);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center gap-5 min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/4 h-full border-3 border-gray-700 p-12  rounded-lg shadow-lg"
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
            <p className="text-red-500">{errors.password.message}</p>
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
        <div className="flex items-center justify-center my-3">
          <Button variant={"default"} type="submit" className="">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Home;
