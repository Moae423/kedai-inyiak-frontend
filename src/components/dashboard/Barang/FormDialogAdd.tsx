"use client";
import React from "react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useForm } from "react-hook-form";
import {
  BarangFormData,
  barangFormSchema,
} from "@/lib/validation/barang/schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormDialogAddProps {
  loadingBarang: boolean;
  errorBarang: string | null;
  addBarang: (data: BarangFormData) => void;
}

const FormDialogAdd = ({
  loadingBarang,
  errorBarang,
  addBarang,
}: FormDialogAddProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BarangFormData>({
    resolver: zodResolver(barangFormSchema),
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add Data Barang Here!</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Tambah Data Barang</DialogTitle>
          <DialogDescription className="text-center">
            Tambahkan Data Barang jika ada yang belum ada
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(async (data) => {
            await addBarang(data);
            reset();
          })}
        >
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label>Nama Barang</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Enter Nama Barang Here"
                aria-autocomplete="none"
                autoComplete="off"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="grid gap-3">
              <Label>Harga Barang</Label>
              <Input
                id="harga"
                {...register("harga")}
                placeholder="Enter Harga Barang Here"
                defaultValue="3500"
                aria-autocomplete="none"
                autoComplete="off"
              />
              {errors.harga && (
                <p className="text-red-500">{errors.harga.message}</p>
              )}
            </div>
            <div className="grid gap-3">
              <Label>Stok Barang</Label>
              <Input
                id="stok"
                {...register("stok")}
                placeholder="Enter Jumlah Stok Barang Here"
                defaultValue="1"
                aria-autocomplete="none"
                autoComplete="off"
              />
              {errors.stok && (
                <p className="text-red-500">{errors.stok.message}</p>
              )}
            </div>
            <div className="grid gap-3">
              <Label>Tanggal Masuk</Label>
              <Input
                id="harga"
                {...register("tglMasuk")}
                type="date"
                placeholder="Enter Tanggal Masuk Here"
              />
              {errors.tglMasuk && (
                <p className="text-red-500">{errors.tglMasuk.message}</p>
              )}
            </div>
          </div>
          {errorBarang && <p className="text-red-500">{errorBarang}</p>}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive" disabled={loadingBarang}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">
              {loadingBarang ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialogAdd;
