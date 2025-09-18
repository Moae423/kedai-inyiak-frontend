"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Package2 } from "lucide-react";
import useAddBarang from "@/hooks/Barang/useAddBarang";
import { useForm } from "react-hook-form";
import {
  BarangFormData,
  barangFormSchema,
} from "@/lib/validation/barang/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const AddData = () => {
  const { loading, addBarang, error } = useAddBarang();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BarangFormData>({ resolver: zodResolver(barangFormSchema) });

  const onSubmit = async (data: BarangFormData) => {
    console.log(`data masuk : ${data}`);
    await addBarang(data);
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Tambah Data</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Package2 />
              Tambah Barang Baru
            </DialogTitle>
            <DialogDescription>
              Isi form di bawah ini untuk menambahkan barang baru ke inventory.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Nama Barang</Label>
              <Input
                id="name"
                placeholder={"Masukkan Nama Barang"}
                {...register("name", { required: "Nama barang wajib diisi" })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="harga">Harga Barang</Label>
              <Input
                id="harga"
                type="number"
                placeholder="Masukkan Harga Barang"
                {...register("harga", {
                  required: "Harga barang wajib diisi",
                  min: { value: 0, message: "Harga tidak boleh negatif" },
                })}
              />
              {errors.harga && (
                <span className="text-sm text-red-500">
                  {errors.harga.message}
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="stok">Stock</Label>
              <Input
                id="stok"
                type="number"
                placeholder="Masukkan Stock Barang"
                {...register("stok", {
                  required: "Stock wajib diisi",
                  min: { value: 0, message: "Stock tidak boleh negatif" },
                })}
              />
              {errors.stok && (
                <span className="text-sm text-red-500">
                  {errors.stok.message}
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tglMasuk">Tanggal Masuk Barang</Label>
              <Input
                id="tglMasuk"
                type="date"
                {...register("tglMasuk", {
                  required: "Tanggal masuk wajib diisi",
                })}
              />
              {errors.tglMasuk && (
                <span className="text-sm text-red-500">
                  {errors.tglMasuk.message}
                </span>
              )}
            </div>
          </div>
          <DialogFooter className="my-3">
            <DialogDescription>
              {error && <span className="text-sm text-red-500">{error}</span>}
            </DialogDescription>
            <DialogClose asChild>
              <Button variant={"destructive"} type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading} className="cursor-pointer">
              {loading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddData;
