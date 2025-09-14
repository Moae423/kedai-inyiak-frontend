"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAddBarang from "@/hooks/Barang/useAddBarang";
import {
  BarangFormData,
  barangFormSchema,
} from "@/lib/validation/barang/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const FormAdd = () => {
  const { loading, error, onSubmit } = useAddBarang();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BarangFormData>({
    // <-- Tambahkan type di sini
    resolver: zodResolver(barangFormSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full md:w-1/4 border-3 border-gray-700 p-12 rounded-lg shadow-lg"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-lg">
          Nama Barang
        </label>
        <Input
          id="name"
          placeholder="Enter Your Nama Barang"
          type="text"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500">{errors.name?.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="harga" className="text-lg">
          Harga Barang
        </label>
        <Input
          id="harga"
          placeholder="Enter Harga Barang"
          type="number"
          {...register("harga")}
        />
        {errors.harga && (
          <p className="text-red-500">{errors.harga?.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="stok" className="text-lg">
          Stok Barang
        </label>
        <Input
          id="stok"
          placeholder="Enter Stok Barang"
          type="number"
          {...register("stok")}
        />
        {errors.stok && <p className="text-red-500">{errors.stok?.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="tglMasuk" className="text-lg">
          Tanggal Masuk
        </label>
        <Input
          id="tglMasuk"
          type="date"
          {...register("tglMasuk")}
          className="w-full"
        />
        {errors.tglMasuk && (
          <p className="text-red-500">{errors.tglMasuk?.message}</p>
        )}
      </div>
      {error && <p className="text-red-500">{error}</p>}

      <Button type="submit">{loading ? "adding...." : "Submit"}</Button>
    </form>
  );
};

export default FormAdd;
